import { getUser, loginUser, registerUser } from "@/stores/slices/userSlice";
import NextAuth, { NextAuthOptions } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
    debug: true,
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/auth/signin",
    },
    providers: [
        Credentials({
            credentials: {},
            async authorize(credentials: any) {
                const payload = {
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password,
                }
                try {

                    const data: any = credentials.type == "register" ? await registerUser(payload) : await loginUser(payload)
                    return {
                        token: data.token,
                        id: "1",
                    }
                } catch (error: any) {
                    throw Error(error)
                }
            }
        }),
    ],
    callbacks: {
        jwt: async ({ token, user, trigger, session }: any) => {
            user && (token.user = user)
            if (trigger === 'update') {
                if (session.status) {
                    token.user.status = session.status
                }
                if (session.name) {
                    token.user.name = session.name
                }
            }
            return token
        },
        session: async ({ session, token }: any) => {
            session.user = token.user
            return session
        },
        signIn: async ({ user }: any) => {
            try {
                const {data}: any = await getUser(user.token)
                user.name = data.name
                user.role = data.role
                user.__v = data.__v
                user.createdAt = data.createdAt
                user._id = data._id
                user.email = data.email
                user.id = data.id
                
                return true
            } catch (error) {
                return false
            }
        }
    },
    session: {
        strategy: "jwt",
        maxAge: parseInt(process.env.NEXTAUTH_MAX_AGE as string)
    }
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST };
