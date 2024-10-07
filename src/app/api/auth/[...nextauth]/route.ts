import { AxiosError } from "axios";
import { AuthOptions, Session, type User } from "next-auth";
import NextAuth from "next-auth/next";
import { jwtDecode } from "jwt-decode"
import { login } from "#/services/auth.service";
import CredentialsProvider from "next-auth/providers/credentials";
import type { Auth, Error } from "#/@type";

type Token = { access_token: string }
type Credential = User & Token

export const authOption: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { type: "email", label: "username" },
                password: { type: "password", label: "password" }
            },
            async authorize(credentials) {
                const email = credentials?.email
                const password = credentials?.password

                try {
                    const res = await login({ email, password })
                    const access_token = res?.data.access_token
                    return { access_token } as unknown as Credential

                } catch (error) {
                    const err = error as AxiosError<Error>
                    throw new Error(JSON.stringify(err.response?.data, null, 2))
                }
            }
        })
    ],
    pages: {
        signIn: "/admin/login",
        signOut: "/admin/login"
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        jwt: (props) => {
            const user = props.user as Credential
            const token = props.token as Token

            if (user?.access_token) {
                token.access_token = user?.access_token
                console.log(user.access_token)
            }
            return token
        },
        async session(props) {
            const session = props.session as Session
            const token = props.token as Token
            const { email, username, createdAt } = jwtDecode(token.access_token) as Auth

            // Save the JWT token to the session object
            session.user = {
                email, username, createdAt,
                access_token: token.access_token
            } as Auth

            return session;
        },
    }
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }