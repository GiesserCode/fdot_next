'use client'
import {BigUserSVG, LockSVG} from "@/app/ui/SVG";
import {blackOpsOne, onest} from "@/app/ui/fonts";

const About = () => {
    return <section className={`section-Center`}>
        <div id={"übermich"} className={`id`}></div>
        <div className={`flex flex-wrap px-10 justify-between overflow-hidden w-10/12 mb-20 maxW`}>
            <div className={`lg:w-[40%] lg:min-w-[700px] selection:bg-purple-500 selection:text-primary max-[1250px]:mb-5`}>
                <div className={`flex items-center gap-5 mb-8 max-lg:block`}>
                    <div className={`relative border-2 border-purple-500 max-lg:w-min max-lg:mb-8`}>
                        <BigUserSVG />
                        <div className={`purple-square -right-[5px] -top-[5px]`}></div>
                        <div className={`purple-square -left-[5px] -top-[5px]`}></div>
                        <div className={`purple-square -right-[5px] -bottom-[5px]`}></div>
                        <div className={`purple-square -left-[5px] -bottom-[5px]`}></div>
                        <div className={`absolute -bottom-[25px] section-Center`}><div className={`w-16 h-[20px] rounded text-xs bg-purple-600 ${onest.className} antialiased grid place-items-center`}>100 x 100</div></div>
                    </div>
                    <div className={`text-6xl ${blackOpsOne.className} antialiased gap-2 border-2 flex border-blue-500 items-center p-2 relative max-lg:text-4xl w-min`}>
                        <span className={"appearTitle flex whitespace-nowrap gap-5 max-lg:text-3xl"}>Florian Giesser</span>
                        <div className={`blue-square -right-[5px] -top-[5px]`}></div>
                        <div className={`blue-square -left-[5px] -top-[5px]`}></div>
                        <div className={`blue-square -right-[5px] -bottom-[5px]`}></div>
                        <div className={`blue-square -left-[5px] -bottom-[5px]`}></div>
                        <div className={`absolute -bottom-[25px] section-Center -translate-x-2`}><div className={`w-16 h-[20px] rounded text-xs bg-blue-600 ${onest.className} antialiased grid place-items-center`}>300 x 60</div></div>
                    </div>
                </div>
                <p className={`text-xl text-secondary appear max-lg:text-base w-full`}>
                    Hallo! Ich bin Florian, ein Student an der Kantonsschule Sargans. Die Programmierung von Webseiten ist schon seit einiger Zeit meine Leidenschaft. Nach zahlreichen persönlichen Projekten habe ich mich entschieden, meine Erfahrungen zu teilen, indem ich maßgeschneiderte Webseiten für andere erstelle.
                </p>
            </div>
            <div className={`w-[40%] lg:min-w-[400px] bg-darkBg border-2 border-lightBG rounded-2xl relative selection:bg-zinc-600 max-[1250px]:w-full`}>
                <nav className={`w-full bg-normalLightBg rounded-t-2xl flex p-2 items-center`}>
                    <div className={`flex items-center p-2`}>
                        <div className={`ball bg-red-600 bg-opacity-90`}></div>
                        <div className={`ball bg-yellow-600 bg-opacity-90`}></div>
                        <div className={`ball bg-green-600 bg-opacity-90`}></div>
                    </div>
                    <div className={`flex gap-5 items-center rounded-xl border-2 border-lightBG w-full lg:h-10 lg:p-2 text-secondary max-lg:text-sm max-lg:h-min p-1`}>
                        <div className={`max-lg:scale-75`}><LockSVG/></div>
                        www.Fdot.ch
                    </div>
                </nav>
                <section className={`flex p-2`}>
                    <div className={`text-end text-secondary max-lg:hidden`}>
                        {Array.from({ length: 13 }, (_, index) => (
                            <div key={index} className={`max-lg:text-sm`}>
                                {index + 1}.
                            </div>
                        ))}
                    </div>
                    <code className="pl-4 max-lg:text-sm">
                        <div className="text-red-600 text-opacity-90">&lt;html&gt;</div>
                        <div className="pl-4 text-red-600 text-opacity-90">&lt;body&gt;</div>
                        <div className="pl-8 text-red-600 text-opacity-90">&lt;section&gt;</div>
                        <div className="pl-12 text-yellow-500">&lt;h1&gt;</div>
                        <div className="pl-16 appearTitle">Florian Giesser</div>
                        <div className="pl-12 text-yellow-500">&lt;/h1&gt;</div>
                        <div className="pl-12 text-yellow-500">&lt;p&gt;</div>
                        <div className="pl-16 appear">Hallo! Ich bin Florian, ein Student an der Kantonsschule Sargans. Die Programmierung von Webseiten...</div>
                        <div className="pl-12 text-yellow-500">&lt;/p&gt;</div>
                        <div className="pl-8 text-red-600 text-opacity-90">&lt;/section&gt;</div>
                        <div className="pl-4 text-red-600 text-opacity-90">&lt;/body&gt;</div>
                        <div className="text-red-600 text-opacity-90">&lt;/html&gt;</div>
                    </code>

                </section>
            </div>
        </div>
    </section>
}

export default About

//Mit Animation

/*<section className={`section-Center`}>
        <div id={"übermich"} className={`id`}></div>
        <div className={`flex flex-wrap px-10 justify-between overflow-hidden w-full mb-20 maxW`}>
            <div className={`lg:w-[40%] lg:min-w-[700px] selection:bg-purple-500 selection:text-primary left max-[1250px]:mb-5`}>
                <div className={`flex items-center gap-5 mb-8 max-lg:block`}>
                    <div className={`relative border-2 border-purple-500 max-lg:w-min max-lg:mb-8`}>
                        <BigUserSVG />
                        <div className={`purple-square -right-[5px] -top-[5px]`}></div>
                        <div className={`purple-square -left-[5px] -top-[5px]`}></div>
                        <div className={`purple-square -right-[5px] -bottom-[5px]`}></div>
                        <div className={`purple-square -left-[5px] -bottom-[5px]`}></div>
                        <div className={`absolute -bottom-[25px] section-Center`}><div className={`w-16 h-[20px] rounded text-xs bg-purple-600 ${onest.className} antialiased grid place-items-center`}>100 x 100</div></div>
                    </div>
                    <div className={`text-6xl ${blackOpsOne.className} antialiased gap-2 border-2 flex border-blue-500 items-center p-2 relative max-lg:text-4xl w-min`}>
                        <span className={"appearTitle flex whitespace-nowrap gap-5 max-lg:text-3xl"}>Florian Giesser</span>
                        <div className={`blue-square -right-[5px] -top-[5px]`}></div>
                        <div className={`blue-square -left-[5px] -top-[5px]`}></div>
                        <div className={`blue-square -right-[5px] -bottom-[5px]`}></div>
                        <div className={`blue-square -left-[5px] -bottom-[5px]`}></div>
                        <div className={`absolute -bottom-[25px] section-Center -translate-x-2`}><div className={`w-16 h-[20px] rounded text-xs bg-blue-600 ${onest.className} antialiased grid place-items-center`}>300 x 60</div></div>
                    </div>
                </div>
                <p className={`text-xl text-secondary appear max-lg:text-base w-full`}>
                    Hallo! Ich bin Florian, ein Student an der Kantonsschule Sargans. Die Programmierung von Webseiten ist schon seit einiger Zeit meine Leidenschaft. Nach zahlreichen persönlichen Projekten habe ich mich entschieden, meine Erfahrungen zu teilen, indem ich maßgeschneiderte Webseiten für andere erstelle.
                </p>
            </div>
            <div className={`w-[40%] right lg:min-w-[400px] bg-darkBg border-2 border-lightBG rounded-2xl relative selection:bg-zinc-600 max-[1250px]:w-full`}>
                <nav className={`w-full bg-normalLightBg rounded-t-2xl flex p-2 items-center`}>
                    <div className={`flex items-center p-2`}>
                        <div className={`ball bg-red-600 bg-opacity-90`}></div>
                        <div className={`ball bg-yellow-600 bg-opacity-90`}></div>
                        <div className={`ball bg-green-600 bg-opacity-90`}></div>
                    </div>
                    <div className={`flex gap-5 items-center rounded-xl border-2 border-lightBG w-full lg:h-10 lg:p-2 text-secondary max-lg:text-sm max-lg:h-min p-1`}>
                        <div className={`max-lg:scale-75`}><LockSVG/></div>
                        www.Fdot.ch
                    </div>
                </nav>
                <section className={`flex p-2`}>
                    <div className={`text-end text-secondary max-lg:hidden`}>
                        {Array.from({ length: 13 }, (_, index) => (
                            <div key={index} className={`max-lg:text-sm`}>
                                {index + 1}.
                            </div>
                        ))}
                    </div>
                    <code className="pl-4 max-lg:text-sm">
                        <div className="text-red-600 text-opacity-90">&lt;html&gt;</div>
                        <div className="pl-4 text-red-600 text-opacity-90">&lt;body&gt;</div>
                        <div className="pl-8 text-red-600 text-opacity-90">&lt;section&gt;</div>
                        <div className="pl-12 text-yellow-500">&lt;h1&gt;</div>
                        <div className="pl-16 appearTitle">Florian Giesser</div>
                        <div className="pl-12 text-yellow-500">&lt;/h1&gt;</div>
                        <div className="pl-12 text-yellow-500">&lt;p&gt;</div>
                        <div className="pl-16 appear">Hallo! Ich bin Florian, ein Student an der Kantonsschule Sargans. Die Programmierung von Webseiten...</div>
                        <div className="pl-12 text-yellow-500">&lt;/p&gt;</div>
                        <div className="pl-8 text-red-600 text-opacity-90">&lt;/section&gt;</div>
                        <div className="pl-4 text-red-600 text-opacity-90">&lt;/body&gt;</div>
                        <div className="text-red-600 text-opacity-90">&lt;/html&gt;</div>
                    </code>

                </section>
            </div>
        </div>
    </section>*/