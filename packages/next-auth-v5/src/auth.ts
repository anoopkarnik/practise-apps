
import NextAuth from "next-auth"

import db from '@repo/prisma-db/client'
import authConfig from "./auth.config"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { getAccountByUserId, getUserById } from "@repo/prisma-db/repo/user"

 
export const { auth, handlers, signIn, signOut }:any = NextAuth({
    adapter: PrismaAdapter(db),
    session: { strategy: 'jwt'},
    ...authConfig,
    pages:{
        signIn: '/auth/login'
    },
    callbacks: {
        async session({session,token}){
            if (token.sub && session.user){
                session.user.id = token.sub
            }
            return session
        }

    }
})