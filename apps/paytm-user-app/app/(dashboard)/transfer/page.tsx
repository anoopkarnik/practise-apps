import { getServerSession } from "next-auth";
import { AddMoney } from "../../../components/AddMoneyCard";
import { BalanceCard } from "../../../components/BalanceCard";
import { OnRampTransactionCard } from "../../../components/OnRampTransactionCard";
import { getNextAuthConfig } from "@repo/next-auth/auth";
import prisma from "@repo/prisma-db/client"

const NEXT_AUTH_CONFIG = getNextAuthConfig({
    GoogleProviderPresent: process.env.GOOGLE_PROVIDER_PRESENT || "false",
    GitHubProviderPresent: process.env.GITHUB_PROVIDER_PRESENT || "false",
    CredentialsProviderPresent: process.env.CREDENTIALS_PROVIDER_PRESENT || "false",
});

async function getBalance() {
 
    const session:any = await getServerSession(NEXT_AUTH_CONFIG as any)
    const balance = await prisma.balance.findFirst({
        where: {
            userId: session?.user?.id
        }
    })
    return {
        amount: balance?.amount || 0,
        locked: balance?.locked || 0
    }
}

async function getOnRampTransactions() {
    const session:any = await getServerSession(NEXT_AUTH_CONFIG as any);
    const txns = await prisma.onRampTransaction.findMany({
        where: {
            userId: session?.user?.id
        }
    });
    return txns.map(t => ({
        time: t.startTime,
        amount: t.amount,
        status: t.status,
        provider: t.provider
    }))
}

export default async function Transfer(){
    const balance = await getBalance();
    const onRampTransactions = await getOnRampTransactions();
    return (
        <div className="w-screen flex flex-col gap-4 p-4">
            <div className="text-4xl text-violet-800">Transfer</div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 p-4  ">
                <AddMoney/>
                <BalanceCard amount={balance.amount} locked={balance.locked}/>
                <OnRampTransactionCard transactions={onRampTransactions}/>
                
            </div>
        </div>
    )
}