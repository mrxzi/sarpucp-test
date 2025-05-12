import { NextResponse } from 'next/server';
import crypto from 'crypto';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import pool from '@/lib/db';

interface DatabaseError extends Error {
  code?: string;
  errno?: number;
  sqlState?: string;
  sqlMessage?: string;
}

export async function POST(request: Request) {
  let connection;
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { ucpName, password } = await request.json();

    if (!ucpName || !password) {
      return NextResponse.json(
        { error: 'Username and password are required' },
        { status: 400 }
      );
    }

    if (!session.user.discordId) {
      return NextResponse.json(
        { error: 'Discord ID is required' },
        { status: 400 }
      );
    }

    connection = await pool.getConnection();

    // Check if UCP name already exists
    const [existingUsers] = await connection.query(
      'SELECT * FROM playerucp WHERE ucp = ?',
      [ucpName]
    );

    if (Array.isArray(existingUsers) && existingUsers.length > 0) {
      return NextResponse.json(
        { error: 'UCP name already exists' },
        { status: 400 }
      );
    }

    // Check if Discord ID is already linked
    const [existingDiscord] = await connection.query(
      'SELECT * FROM playerucp WHERE DiscordID = ?',
      [session.user.discordId]
    );

    if (Array.isArray(existingDiscord) && existingDiscord.length > 0) {
      return NextResponse.json(
        { error: 'Discord account already linked to another UCP' },
        { status: 400 }
      );
    }

    // Generate random verifycode (6 digits)
    const verifycode = Math.floor(100000 + Math.random() * 900000);
    
    // Generate salt
    const salt = crypto.randomBytes(8).toString('hex');
    
    // Hash password (using the game's format - uppercase hex)
    const hashedPassword = crypto
      .createHash('sha256')
      .update(password + salt)
      .digest('hex')
      .toUpperCase();

    // Create new UCP
    await connection.query(
      `INSERT INTO playerucp (ucp, verifycode, password, salt, DiscordID, extrac, reedem) 
       VALUES (?, ?, ?, ?, ?, 0, 0)`,
      [ucpName, verifycode, hashedPassword, salt, session.user.discordId]
    );

    // Log the creation
    await connection.query(
      `INSERT INTO discordlog (Admin, Action, Tujuan) 
       VALUES (?, ?, ?)`,
      ['System', 'Created UCP', ucpName]
    );

    // Verify the insertion
    const [newUser] = await connection.query(
      'SELECT ID, ucp, verifycode, DiscordID FROM playerucp WHERE ucp = ?',
      [ucpName]
    );

    if (!Array.isArray(newUser) || newUser.length === 0) {
      throw new Error('Failed to verify UCP creation');
    }

    return NextResponse.json({
      message: 'UCP created successfully',
      verifycode: verifycode,
      ucp: ucpName
    });

  } catch (error) {
    console.error('Error creating UCP:', error);
    const dbError = error as DatabaseError;
    return NextResponse.json(
      { 
        error: dbError.sqlMessage || dbError.message || 'Internal server error',
        code: dbError.code
      },
      { status: 500 }
    );
  } finally {
    if (connection) {
      connection.release();
    }
  }
} 