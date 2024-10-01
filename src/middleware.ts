import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import axios from "axios"
import { cookies } from 'next/headers'
import { getProfile } from './services/auth.service'
import { type Error } from './@type'

const protectRoute = [
    "/dashboard"
]

export async function middleware(request: NextRequest) {

    const isLogged = request.cookies.get("auth-cookie")?.value
    console.log({ isLogged })


    return NextResponse.next()
}