'use server'

import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";
import {redirect} from "next/navigation";
import {blackOpsOne} from "@/app/ui/fonts";
import Nachrichten from "@/app/components/dashboard/Nachricht";

const Dashboard = async () => {

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const {data: activeSession} = await supabase.auth.getSession()
    const {data: {user}} = await supabase.auth.getUser();

    if (!activeSession || !user) {
        return redirect("/login")
    }

    const {data: contacts, error: contactsError} = await supabase.from('contacts').select("*").order('time', {ascending: false})
    const {data: users, error: usersError} = await supabase.from('users').select("*")

    if (contactsError || usersError){
        console.log(contactsError)
        console.log(usersError)
    }

    return <section className={"w-full p-12 relative overflow-x-hidden"}>
        <h1 className={`${blackOpsOne.className} antialiased text-4xl mb-5`}>
            Willkommen {users![0].name}
        </h1>
        <Nachrichten contacts={contacts}/>
    </section>
}

export default Dashboard