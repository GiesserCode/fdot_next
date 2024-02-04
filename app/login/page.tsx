import Link from "next/link";
import {redirect} from "next/navigation";
import {blackOpsOne} from "@/app/ui/fonts";
import {cookies} from "next/headers";
import {createClient} from "@/utils/supabase/server";

export default async function Login({
                                        searchParams,
                                    }: {
    searchParams: { message: string };
}) {
    const signIn = async (formData: FormData) => {
        "use server";

        const email = formData.get("email") as string;
        const password = formData.get("password") as string;
        const cookieStore = cookies();
        const supabase = createClient(cookieStore);

        const {error} = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            console.error(error)
        }
        const { data: { user } } = await supabase.auth.getUser();
        return redirect("/dashboard")
    };

    return (
        <div className="section-Center h-screen">
            <Link
                href="/"
                className="focus:outline-none focus:bg-gblue absolute z-30 left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
                >
                    <polyline points="15 18 9 12 15 6"/>
                </svg>
                {" "}
                Back
            </Link>

            <div className={"box"}>
                <form
                    className="flex flex-col"
                    action={signIn}
                ><h1 className={`text-4xl mb-5 ${blackOpsOne.className} antialiased`}>Login</h1>
                    <label className="text-left" htmlFor="email">
                        Email
                    </label>
                    <input
                        className="bg-transparent text-primary text-2xl placeholder:text-lightBG flex no-focus mb-5"
                        name="email"
                        placeholder="you@example.com"
                        required
                    />
                    <label className="text-left" htmlFor="password">
                        Password
                    </label>
                    <input
                        className="bg-transparent text-primary text-2xl placeholder:text-lightBG flex no-focus mb-5"
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        required
                    />
                    <button className="bg-normalLightBg rounded-xl p-2">
                        Sign In
                    </button>
                    <p
                        id="errorMessage"
                        className=""
                    >
                    </p>
                </form>

            </div>
        </div>
    );
}
