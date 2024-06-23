import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type {NextAuthConfig} from "next-auth";
import linkedin from "next-auth/providers/linkedin";

export default {
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID,
            clientSecret: process.env.AUTH_GITHUB_SECRET
        })
    ]
} satisfies NextAuthConfig;