import { NEXT_AUTH_CONFIG } from "@repo/next-auth/auth";
import NextAuth from "next-auth/next";


const handler = NextAuth(NEXT_AUTH_CONFIG);

export {handler as GET, handler as POST}