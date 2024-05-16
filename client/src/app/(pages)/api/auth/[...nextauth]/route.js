import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
//   pages: {
//     signIn: '/signin',
//     error: '/api/auth/error',
//   },
//   callbacks: {
//     async signIn(user, account, profile) {
//       const res = await fetch('/api/auth/_log', {
//         method: 'POST',
//         body: JSON.stringify({ user, account, profile }),
//         headers: { 'Content-Type': 'application/json' },
//       });
//       const response = await res.json();
//       return response;
//     },
//   },
};

export const GET = (req, res) => NextAuth(req, res, options);
export const POST = (req, res) => NextAuth(req, res, options);
