import {useState} from "react";
import {blackOpsOne} from "@/app/ui/fonts";
import {sendContent} from "@/app/actions";

function LgForm() {
    const [submitted, setSubmittet] = useState(false)
    const [filled, setFilled] = useState({name: true, contact: true, message: true})
    const [filledReal, setFilledReal] = useState({name: false, contact: false, message: false})

    const handleChange = (e: any) => {
        const {name, value} = e.target;
        setFilled((prevFilled) => ({...prevFilled, [name]: value !== ""}));
        setFilledReal((prevFilledReal) => ({...prevFilledReal, [name]: value !== ""}));
    };

    const handleSubmit = () => {
        setSubmittet(true)
    }

    return <section className="w-full grid place-items-center lg:hidden overflow-x-hidden my-10">
        <div id={"kontakt"} className={`id`}></div>
        <h1 className={`${blackOpsOne.className} antialiased text-4xl`}>
            Kontakt
        </h1>
        <form
            className={`flex flex-col justify-center gap-10 ${blackOpsOne.className} antialiased text-base overflow-x-hidden my-5 px-10`}
            action={sendContent}
            onSubmit={handleSubmit}>
            <div className={`flex gap-2 flex-wrap`}><h2 className={`py-2`}>Hallo Florian, ich
                bin</h2>
                <div className={"relative"}>
                    <input
                        type="text"
                        placeholder={"Ihr Name"} readOnly={submitted} onBlur={(e) => handleChange(e)} name={"name"}
                        autoComplete={"off"}
                        className={`bg-transparent no-focus w-[13ch] focus:bg-normalBG rounded-xl p-2 ${filled.name || "border border-red-600 "}`}
                    />
                    <p className={`absolute text-sm text-red-600 w-[200%] ${filled.name ? "hidden" : "visible"}`}>Füllen
                        Sie dieses Feld aus</p>
                </div>
            </div>
            <div className={`flex gap-2 flex-wrap`}><h2 className={`py-2`}>Du kannst mich
                über </h2>
                <div className={"relative"}>
                    <input
                        type="text" name={"contact"} autoComplete={"off"}
                        placeholder={"Ihr Kontakt"} readOnly={submitted} onBlur={(e) => handleChange(e)}
                        className={`bg-transparent no-focus w-[13ch] focus:bg-normalBG rounded-xl p-2 ${filled.contact || "border border-red-600"}`}
                    />
                    <p className={`absolute text-sm text-red-600 w-[200%] ${filled.contact ? "hidden" : "visible"}`}>Füllen
                        Sie dieses Feld aus</p>
                </div>
                <h2 className={`py-2`}>erreichen.</h2></div>
            <div className={"relative"}>
                            <textarea placeholder={"Ihre Nachricht"} name={"message"} autoComplete={"off"} rows={4}
                                      readOnly={submitted} onBlur={(e) => handleChange(e)}
                                      className={`bg-transparent border border-lightBG rounded-xl p-2 w-full no-focus focus:border focus:bg-normalBG ${filled.message || "border border-red-600"}`}/>
                <p className={`absolute text-sm text-red-600 ${filled.message ? "hidden" : "visible"}`}>Füllen Sie
                    dieses Feld aus</p>
            </div>
            <input type={"submit"} disabled={submitted || Object.values(filledReal).some((value) => !value)}
                   className={`no-focus ${submitted ? "disabled:bg-green-600 disabled:bg-opacity-40" : "bg-normalLightBg"} rounded-xl p-2 hover:bg-lightBG transition duration-500 ease-in-out disabled:text-secondary disabled:bg-normalBG disabled:cursor-no-drop`}
                   value={submitted ? "Fertig" : "Senden"}></input>
        </form>
    </section>
}

export default LgForm