'use client'

import {useState} from "react";
import {AnsichtSVG, EyeSVG, HinzufügenSVG} from "@/app/ui/SVG";
import {sendNotes, setRead} from "@/app/actions";
import Link from 'next/link'

function Nachrichten({contacts}: any) {
    const [visibleTextarea, setVisibleTextarea] = useState(Array(contacts.length).fill(false));
    const [sent, setSent] = useState(false)

    const toggleTextarea = (index: any) => {
        setVisibleTextarea((prevVisibleTextarea) => {
            const updatedVisibility = [...prevVisibleTextarea];
            updatedVisibility[index] = !updatedVisibility[index];
            return updatedVisibility;
        });
    };

    const handleSubmit = () => {
        setSent(true)
    }

    return contacts[0] && (
        <>
            <Link
                className={`w-full border border-lightBG rounded-xl p-4 my-2 text-xl mb-5 flex justify-between text-primary bg-normalBG cursor-pointer`}
                href={'/dashboard/administration'}>
                <span>Benutzer verwalten</span>
                <HinzufügenSVG/>
            </Link>
            <Link
                className={`w-full border border-lightBG rounded-xl p-4 my-2 text-xl mb-5 flex justify-between text-primary bg-normalBG cursor-pointer`}
                href={'/dashboard/views'}>
                <span>Benutzer ansichten</span>
                <AnsichtSVG/>
            </Link>
            <div className={`w-full overflow-hidden`}>
                <h2 className={`text-2xl`}>
                    Nachrichten
                </h2>
                <div
                    className={`bg-green-600 rounded-xl p-2 absolute top-10 right-5 transition duration-500 ease-in-out ${sent ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"} flex gap-2`}>
                    <svg
                        className="h-6 w-5 text-primary"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                            clipRule="evenodd"
                        />
                    </svg>
                    Daten wurden versendet
                </div>
                <div className={`w-full my-5`}>
                    {contacts.map((item: any, index: number) => (
                        <div key={index}
                             className={`w-full border border-lightBG rounded-xl p-4 my-2 text-xl ${item.read ? "text-secondary bg-transparent" : "text-primary bg-normalBG"} cursor-pointer`}>
                            <div className={`lg:flex w-full`} onClick={() => toggleTextarea(index)}>
                                <div className={`lg:w-1/3`}>
                                    von {item.name}
                                </div>
                                <div className={`lg:w-1/3`}>
                                    {item.contact}
                                </div>
                                <div className={`lg:w-1/3 text-end flex justify-end gap-2 items-center`}>
                                    {item.time}
                                    <div
                                        className={`${visibleTextarea[index] ? "visible" : "hidden"} ${item.read ? "bg-red-600" : "bg-green-600"} bg-opacity-60 rounded-lg z-20`}
                                        onClick={() => setRead(item.id, item.read)}>
                                        <EyeSVG/>
                                    </div>
                                </div>
                            </div>
                            <div className={`w-full flex ${visibleTextarea[index] || "hidden"} max-lg:flex-col`}>
                        <textarea className={`text-2xl mt-5 no-focus w-1/2 bg-transparent max-lg:w-full`} rows={7}
                                  readOnly={true}
                                  defaultValue={item.message}></textarea>
                                <form className={`w-1/2 max-lg:w-full`}
                                      action={(e) => sendNotes(e, item.id, item.notes)} onSubmit={handleSubmit}>
                            <textarea className={`text-2xl mt-5 w-full no-focus bg-transparent`}
                                      placeholder={"Notizen hinzufügen"} rows={7} name={"notes"}
                                      defaultValue={item.notes}></textarea>
                                    <input type={"submit"} value={"Daten versenden"}
                                           className={`no-focus text-center text-primary w-full bg-normalLightBg rounded-xl p-2 cursor-pointer`}/>
                                </form>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Nachrichten