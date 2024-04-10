'use server'
import { NEXT_AUTH_CONFIG } from "../auth";
import { getServerSession } from "next-auth";
import { start } from "repl";
import prisma from "@repo/prisma-db/client"

export async function createOnRamptxn(amount:number, provider:string){
    const session = await getServerSession(NEXT_AUTH_CONFIG as any);
    const userId = session?.user?.id;
    if (!userId){
        return {
            message: "User not logged in",
        }
    }
    const token = (Math.random()* 1000).toString()
    await prisma.onRampTransaction.create({
        data:{
            userId,
            amount: amount,
            token: token,
            status: 'Processing',
            provider,
            startTime: new Date()
        }
    });
}