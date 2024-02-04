'use server'

import {z} from 'zod'
import {cookies} from 'next/headers'
import {createClient} from "@/utils/supabase/server";

const sendContentSchema = z.object({name: z.string(), contact: z.string(), message: z.string()})

export async function sendContent(formData: FormData){
    const validatedFields = sendContentSchema.safeParse({
        name: formData.get('name'),
        contact: formData.get('contact'),
        message: formData.get('message')
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: 'Missing Fields. Failed to Create Wordset.',
        };
    }

    const { name, contact, message }: any = validatedFields.data;
    const isFieldNotEmpty = (field: any) => field !== undefined && field !== "";

    console.log("name: " + name + isFieldNotEmpty(name))
    console.log("contact: " + contact + isFieldNotEmpty(contact))
    console.log("message: " + message + isFieldNotEmpty(message))

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const time = new Date

    if (isFieldNotEmpty(name) && isFieldNotEmpty(contact) && isFieldNotEmpty(message)){
        const {data: contacts, error} = await supabase.from("contacts").insert({time: time, name: name, contact: contact, message: message})
        if (error){
            console.log(error)
        }
    }
}