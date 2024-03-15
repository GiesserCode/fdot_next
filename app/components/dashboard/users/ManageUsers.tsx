'use client'
import {blackOpsOne} from "@/app/ui/fonts";
import {useState} from "react";
import Link from "next/link";
import {BackSVG} from "@/app/ui/SVG";
import EditTasks from "@/app/components/dashboard/users/EditTasks";
import NewUser, {EditUser} from "@/app/actions";

const ManageUsers = ({content}: any) => {

    const [visibleTextarea, setVisibleTextarea] = useState(Array(content.length).fill(false));

    const toggleTextarea = (index: any) => {
        setVisibleTextarea((prevVisibleTextarea) => {
            const updatedVisibility = [...prevVisibleTextarea];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };
    return <section className={`w-full p-12 pt-20 relative overflow-x-hidden`}>
        <Link
            href="/dashboard"
            className="focus:outline-none focus:bg-gblue absolute z-30 left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
        >
            <BackSVG/>
            {" "}
            Back
        </Link>
        <h1 className={`text-4xl text-primary ${blackOpsOne.className} antialiased self-start`}>Users</h1>
        <div className={`my-5 bg-normalBG border border-lightBG p-5 rounded-2xl flex flex-col gap-5`}>
            {content.map((item: any, index: number) => (
                <div key={index}
                     className={`bg-normalBG border border-lightBG text-primary p-4 rounded-xl text-xl cursor-pointer`}>
                    <div className={`flex ${visibleTextarea[index] && "mb-5"}`} onClick={() => toggleTextarea(index)}>
                        <div className={`w-1/2`}>{item.name}</div>
                        <div className={`w-1/2`}>{item.contact}</div>

                    </div>
                    <div
                        className={`w-full ${visibleTextarea[index] ? "visible" : "hidden"} flex flex-col gap-5 text-xl`}>
                        <form action={EditUser}>
                            <div className={`flex`}>Name:
                                <input type="text" className={`no-focus normal-input`} defaultValue={item.name}
                                       name={"name"}/>
                            </div>
                            <div className={`flex`}>Contact:
                                <input type="text" className={`no-focus normal-input`} defaultValue={item.contact}
                                       name={"contact"}/>
                            </div>
                            <div className={`flex`}>Hours:
                                <input type="text" className={`no-focus normal-input`} defaultValue={item.hours}
                                       name={"hours"}/>
                            </div>
                            <div className={`flex`}>Figma:
                                <input type="text" className={`no-focus normal-input`} defaultValue={item.figma_link}
                                       name={"figma_link"}/>
                            </div>
                            <div className={`flex`}>Code:
                                <input type="text" className={`no-focus normal-input`} defaultValue={item.code_link}
                                       name={"code_link"}/>
                            </div>
                            <div className={`flex`}>Notes:
                                <input type="text" className={`no-focus normal-input`} defaultValue={item.notes}
                                       name={"notes"}/>
                            </div>
                            <input className={`no-focus normal-input`} defaultValue={item.id} name={"id"}/>
                            <button type={"submit"} className={`p-2 bg-primary text-normalBG rounded-xl`}>Submit</button>
                        </form>
                        <div>
                            <EditTasks item={item}/>
                            <div className={`w-full h-10 bg-primary text-normalBG grid place-items-center rounded-xl`}>
                                New Task
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            <form action={NewUser}>
                <button type={"submit"} className={`w-full h-10 bg-primary text-normalBG grid place-items-center rounded-xl text-xl`}>New User</button>
            </form>
        </div>
    </section>
}

export default ManageUsers