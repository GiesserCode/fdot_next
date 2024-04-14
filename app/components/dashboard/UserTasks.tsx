'use client'

import {useState} from "react";
import {blackOpsOne} from "@/app/ui/fonts";

function Tasks({users}: any) {

    const [visibleTextarea, setVisibleTextarea] = useState(Array(users.tasks.length).fill(false));

    const toggleTextarea = (index: any) => {
        setVisibleTextarea((prevVisibleTextarea) => {
            const updatedVisibility = prevVisibleTextarea.map((_, i) => i === index ? !prevVisibleTextarea[i] : false);
            return updatedVisibility;
        });
    };


    return <div className={`w-full flex flex-col gap-5 relative`}>
        <div className={`w-full rounded-xl px-5 text-xl flex text-secondary`}>
            <div className={`w-full flex max-lg:hidden items-center ${blackOpsOne.className} antialiased`}>
                <div className={`w-1/5`}>Name</div>
                <div className={`w-1/5`}>Status</div>
                <div className={`w-1/5`}>Fach</div>
                <div className={`w-1/5`}>Startdatum</div>
                <div className={`w-1/5`}>Enddatum</div>
            </div>
        </div>
        {users.tasks.map((item: any, index: number) => (
            <div key={index} className={`w-full bg-normalBG rounded-xl p-5 text-xl flex`}
                 onClick={() => toggleTextarea(index)}>
                <div className={`w-full flex items-center flex-wrap max-lg:gap-5`}>
                    <div className={`w-1/5 max-lg:w-full whitespace-nowrap ${blackOpsOne.className} antialiased`}>{item.name}</div>
                    <div className={`w-1/5 max-lg:min-w-1/3 max-lg:w-min max-lg:text-sm whitespace-nowrap`}>
                        <div
                            className={`${item.status === "nicht begonnen" ? "bg-lightBG" : item.status === "begonnen" ? "bg-[#30436b]" : "bg-[#375840]"} rounded-lg p-2 w-min whitespace-nowrap`}>
                            {item.status}
                        </div>
                    </div>
                    <div className={`w-1/5 max-lg:min-w-1/3 max-lg:w-min max-lg:text-sm whitespace-nowrap`}>
                        <div className={`${item.type === "Design" ? "bg-[#462f63]" : "bg-[#57242c]"} w-min p-2 rounded-lg`}>
                            {item.type}
                        </div>
                    </div>
                    <div className={`w-1/5 max-lg:w-min whitespace-nowrap`}>{item.startDate}</div>
                    <div className={`w-1/5 max-lg:w-min whitespace-nowrap`}>{item.endDate}</div>
                </div>
                <div
                    className={`absolute right-0 border border-lightBG h-full max-w-[500px] break-words top-0 bg-normalLightBg rounded-xl p-2 transition duration-500 max-lg:fixed max-lg:w-10/12 max-lg:mx-[calc(100%/12)] max-lg:mt-6 max-lg:h-min ease-in-out ${visibleTextarea[index] ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    {item.notes}
                </div>
            </div>
        ))}
    </div>
}

export default Tasks