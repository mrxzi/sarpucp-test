import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import pool from '@/lib/db';

interface DatabaseError extends Error {
  code?: string;
  errno?: number;
  sqlState?: string;
  sqlMessage?: string;
}

export async function GET(request: Request) {
  let connection;
  
  try {
    // Validate session
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Unauthorized - No session found' 
        },
        { status: 401 }
      );
    }

    // Extract and validate discordId
    const url = new URL(request.url);
    const discordId = url.pathname.split('/').pop();
    
    if (!discordId) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Bad Request - Discord ID is required' 
        },
        { status: 400 }
      );
    }

    // Validate user access
    if (session.user.discordId !== discordId) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Forbidden - Access denied' 
        },
        { status: 403 }
      );
    }

    try {
      // Get database connection
      connection = await pool.getConnection();

      // First check if user has UCP
      const [ucpResult] = await connection.query(
        'SELECT ucp FROM playerucp WHERE DiscordID = ?',
        [discordId]
      );

      if (!Array.isArray(ucpResult) || ucpResult.length === 0) {
        return NextResponse.json({
          success: true,
          characters: [],
          count: 0,
          hasUcp: false
        });
      }

      // Get characters associated with the UCP
      const [characters] = await connection.query(
        `SELECT 
          c.pID as ID,
          c.Char_Name as CharacterName,
          c.Char_Level as Level,
          c.Char_Money as Money,
          c.Char_BankMoney as BankMoney,
          c.Char_PhoneNum as PhoneNumber,
          c.Char_Job as Job,
          c.Char_Faction as Faction,
          c.Char_Gender as Gender,
          c.Char_Skin as Skin,
          c.Char_Health as Health,
          c.Char_Armour as Armor,
          c.Char_PosX as PosX,
          c.Char_PosY as PosY,
          c.Char_PosZ as PosZ,
          c.Char_PosA as PosA,
          c.Char_LastLogin as LastLogin
        FROM player_characters c
        JOIN playerucp p ON c.Char_UCP = p.ucp
        WHERE p.DiscordID = ?`,
        [discordId]
      );

      // Ensure we return an array even if no characters found
      const formattedCharacters = Array.isArray(characters) ? characters : [];
      
      return NextResponse.json({
        success: true,
        characters: formattedCharacters,
        count: formattedCharacters.length,
        hasUcp: true
      });

    } catch (error) {
      const dbError = error as DatabaseError;
      console.error('Database error:', dbError);
      return NextResponse.json(
        { 
          success: false,
          error: 'Database error occurred',
          details: process.env.NODE_ENV === 'development' ? dbError.message : undefined
        },
        { status: 500 }
      );
    }

  } catch (error) {
    const serverError = error as Error;
    console.error('Error in characters API:', serverError);
    return NextResponse.json(
      { 
        success: false,
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? serverError.message : undefined
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
} 