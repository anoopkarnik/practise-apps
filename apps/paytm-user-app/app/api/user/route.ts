import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "../../lib/auth"

export const GET = async () => {

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