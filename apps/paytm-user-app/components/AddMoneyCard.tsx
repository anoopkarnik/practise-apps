'use client'

import { Button } from "@repo/ui/components/button"
import { Card,CardTitle, CardContent } from "@repo/ui/components/card"
import { Input } from "@repo/ui/components/input"
import { Select ,SelectContent,SelectItem, SelectTrigger, SelectValue} from "@repo/ui/components/select"
import { Label } from "@repo/ui/components/label"
import {Form,FormItem,FormLabel,FormControl,FormField} from "@repo/ui/components/form"

import { useState } from "react"

const SUPPORTED_BANKS = [{
    name: 'HDFC Bank',
    redirectUrl: 'https://netbanking.hdfcbank.com'
},{
    name: 'Axis Bank',
    redirectUrl: 'https://www.axisbank.com/'
}]

export const AddMoney = ()=>{
    const [redirectUrl, setRedirectUrl] = useState(SUPPORTED_BANKS[0]?.redirectUrl)
    return (
        <Card className="my-4 p-4 border flex flex-col gap-4 w-full">
            <CardTitle>Add Money</CardTitle>
            <CardContent className="p-4 flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="Amount">Amount</Label>
                    <Input type="number" placeholder="Amount" onChange={()=>{}}/>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="Bank">Bank</Label>
                    <Select>
                        <SelectTrigger>
                            <SelectValue placeholder={SUPPORTED_BANKS[0]?.name}/>
                        </SelectTrigger>
                        <SelectContent>
                            {SUPPORTED_BANKS.map((bank)=>(
                                <SelectItem key={bank.name} value={bank.name} 
                                onSelect={()=>setRedirectUrl(bank.redirectUrl)}>{bank.name}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button onClick={()=>{window.location.href = redirectUrl || ''}}>Add Money</Button>
            </CardContent>
        </Card>

    )
}