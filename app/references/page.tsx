'use client'
import {references} from "@/app/components/text"
import {useEffect, useState} from "react";
import {BigUserSVG, FdotSVG} from "@/app/ui/SVG";
import {blackOpsOne} from "@/app/ui/fonts";
import Footer from "@/app/components/Footer";

export default function Page() {

    const [iframeLoaded, setIframeLoaded] = useState(false);

    useEffect(() => {
        // Function to set iframeLoaded to true after a certain delay
        const delay = setTimeout(() => {
            setIframeLoaded(true);
        }, 1000); // Adjust the delay as needed

        // Clear the timeout if component unmounts
        return () => clearTimeout(delay);
    }, []);

    return <section className={"w-full relative grid place-items-center"}>
        <div className={`w-full flex flex-col items-center maxW`}>
            {
                references.references.map((item: any, index: number) => (
                    <div key={index} className={`w-full text-white my-20 px-10 flex flex-col items-center`}>
                        {iframeLoaded ? <iframe src={item.link} title={item.title}
                                                className={`h-full w-10/12 rounded-2xl transform scale-80 transform-origin-top-right no-focus min-h-[800px] max-lg:min-h-[600px]`}></iframe>
                            : <div className={`grid place-items-center h-full`}>
                                <div className={`grid place-items-center`}><FdotSVG/>Loading</div>
                            </div>}
                        <div className={`flex items-center w-11/12 relative -translate-y-[40px]`}>
                            <div className={`p-2 bg-normalLightBg border border-lightBG rounded-2xl absolute z-20 max-lg:hidden`}>
                                <BigUserSVG/>
                            </div>
                            <div
                                className={`p-5 bg-normalLightBg border border-lightBG rounded-2xl w-full lg:pl-[150px]`}>
                                <div className={`text-primary text-2xl ${blackOpsOne.className} antialiased`}>
                                    {item.title}
                                </div>
                                <div className={`text-secondary`}>
                                    {item.description}
                                </div>
                            </div>

                        </div>
                    </div>
                ))
            }
        </div>

        <Footer />
    </section>
}