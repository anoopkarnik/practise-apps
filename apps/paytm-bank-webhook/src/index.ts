import express from 'express';
import db from "@repo/prisma-db/client"

const app = express();

app.post('/hdfcWebhook', async (req, res) => {
    const paymentInformation:{
        token: string,
        userId: string,
        amount: string
    
    } = {
        token: req.body.token,
        userId: req.body.userId,
        amount: req.body.amount
    };
    try{
        await db.$transaction([
            db.balance.updateMany({
                where:{
                    userId: paymentInformation.userId
                },
                data:{
                    amount:{
                        increment: Number(paymentInformation.amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where:{
                    token: paymentInformation.token
                },
                data:{
                    status: "Success"
                }
            })
        ])
        res.json({
            message: "captured"
        })
    }catch(e){
        console.error(e);
        res.status(411).json({
            message: "error while processing webhook"
        })
    }
});

app.listen(3010)

