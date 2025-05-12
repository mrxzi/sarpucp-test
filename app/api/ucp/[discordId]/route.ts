import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import pool from '@/lib/db';

export async function GET(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    const url = new URL(request.url);
    const discordId = url.pathname.split('/').pop();

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    if (!discordId || session.user.discordId !== discordId) {
      return NextResponse.json(
        { error: 'Forbidden' },
        { status: 403 }
      );
    }

    const connection = await pool.getConnection();

    try {
      // Log the check
      await connection.query(
        `INSERT INTO discordlog (Admin, Action, Tujuan) 
         VALUES (?, ?, ?)`,
        ['System', 'Checked UCP', discordId]
      );

      const [users] = await connection.query(
        'SELECT ID, ucp, verifycode, DiscordID, extrac, reedem FROM playerucp WHERE DiscordID = ?',
        [discordId]
      );

      if (!Array.isArray(users) || users.length === 0) {
        return NextResponse.json(
          { error: 'UCP not found' },
          { status: 404 }
        );
      }

      const user = users[0];
      return NextResponse.json(user);

    } finally {
      connection.release();
    }

  } catch (error) {
    console.error('Error fetching UCP data:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 