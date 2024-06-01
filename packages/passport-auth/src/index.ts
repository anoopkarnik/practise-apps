const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
import passport from 'passport';
import db from "@repo/prisma-db/client"
import jwt from 'jsonwebtoken';

interface GithubEmailRes {
    email: string;
    primary: boolean;
    verified: boolean;
    visibility: 'private' | 'public';
  }

const GOOGLE_PROVIDER_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || 'your_google_client_id';
const GOOGLE_PROVIDER_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || 'your_google_client_secret';
const GITHUB_PROVIDER_CLIENT_ID = process.env.GITHUB_CLIENT_ID || 'your_github_client_id';
const GITHUB_PROVIDER_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET || 'your_github_client_secret';

const JWT_SECRET = process.env.JWT_SECRET || 'jwt_secret';

export function initPassport(){
    if (
        !GOOGLE_PROVIDER_CLIENT_ID ||
        !GOOGLE_PROVIDER_CLIENT_SECRET ||
        !GITHUB_PROVIDER_CLIENT_ID ||
        !GITHUB_PROVIDER_CLIENT_SECRET
      ) {
        throw new Error('Missing environment variables for Authentication Providers');
      }
    
      passport.use(
        new GoogleStrategy(
            {
                clientID: GOOGLE_PROVIDER_CLIENT_ID,
                clientSecret: GOOGLE_PROVIDER_CLIENT_SECRET,
                callbackURL: '/auth/google/callback',
            },
            //@ts-ignore
            async function (accessToken, refreshToken, profile, done) {
                const user = await db.chessUser.upsert({
                where: { email: profile.emails![0].value },
                update: {},
                create: {
                    email: profile.emails![0].value,
                    name: profile.displayName,
                    provider: 'GOOGLE',
                },
                });
                return done(null, user);
            }
        )
      )

      passport.use(
        new GithubStrategy(
            {
                clientID: GITHUB_PROVIDER_CLIENT_ID,
                clientSecret: GITHUB_PROVIDER_CLIENT_SECRET,
                callbackURL: '/auth/github/callback',
            },
            async function (accessToken: string, refreshToken: string, profile: any, done: (error: any, user?: any) => void)
                {
                    const res = await fetch('https://api.github.com/user/emails',{
                        headers: {
                            Authorization: `token ${accessToken}`
                        }
                    });
                    const data: GithubEmailRes[] = await res.json();
                    const primaryEmail = data.find((item) => item.primary === true)

                    const user = await db.chessUser.upsert({
                        where: { email: primaryEmail?.email },
                        update: { name: profile.displayName},
                        create: {
                            email: primaryEmail!.email,
                            name: profile.displayName,
                            provider: 'GITHUB'
                        },
                    });
                }
        )
      )
      passport.serializeUser(function (user: any, cb) {
        process.nextTick(function () {
          return cb(null, {
            id: user.id,
            username: user.username,
            picture: user.picture,
          });
        });
      });
    
      passport.deserializeUser(function (user: any, cb) {
        process.nextTick(function () {
          return cb(null, user);
        });
      });
    
}

export const extractUserId = (token:string) =>{
    const decoded = jwt.verify(token, JWT_SECRET) as {userId: string};
    return decoded.userId;
}