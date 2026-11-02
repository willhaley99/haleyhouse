import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { isAuthorizedEmail } from "@/lib/authorization";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/signin",
  },
  callbacks: {
    signIn: ({ account, profile, user }) =>
      account?.provider === "google" &&
      profile !== undefined &&
      "email_verified" in profile &&
      profile.email_verified === true &&
      isAuthorizedEmail(user.email),
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
