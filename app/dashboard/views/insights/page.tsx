import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import UserInfo from "@/app/components/dashboard/UserInfo";
import NoAccess from "@/app/components/dashboard/administration/NoAccess";

const Page = async ({searchParams,}: { searchParams?: { query?: string; }; }) => {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {data: activeSession} = await supabase.auth.getSession()
    const {data: {user}} = await supabase.auth.getUser();


    if (!activeSession || !user) {
        return redirect("/login")
    }

    const {data: users, error} = await supabase
        .from('users')
        .select("*")
        .eq("id", searchParams!.query)
    error && console.log(error)
    console.log(searchParams)
    console.log(JSON.stringify(users))

    return users ? <UserInfo content={users}/> : <NoAccess />
}

export default Page