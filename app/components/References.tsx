'use client'
import {blackOpsOne} from "@/app/ui/fonts";
import {ChangeSizeArrowSVG, ChangeSizeTextSVG, LockSVG} from "@/app/ui/SVG";

const References = () => {

    return <section className={`w-full overflow-hidden relative`}>
        <div id={"referenzen"} className={`id`}></div>
        <div className={`w-full p-10 flex justify-between`}>
            <div className={`w-[50%] left max-w-[60%] min-w-[500px] h-[500px] relative resize-x overflow-auto bg-darkBg border-2 border-lightBG rounded-2xl m-10 selection:bg-zinc-600`}>
                <div className={`overflow-hidden w-full h-full flex flex-col rounded-2xl`}>
                    <nav className={`w-full bg-normalLightBg rounded-t-2xl flex p-2 items-center`}>
                        <div className={`flex items-center p-2`}>
                            <div className={`ball bg-red-600 bg-opacity-90`}></div>
                            <div className={`ball bg-yellow-600 bg-opacity-90`}></div>
                            <div className={`ball bg-green-600 bg-opacity-90`}></div>
                        </div>
                        <div className={`flex gap-5 items-center rounded-xl border-2 border-lightBG w-full h-10 p-2 text-secondary`}>
                            <LockSVG/>
                            www.Fdot.ch
                        </div>
                    </nav>
                    <div className={`w-full h-full relative`}>
                        <iframe src="https://www.petosch.com" className={`w-full h-full zoomed-out-iframe rounded-b-2xl transform scale-80 transform-origin-top-right no-focus`}></iframe>
                        <button onClick={() => open("https://www.petosch.com")} className={`absolute right-0 bottom-0 cursor-pointer text-2xl rounded-2xl p-2 m-2 text-primary bg-[#d33] font-bold overflow-hidden transition-all duration-500 shadow-lg shadow-zinc-950`}>Besuchen</button>
                    </div>
                </div>
            </div>
            <div className={`relative pr-10 w-[50%]`}>
                <h3 className={`${blackOpsOne.className} antialiased colortitle text text-right w-full`}>
                    Projekte
                </h3>
                <h2 className={`${blackOpsOne.className} antialiased text-6xl text-primary text text-right`}>
                    Referenzen
                </h2>
                <p className={`text-secondary text-xl bottom text-right`}>
                    Hier ist eine von mir erstellte Webseite für Petosch.
                </p>
                <div className={`absolute bottom-0 top-[40%] left-0`}>
                    <ChangeSizeTextSVG />
                    <ChangeSizeArrowSVG />
                </div>
            </div>
        </div>
    </section>
}

export default References