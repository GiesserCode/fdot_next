'use client'

import {useState} from "react";

function Tasks({users}: any){

    const [visibleTextarea, setVisibleTextarea] = useState(Array(users.tasks.length).fill(false));

    const toggleTextarea = (index: any) => {
        setVisibleTextarea((prevVisibleTextarea) => {
            const updatedVisibility = prevVisibleTextarea.map((_, i) => i === index ? !prevVisibleTextarea[i] : false);
            return updatedVisibility;
        });
    };


    return <div className={`w-full flex flex-col gap-5 relative`}>
        {users.tasks.map((item: any, index: number) => (
            <div key={index} className={`w-full bg-normalBG rounded-xl p-5 text-xl flex`} onClick={() => toggleTextarea(index)}>
                <div className={`w-full flex`}>
                    <div className={`w-1/5`}>{item.name}</div>
                    <div className={`w-1/5`}>{item.status}</div>
                    <div className={`w-1/5`}>{item.type}</div>
                    <div className={`w-1/5`}>{item.startDate}</div>
                    <div className={`w-1/5`}>{item.endDate}</div>
                </div>
                <div className={`absolute right-0 border border-lightBG h-full max-w-[500px] break-words top-0 bg-normalLightBg rounded-xl p-2 transition duration-500 ease-in-out ${visibleTextarea[index] ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}>
                    {item.notes}
                </div>
            </div>
        ))}
    </div>
}

export default Tasks