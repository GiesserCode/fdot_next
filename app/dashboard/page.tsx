'use server'

import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";

const Dashboard = async () => {

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {data: activeSession} = await supabase.auth.getSession()
    const { data: { user } } = await supabase.auth.getUser();

    if (!activeSession || !user){
        return redirect("/login")
    }

    const {data: contacts, error: contactsError} = await supabase.from('contacts').select("*")
    const {data: users, error: usersError} = await supabase.from('users').select("*")

    return <section className={"w-full p-12"}>
        <h1>
            {JSON.stringify(contacts)} <br/><br/>
            {JSON.stringify(users)}
        </h1>
    </section>
}

export default Dashboard