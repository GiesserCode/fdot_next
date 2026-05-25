'use client'

import { signOut } from "@/app/actions";

export default function Logout() {
    return (
        <section className={"w-full grid place-items-center overflow-x-hidden maxW"}>
            <div>
                <button className={"w-full cursor-pointer text-xl text-secondary flex items-center gap-2"} onClick={() => {
                signOut();
            }}>Logout</button>
        </div>
        </section>
        
    )
}

