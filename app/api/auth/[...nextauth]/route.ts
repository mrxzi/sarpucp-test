import NextAuth, { DefaultSession } from 'next-auth';
import DiscordProvider from 'next-auth/providers/discord';
import { JWT } from 'next-auth/jwt';
import { Session } from 'next-auth';
import { Account, Profile } from 'next-auth';

interface ExtendedToken extends JWT {
  discordId?: string;
  username?: string;
}

interface ExtendedSession extends DefaultSession {
  user: {
    discordId?: string;
    username?: string;
  } & DefaultSession['user']
}

interface DiscordProfile extends Profile {
  id: string;
  username: string;
  email?: string;
}

export const authOptions = {
  providers: [
    DiscordProvider({
      clientId: process.env.DISCORD_CLIENT_ID!,
      clientSecret: process.env.DISCORD_CLIENT_SECRET!,
      authorization: {
        params: {
          scope: 'identify email',
        },
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }: { 
      token: JWT; 
      account: Account | null; 
      profile?: DiscordProfile 
    }) {
      if (account && profile && 'username' in profile) {
        return {
          ...token,
          discordId: profile.id,
          username: profile.username
        } as ExtendedToken;
      }
      return token as ExtendedToken;
    },
    async session({ session, token }: { 
      session: Session; 
      token: ExtendedToken 
    }): Promise<ExtendedSession> {
      return {
        ...session,
        user: {
          ...session.user,
          discordId: token.discordId,
          username: token.username
        }
      };
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }; 