import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { ZodError } from "zod";
import { prisma } from "./lib/prisma";
import { signInSchema } from "./schema/zod";
import { getUserFromDb } from "./utils/user";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt", maxAge: 60 * 60 }, // 1 day
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          if (!credentials?.email || !credentials.password) {
            throw new Error("Email and password are required.");
          }

          const { email, password } = await signInSchema.parseAsync(credentials);

          // logic to verify if the user exists
          const user = await getUserFromDb(email);

          if (!user || !user.password) {
            throw new Error("Invalid credentials.");
          }

          const isPasswordValid = await bcrypt.compare(password, user.password);
          if (!isPasswordValid) {
            throw new Error("Invalid credentials.");
          }

          // return JSON object with the user data
          return { id: user.id, email: user.email, name: user.name };
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
          return null;
        }
      },
    }),
  ],
});
