import NextAuth from "next-auth/next";
import { getNextAuthConfig } from "@repo/next-auth/auth";

const NEXT_AUTH_CONFIG = getNextAuthConfig({
    GoogleProviderPresent: process.env.GOOGLE_PROVIDER_PRESENT || "false",
    GitHubProviderPresent: process.env.GITHUB_PROVIDER_PRESENT || "false",
    CredentialsProviderPresent: process.env.CREDENTIALS_PROVIDER_PRESENT || "false",

});

const handler = NextAuth(NEXT_AUTH_CONFIG as any);

export {handler as GET, handler as POST}