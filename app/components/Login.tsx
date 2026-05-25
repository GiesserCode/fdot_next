import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Login() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  
  const { data: activeSession } = await supabase.auth.getSession();
  const { data: { user } } = await supabase.auth.getUser();

  if (activeSession.session || user) {
    redirect("/dashboard");
  }

  return null;
}