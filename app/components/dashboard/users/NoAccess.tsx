import {FdotLockSVG} from "@/app/ui/SVG";
import Link from "next/link"

const NoAccess = () => {
    return <section className={`w-full h-screen grid place-items-center`}>
        <Link className={`flex flex-col items-center text-xl text-primary gap-8 cursor-pointer`} href={"/"}>
            <div className={`mb-20`}>
                <FdotLockSVG/>
            </div>
            Sie haben keinen zugriff auf diese Seite.
        </Link>
    </section>
}

export default NoAccess