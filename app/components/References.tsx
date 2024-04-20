'use client'
import {blackOpsOne} from "@/app/ui/fonts";
import {ChangeSizeArrowSVG, FdotSVG, LockSVG} from "@/app/ui/SVG";
import {useState, useEffect} from "react";

const References = () => {
    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        // Function to set iframeLoaded to true after a certain delay
        const delay = setTimeout(() => {
            setIframeLoaded(true);
        }, 1000); // Adjust the delay as needed

        // Clear the timeout if component unmounts
        return () => clearTimeout(delay);
    }, []);
    return <section className={`w-full overflow-hidden relative grid place-items-center`}>
        <div id={"referenzen"} className={`id`}></div>
        <div className={`w-full p-10 flex justify-between max-[1250px]:flex-wrap max-[1250px]:w-full max-w-[2600px]`}>
            <div className={`w-[50%] left max-w-[60%] min-w-[400px] h-[500px] relative resize-x overflow-auto lg:mr-5 bg-darkBg border-2 border-lightBG rounded-2xl my-10 selection:bg-zinc-600 max-[1250px]:w-full max-[1250px]:max-w-full max-[1250px]:order-2 max-lg:min-w-0`}>
                <div className={`overflow-hidden w-full h-full flex flex-col rounded-2xl`}>
                    <nav className={`w-full bg-normalLightBg rounded-t-2xl flex p-2 items-center`}>
                        <div className={`flex items-center p-2`}>
                            <div className={`ball bg-red-600 bg-opacity-90`}></div>
                            <div className={`ball bg-yellow-600 bg-opacity-90`}></div>
                            <div className={`ball bg-green-600 bg-opacity-90`}></div>
                        </div>
                        <div className={`flex gap-5 items-center rounded-xl border-2 border-lightBG w-full lg:h-10 lg:p-2 text-secondary max-lg:text-sm max-lg:h-min p-1`}>
                            <div className={`max-lg:scale-75`}><LockSVG/></div>
                            www.petosch.com
                        </div>
                    </nav>
                    <div className={`w-full h-full relative`}>
                        {iframeLoaded ? <iframe src="https://www.petosch.com" title={"petosch.com"} className={`w-full h-full zoomed-out-iframe rounded-b-2xl transform scale-80 transform-origin-top-right no-focus`}></iframe>
                        : <div className={`grid place-items-center`}><FdotSVG/>Loading</div>}
                        <button onClick={() => open("https://www.petosch.com")} className={`absolute right-0 bottom-0 cursor-pointer text-2xl rounded-2xl p-2 m-2 text-primary bg-[#d33] font-bold overflow-hidden transition-all duration-500 shadow-lg shadow-zinc-950 lg:hover:bg-primary lg:hover:text-normalBG`}>Besuchen</button>
                    </div>
                </div>
            </div>
            <div className={`relative lg:pr-10 w-[50%] lg:min-w-[420px] max-[1250px]:order-1 max-lg:w-full`}>
                <h3 className={`${blackOpsOne.className} antialiased colortitle text text-right max-[1250px]:text-left w-full max-lg:text-lg`}>
                    Projekte
                </h3>
                <h2 className={`${blackOpsOne.className} antialiased text-6xl text-primary text text-right max-[1250px]:text-left max-lg:text-2xl`}>
                    Referenzen
                </h2>
                <div className={`w-full flex justify-end`}>
                    <p className={`text-secondary text-xl bottom text-right max-[1250px]:text-left max-lg:text-base lg:max-w-[500px]`}>
                        Hier ist die von mir erstellte Webseite für Petosch. Besuchen Sie die Seite, um sich einen Eindruck zu verschaffen. Sie haben die Möglichkeit, die Größe des Fensters in der unteren rechten Ecke anzupassen.
                    </p>
                </div>
                <div className={`absolute bottom-0 top-[40%] left-0 max-[1250px]:hidden`}>
                    <p className={`${blackOpsOne.className} antialiased text-4xl max-w-[240px] text-secondary`}>Ändern sie die Grösse</p>
                    <ChangeSizeArrowSVG />
                </div>
            </div>
        </div>
    </section>
}

export default References