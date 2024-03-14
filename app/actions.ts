'use server'

import {z} from 'zod'
import {cookies} from 'next/headers'
import {createClient} from "@/utils/supabase/server";
import {unstable_noStore as noStore} from 'next/cache';

const sendContentSchema = z.object({name: z.string(), contact: z.string(), message: z.string()})

export async function sendContent(formData: FormData) {
    noStore();
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

    const {name, contact, message}: any = validatedFields.data;
    const isFieldNotEmpty = (field: any) => field !== undefined && field !== "";

    console.log("name: " + name + isFieldNotEmpty(name))
    console.log("contact: " + contact + isFieldNotEmpty(contact))
    console.log("message: " + message + isFieldNotEmpty(message))

    const cookieStore = cookies();
    const supabase = createClient(cookieStore);

    const time = new Date

    if (isFieldNotEmpty(name) && isFieldNotEmpty(contact) && isFieldNotEmpty(message)) {
        const {data: contacts, error} = await supabase.from("contacts").insert({
            time: time,
            name: name,
            contact: contact,
            message: message
        })
        if (error) {
            console.log(error)
        }
    }
}

export async function sendNotes(formData: FormData, id: string, prevNotes: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    noStore();
    const notes = formData.get("notes")

    if (notes !== "" && notes !== prevNotes) {
        const {data: contacts, error} = await supabase
            .from("contacts")
            .update({notes: notes})
            .eq("id", id)
        error && console.log(error)
    }

    console.log(notes)
}

export async function setRead(id: string, read: boolean) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    noStore();
    const {data: contacts, error} = await supabase
        .from("contacts")
        .update({read: !read})
        .eq("id", id)
    error && console.log(error)
}

export async function EditUser(formData: FormData) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    noStore();
    const name = formData.get("name")
    const contact = formData.get("contact")
    const hours = formData.get("hours")
    const figma_link = formData.get("figma_link")
    const code_link = formData.get("code_link")
    const notes = formData.get("notes")
    const id = formData.get("id")

    const {data: users, error} = await supabase
        .from("users")
        .update({
            name: name,
            contact: contact,
            hours: hours,
            figma_link: figma_link,
            code_link: code_link,
            notes: notes
        })
        .eq("id", id)
    error && console.log(error)
}

export async function NewUser(formData: FormData) {
    const id = formData.get("id")
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const name = "New User"
    const contact = "enter contact"

    const {data: users, error} = await supabase
        .from("users")
        .insert({name: name, contact: contact, id: id})

    error && console.error(error)
}

export const generateUUID = () => {
    const pattern = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
    return pattern.replace(/[xy]/g, function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
};

export async function NewSubmit(formData: FormData, id: string) {
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {data: users, error} = await supabase
        .from("users")
        .select("tasks")
        .eq("id", id)
    console.log(JSON.stringify(users))
    error && console.log(error)
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const day = String(currentDate.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    const uuid = generateUUID()
    if (users![0].tasks === null) {
        // If tasks array is not empty, append new list
        const newData = [{
            id: uuid,
            name: "Name",
            type: "Design",
            notes: "Notes",
            status: "nicht begonnen",
            endDate: formattedDate,
            startDate: formattedDate
        }];
        const {data: newUsers} = await supabase
            .from("users")
            .update({tasks: newData})
            .eq("id", id)
    } else {
        // If tasks array is empty, create a new array
        users![0].tasks.push({
            id: uuid,
            name: "Name",
            type: "Design",
            notes: "Notes",
            status: "nicht begonnen",
            endDate: formattedDate,
            startDate: formattedDate
        });

        const newData = users![0].tasks;
        console.log(JSON.stringify(newData))
        const {data: newUsers} = await supabase
            .from("users")
            .update({tasks: newData})
            .eq("id", id)
    }
}

export async function UpdateTask(formData: FormData, userId: string, taskId: string) {
    const name = formData.get("name")
    const type = formData.get("type")
    const notes = formData.get("notes")
    const status = formData.get("status")
    const endDate = formData.get("endDate")
    const startDate = formData.get("startDate")
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {data: users, error} = await supabase
        .from("users")
        .select("tasks")
        .eq("id", userId)
    console.log(JSON.stringify(users))
    const taskIndex = users![0].tasks.findIndex((task: any) => task.id === taskId);
    users![0].tasks[taskIndex] = {
        ...users![0].tasks[taskIndex], // Keep existing properties
        name: name || users![0].tasks[taskIndex].name,
        type: type || users![0].tasks[taskIndex].type,
        notes: notes || users![0].tasks[taskIndex].notes,
        status: status || users![0].tasks[taskIndex].status,
        endDate: endDate || users![0].tasks[taskIndex].endDate,
        startDate: startDate || users![0].tasks[taskIndex].startDate
    };
    console.log(JSON.stringify(users))
    const {data: newusers} = await supabase
        .from("users")
        .update({tasks: users![0].tasks})
        .eq("id", userId)

}

export async function deleteTask(userId: string, taskId: string){
    const cookieStore = cookies();
    const supabase = createClient(cookieStore);
    const {data: users, error} = await supabase
        .from("users")
        .select("tasks")
        .eq("id", userId)
    const indexToDelete = users![0].tasks.findIndex((item: any) => item.id === taskId);
    if (indexToDelete > -1) {
        // Remove the item from the array
        users![0].tasks.splice(indexToDelete, 1);
    }
    console.log(JSON.stringify(users![0].tasks));
    const {data: newusers} = await supabase
        .from("users")
        .update({tasks: users![0].tasks})
        .eq("id", userId)
}