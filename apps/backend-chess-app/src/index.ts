import cors from 'cors';
import authRoute from './router/auth';
import passport from 'passport';
import express from 'express';
import session from 'express-session';
import {initPassport} from "@repo/passport-auth/auth";
require('dotenv').config();

const app = express();

app.use(
    session({
        secret: process.env.COOKIE_SECRET || 'cookie',
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false, maxAge: 24*60*60*1000 }
    }),
)

initPassport();
app.use(passport.initialize());
app.use(passport.authenticate('session'));
const allowedHosts = process.env.ALLOWED_HOSTS ? process.env.ALLOWED_HOSTS.split(','): [];

app.use(cors({origin: allowedHosts,methods: 'GET,POST,PUT,DELETEE', credentials: true}));

app.use('/auth',authRoute);

const PORT = process.env.WS_PORT || 3013;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });