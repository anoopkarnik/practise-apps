const express = require('express');
const {User} = require('../models/db');
const router = express.Router();
require('dotenv').config();


router.get('/',  async(req:any,res:any,next:any)=>{
    const name = req.query.filter || '';
    const users = await User.find({ name: { $regex: `^${name}`, $options: 'i' } });
    res.json({user: users.filter((user:any) => user._id!=req.userId).map((user:any)=>({username: user.username,
         name: user.name, _id: user._id, gender: user.gender, profilePic: user.profilePic}))});
})

module.exports = router; 