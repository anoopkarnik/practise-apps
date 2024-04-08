import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import db from "@repo/prisma-db/client"
import { SessionStrategy } from "next-auth";


export const NEXT_AUTH_CONFIG = {
    session: {
        strategy: "jwt" as SessionStrategy,
    },
    adapter: PrismaAdapter(db),
    providers:[   
        GoogleProvider({
            clientId: process.env.GOOGLE_PROVIDER_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_PROVIDER_CLIENT_SECRET || "",
            profile(profile) {
                return({
                    id: profile.sub,
                    name: `${profile.given_name} ${profile.family_name}`,
                    email: profile.email,
                    image: profile.picture,
                    role: profile.role? profile.role : "user"
                })
            }
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_PROVIDER_CLIENT_ID || "",
            clientSecret: process.env.GITHUB_PROVIDER_CLIENT_SECRET || "",
            profile(profile) {
                return({
                    id: profile.id.toString(),
                    name: profile.name ?? profile.login,
                    email: profile.email,
                    image: profile.avatar_url,
                    role: profile.role? profile.role : "user"
                })
            }
        
        }),
        // LinkedInProvider({
        //     clientId: process.env.LINKEDIN_PROVIDER_CLIENT_ID || "",
        //     clientSecret: process.env.LINKEDIN_PROVIDER_CLIENT_SECRET ||  "",
        //     async profile(profile,tokens) {
        //         const emailResponse = await fetch(
        //             "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
        //             { headers: { Authorization: `Bearer ${tokens.access_token}` } }
        //           )
        //           const emailData = await emailResponse.json()
        //         return({
        //             id: profile.id,
        //             name: `${profile.localizedFirstName} ${profile.localizedLastName}`,
        //             email: emailData?.elements?.[0]?.["handle~"]?.emailAddress,
        //             image: profile.profilePicture?.["displayImage~"]?.elements?.[0]
        //             ?.identifiers?.[0]?.identifier,
        //             role: profile.role? profile.role : "user"
        //         })
        //     }
        //   })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks:{
        async jwt({token,user}:any){
            return {...token, ...user}
        },
        async session({session, token}:any){
            session.user.role = token.role;
            return session
        }
    }

}