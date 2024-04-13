'use server'

import { getServerSession } from "next-auth"
import { NEXT_AUTH_CONFIG } from "../auth"
import prisma from "@repo/prisma-db/client";

export async function p2pTransfer(to:string,amount:number){
    const session:any = await getServerSession(NEXT_AUTH_CONFIG as any);
    const from = session?.user?.id;
    if (!from){
        return {
            message: "User not logged in",
        }
    }
    const toUser = await prisma.user.findFirst({
        where:{
            email:to
        }
    })
    if (!toUser){
        return {
            message: "User not found"
        }
    }

    await prisma.$transaction(async(tx)=>{
        await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${from} FOR UPDATE`;
        const fromBalance = await prisma.balance.findUnique({
            where: {userId: from}
        });
        if (!fromBalance || fromBalance.amount < amount){
            throw new Error("Insufficient balance")
        }
        await tx.balance.update({
            where: {userId: from},
            data: {amount: {decrement: amount}}
        })
        await tx.balance.update({
            where: {userId: toUser.id},
            data: {amount: {increment: amount}}
        })
    })
}