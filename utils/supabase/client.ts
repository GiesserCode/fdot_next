'use server'
import {createBrowserClient} from '@supabase/ssr'

export const createClient = async () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
