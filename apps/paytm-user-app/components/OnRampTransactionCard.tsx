import { Card,CardTitle, CardContent } from "@repo/ui/components/card"
import {Table,TableBody,TableCaption,TableCell,TableHead,TableHeader,TableRow,} from "@repo/ui/components/table"

export const OnRampTransactionCard = ({transactions}:{transactions:{time:Date,amount:number,status:string,provider:string}[]}) =>{
    if (!transactions.length){
        return (
            <Card className="my-4 p-4 border flex flex-col gap-4 w-full">
                <CardTitle>Transactions</CardTitle>
                <CardContent className="p-4 flex flex-col gap-4 w-full">
                    <div className="text-center text-slate-500">
                        No transactions
                    </div>
                </CardContent>
            </Card>
        )
    }
    return(
        <Card className="my-4 p-4 border flex flex-col gap-4 w-full">
        <CardTitle>Transactions</CardTitle>
        <CardContent className="p-4 flex flex-col gap-4 w-full">
            <Table>
                <TableHeader>
                    <TableRow>
                    <TableHead >Date</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead >Provider</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {transactions.map((t)=>(
                        <TableRow key={t.time.toDateString()}>
                            <TableCell>{t.time.toDateString()}</TableCell>
                            <TableCell>+ Rs {t.amount/100}</TableCell>
                            <TableCell>{t.status}</TableCell>
                            <TableCell>{t.provider}</TableCell>
                        </TableRow>    
                    ))}
                </TableBody>
            </Table>
        </CardContent>
    </Card>

    )
}