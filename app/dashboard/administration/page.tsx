import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {Metadata} from "next";
import NoAccess from "@/app/components/dashboard/administration/NoAccess";
import ManageUsers from "@/app/components/dashboard/administration/ManageUsers";

export const metadata: Metadata = {
    title: 'Dashboard - Fdot',
    description: "Let's create Websites!",
}

const Users = async () => {

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

    return users?.length && users.length > 1 ? <ManageUsers content={users}/> :<NoAccess/>
}

export default Users