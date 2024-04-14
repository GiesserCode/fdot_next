import {redirect} from "next/navigation";
import {blackOpsOne} from "@/app/ui/fonts";
import Nachrichten from "@/app/components/dashboard/Nachricht";
import UserInfo from "@/app/components/dashboard/UserInfo";
import {Metadata} from "next";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

export const metadata: Metadata = {
    title: 'Dashboard - Fdot',
    description: "Let's create Websites!",
}

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

    const index = users!.findIndex((item: any) => item.id === user.id);
    const data = users![index]

    return <section className={"w-full p-12 relative overflow-x-hidden grid place-items-center max-lg:p-6"}>
        <div className={`w-full maxW`}>
            <h1 className={`${blackOpsOne.className} antialiased text-4xl mb-5`}>
                Hallo {data?.name}
            </h1>
            <UserInfo users={data} />
            <Nachrichten contacts={contacts}/>
        </div>
    </section>
}

export default Dashboard