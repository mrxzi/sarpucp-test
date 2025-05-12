import 'next-auth';
import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      discordId: string;
      username: string;
    } & DefaultSession['user'];
  }

  interface Profile {
    id: string;
    username: string;
  }
} 