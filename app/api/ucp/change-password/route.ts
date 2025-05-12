import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import pool from '@/lib/db';
import crypto from 'crypto';
import { RowDataPacket } from 'mysql2';

interface PlayerUCP extends RowDataPacket {
  ID: number;
  ucp: string;
  DiscordID: string;
  password: string;
  salt: string;
  verifycode: number;
  extrac: number;
  reedem: number;
}

export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { ucpName, currentPassword, newPassword } = await request.json();

    if (!ucpName || !currentPassword || !newPassword) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    const connection = await pool.getConnection();

    try {
      // Get current user data
      const [users] = await connection.query<PlayerUCP[]>(
        'SELECT * FROM playerucp WHERE ucp = ? AND DiscordID = ?',
        [ucpName, session.user.discordId]
      );

      if (!Array.isArray(users) || users.length === 0) {
        return NextResponse.json(
          { error: 'UCP not found or not owned by you' },
          { status: 404 }
        );
      }

      const user = users[0];

      // Verify current password
      const currentHashedPassword = crypto
        .createHash('sha256')
        .update(currentPassword + user.salt)
        .digest('hex')
        .toUpperCase();

      if (currentHashedPassword !== user.password) {
        return NextResponse.json(
          { error: 'Current password is incorrect' },
          { status: 400 }
        );
      }

      // Generate new salt (8 bytes = 16 hex characters)
      const newSalt = crypto.randomBytes(8).toString('hex');
      
      // Hash new password
      const newHashedPassword = crypto
        .createHash('sha256')
        .update(newPassword + newSalt)
        .digest('hex')
        .toUpperCase();

      // Update password and salt
      await connection.query(
        'UPDATE playerucp SET password = ?, salt = ? WHERE ID = ?',
        [newHashedPassword, newSalt, user.ID]
      );

      return NextResponse.json({
        message: 'Password changed successfully'
      });

    } finally {
      connection.release();
    }

  } catch (error) {
    console.error('Password change error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 