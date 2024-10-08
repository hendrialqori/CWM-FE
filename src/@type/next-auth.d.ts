/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from "next-auth";

declare module "next-auth" {
    interface Session {
        user: {
            id: number;
            username: string;
            email: string;
            password: string;
            access_token: string
            createdAt: string;
        }
    }
}