import { Card,CardTitle, CardContent } from "@repo/ui/components/card"
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@repo/ui/components/table"

export const BalanceCard = ({amount,locked}:{amount:number,locked:number}) =>{
    return (
        <Card className="my-4 p-4 border flex flex-col gap-4 w-full">
            <CardTitle>Balance</CardTitle>
            <CardContent className="p-4 flex flex-col gap-4 w-full">
                <div className="flex justify-between border-b border-slate-300 pb-2">
                    <div>
                        Unlocked balance
                    </div>
                    <div>
                        {amount / 100} INR
                    </div>
                </div>
                <div className="flex justify-between border-b border-slate-300 py-2">
                    <div>
                        Total Locked Balance
                    </div>
                    <div>
                        {locked / 100} INR
                    </div>
                </div>
                <div className="flex justify-between border-b border-slate-300 py-2">
                    <div>
                        Total Balance
                    </div>
                    <div>
                        {(locked + amount) / 100} INR
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}