"use client";

import React from "react";
import Image from "next/image";
import { useCredential } from "#/lib/credential";

export default function Avatar() {
    const { credential } = useCredential()
    return (
        <figure className="center flex cursor-pointer gap-2">
            <Image
                src="/image/ishowspeed.jpg"
                width={60}
                height={60}
                className="size-8 rounded-full object-cover"
                alt="avatar"
            />
            <figcaption>
                <div className="-space-y-1">
                    <h2 className="-tracking-wider font-medium text-sm">{credential?.username ?? "[Unknown]"}</h2>
                    <p className="-tracking-wider text-[12px] text-gray-500">{credential?.email ?? "[unknown]"}</p>
                </div>
            </figcaption>
        </figure>
    )
}