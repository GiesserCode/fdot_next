import {blackOpsOne} from "@/app/ui/fonts";
import Link from 'next/link';
import {LinkSVG, PaperSVG} from "@/app/ui/SVG";
import Tasks from "@/app/components/dashboard/UserTasks";
import {Suspense} from "react";
import {ClockSkeleton} from "@/app/components/dashboard/Skeletons";
import dynamic from "next/dynamic";

const Clock = dynamic(() => import ("@/app/components/dashboard/Clock"), { ssr: false })
const InsightInfo = async ({users}: any) => {
    console.log(users)

    return <div className={`w-full grid place-items-center overflow-x-hidden`}>
        <div className={`w-full flex justify-between max-lg:flex-col max-lg:gap-5 mb-5`}>
            <div className={`w-[30%] grid place-items-center bg-normalBG rounded-xl p-5 max-lg:w-full`}>
                <div className={`text-center`}>
                    <Suspense fallback={<ClockSkeleton/>}>
                        <Clock />
                    </Suspense>
                </div>
            </div>
            <div className={`w-[30%] grid place-items-center bg-normalBG rounded-xl p-5 max-lg:w-full`}>
                <div className={`text-center`}>
                    <h2 className={`${blackOpsOne.className} antialiased text-4xl`}>
                        {users?.hours}
                    </h2>
                    <p className={`text-secondary`}>Stunden</p>
                </div>
            </div>
            <Links users={users}/>
        </div>
        <Notes users={users} />
        {users.tasks.length !== 0 && <Tasks users={users} />}
    </div>
}

function Links({users}: any){
    return users.code_link && users.figma_link && <div className={`w-[30%] flex flex-col justify-between items-center h-full gap-5 max-lg:w-full`}>
        <div className={`w-full bg-normalBG rounded-xl p-5`}>
            <Link href={users.figma_link} className={`w-full cursor-pointer text-xl text-secondary flex items-center gap-2`}><PaperSVG/> Figma Design File</Link>
        </div>
        <div className={`w-full bg-normalBG rounded-xl p-5`}>
            <Link href={users.code_link} className={`w-full cursor-pointer text-xl text-secondary flex items-center gap-2`}><LinkSVG />Webseite</Link>
        </div>
    </div>
}

function Notes({users}: any){
    return users.notes && <div className={`w-full text-start my-10 text-2xl text-secondary`}>
        <textarea className={`text-start no-focus normal-input w-full`} rows={6} disabled={true}>{users.notes}</textarea>
    </div>
}

export default InsightInfo