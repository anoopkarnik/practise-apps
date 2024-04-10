'use client'

import { Button } from "@repo/ui/components/button"
import { Card,CardTitle, CardContent } from "@repo/ui/components/card"
import { Input } from "@repo/ui/components/input"
import { Select ,SelectContent,SelectItem, SelectTrigger, SelectValue} from "@repo/ui/components/select"
import { Label } from "@repo/ui/components/label"
import { useState } from "react"
import { p2pTransfer } from "../app/lib/actions/p2pTransfer"

export const TransferMoneyCard = ()=>{
    const [email, setEmail] = useState('')
    const [amount, setAmount] = useState(0)
    return (
        <Card className="my-4 p-4 border flex flex-col gap-4 w-full">
            <CardTitle>Send Money</CardTitle>
            <CardContent className="p-4 flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="Email">Email</Label>
                    <Input type="email" placeholder="Email" onChangeCapture={(e)=>setEmail(e.currentTarget.value)}/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="Amount">Amount</Label>
                    <Input type="number" placeholder="Amount" onChangeCapture={(e)=>setAmount(Number(e.currentTarget.value))}/>
                </div>
                <Button onClick={async ()=>{
                    await p2pTransfer(email, amount)
                }}>
                        Send
                </Button>
            </CardContent>
        </Card>

    )
}