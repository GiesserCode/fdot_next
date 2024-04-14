import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import UserInfo from "@/app/components/dashboard/UserInfo";
import {BackSVG} from "@/app/ui/SVG";
import Link from "next/link";
import NoAccess from "@/app/components/dashboard/administration/NoAccess";

const Page = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {data: activeSession} = await supabase.auth.getSession()
    const {data: {user}} = await supabase.auth.getUser();


    if (!activeSession || !user) {
        return redirect("/login")
    }


    const { data: users, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', searchParams!.query);


    return  <div className={`w-full p-12 pt-20`}>
        <Link
            href="/dashboard/views"
            className="focus:outline-none focus:bg-gblue absolute z-30 left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
            <BackSVG/>
            {" "}
            Back
        </Link>
        {users ? <UserInfo users={users![0]}/> : <NoAccess/>}
    </div>
}

export default Page