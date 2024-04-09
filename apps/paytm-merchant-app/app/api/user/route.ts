import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { getNextAuthConfig } from "@repo/next-auth/auth"

export const GET = async () => {

    const NEXT_AUTH_CONFIG = getNextAuthConfig({
        GoogleProviderPresent: process.env.GOOGLE_PROVIDER_PRESENT || "false",
        GitHubProviderPresent: process.env.GITHUB_PROVIDER_PRESENT || "false",
        CredentialsProviderPresent: process.env.CREDENTIALS_PROVIDER_PRESENT || "false",

    });

    const session = await getServerSession(NEXT_AUTH_CONFIG as any)
    if (session && session.user){
        return NextResponse.json({
            user: session.user
        })
    }
    return NextResponse.json({
            message: "You are not logged in"
        },
        {
            status: 403
        }
    )
}