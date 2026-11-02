import { withAuth } from "next-auth/middleware";
import { isAuthorizedEmail } from "@/lib/authorization";

const proxy = withAuth({
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    authorized: ({ token }) => isAuthorizedEmail(token?.email),
  },
});

export default proxy;

export const config = {
  matcher: ["/dashboard/:path*"],
};
