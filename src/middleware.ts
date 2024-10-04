import { NextResponse } from 'next/server'
// import type { NextRequest } from 'next/server'
// import axios from "axios"
// import { cookies } from 'next/headers'
// import { getProfile } from './services/auth.service'
// import { type Error } from './@type'

// const PREFIX = "/admin"

// const protectRoute = [
//     "/dashboard"
// ]

export async function middleware() {

    // const auth_cookie = request.cookies.get("auth-cookie")?.value
    // console.count(auth_cookie)


    return NextResponse.next()
}