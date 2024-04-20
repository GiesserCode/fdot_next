import {blackOpsOne} from "@/app/ui/fonts";
import Link from "next/link"
import {BackSVG} from "@/app/ui/SVG";

const ViewUsers = ({ users }: any) => {
    return (
        <section className={`w-full grid place-items-center`}>
            <div className={`w-full p-12 pt-20 maxW relative`}>
                <Link
                    href="/dashboard"
                    className="focus:outline-none focus:bg-gblue absolute z-30 left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
                >
                    <BackSVG/>
                    {" "}
                    Back
                </Link>
                <h1 className={`text-2xl ${blackOpsOne.className} antialiased text-primary`}>
                    Your Users
                </h1>
                <div className={`w-full flex flex-wrap gap-10 py-5`}>
                    {users!.map((item: any, index: number) => (
                        <Link href={`/dashboard/views/insights?query=${item.id}`} key={index} className={`p-5 bg-normalBG border border-lightBG text-xl rounded-xl w-min whitespace-nowrap`}>
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ViewUsers;