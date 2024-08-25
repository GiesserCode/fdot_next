'use client'
import {blackOpsOne} from "@/app/ui/fonts";
import {ablaufGrafik} from "@/app/components/text";

const weeks = Array.from({ length: 8 }, (_, index) => index + 1);

const AblaufGrafik = () => {
    return <section className={`section-Center h-[800px] p-5 mb-20 selection:bg-lightBG max-lg:hidden`}>
        <div className={`w-full h-full p-10 bg-normalBG rounded-2xl border border-lightBG max-w-[3000px] section`}>
            <div className="grid grid-cols-8 grid-rows-5 w-full h-full relative">

                {weeks.map((week) => (
                    <div key={week} className={`col-span-1 row-span-5 w-full flex px-[1px] grey-background-gradient ${blackOpsOne.className} antialiased`}>
                        <div className={`w-full h-full bg-normalBG flex justify-center py-2`}>
                            Week {week}
                        </div>
                    </div>
                ))}

                {ablaufGrafik.map((content: any, index: number) =>  (
                    <div key={index} className={`${content.style} grafik-css`}>
                        <div className={"relative w-full h-full"}>
                            <div className={`max-[1310px]:scale-150 w-min max-[1310px]:p-2`}>{content.icon}</div>
                            <div className={`absolute left-0 bottom-0`}>
                                <h3 className={`text-2xl max-[1800px]:text-lg break-all`}>{content.title}</h3>
                                <p className={`text-secondary text-sm max-[1800px]:text-xs max-[1310px]:hidden`}>{content.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
}

export default AblaufGrafik

// Mit Animation
/*<section className={`section-Center h-[800px] p-5 mb-20 selection:bg-lightBG max-lg:hidden`}>
        <div className={`w-full h-full p-10 bg-normalBG rounded-2xl border border-lightBG max-w-[3000px] bottom section`}>
            <div className="grid grid-cols-8 grid-rows-5 w-full h-full relative">

                {weeks.map((week) => (
                    <div key={week} className={`col-span-1 row-span-5 w-full flex px-[1px] grey-background-gradient ${blackOpsOne.className} antialiased`}>
                        <div className={`w-full h-full bg-normalBG flex justify-center py-2`}>
                            Week {week}
                        </div>
                    </div>
                ))}

                {ablaufGrafik.map((content: any, index: number) =>  (
                    <div key={index} className={`${content.style} grafik-css bottom`}>
                        <div className={"relative w-full h-full"}>
                            <div className={`max-[1310px]:scale-150 w-min max-[1310px]:p-2`}>{content.icon}</div>
                            <div className={`absolute left-0 bottom-0`}>
                                <h3 className={`text-2xl max-[1800px]:text-lg break-all text`}>{content.title}</h3>
                                <p className={`text-secondary text-sm max-[1800px]:text-xs max-[1310px]:hidden text`}>{content.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>*/