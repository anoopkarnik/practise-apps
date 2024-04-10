const express = require('express');
import db from "@repo/prisma-db/client"

const app = express();
app.use(express.json());

app.post('/hdfcWebhook', async (req, res) => {

    const { token, userId, amount } = req.body;
    try{
        await db.$transaction([
            db.balance.updateMany({
                where:{
                    userId: userId
                },
                data:{
                    amount:{
                        increment: Number(amount)
                    }
                }
            }),
            db.onRampTransaction.updateMany({
                where:{
                    token: token
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

app.listen(3010, () => {
    console.log('Server is running on port 3010');
})

