'use client'
import {ablauf} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";

const Ablauf = () => {
    return <section className={`section-Center mb-20 selection:bg-purple-800 selection:text-primary`}>
        <div id={"ablauf"} className={`id`}></div>
            {ablauf.map((item: any, index: number) => (
                <div key={index} className={`section-Center`}>
                    <div className={`maxW max-w-[1000px] flex px-10 items-center overflow-hidden`}>
                        <div className={`w-[70%] ${index % 2 !== 0 ? "order-2 right" : "order-1 left"}`}>
                            <h4 className={`${blackOpsOne.className} antialiased colortitle text`}>
                                Schritt {index + 1}
                            </h4>
                            <h3 className={`${blackOpsOne.className} antialiased text-4xl text-primary text`}>
                                {item.title}
                            </h3>
                            <div className={`text-secondary text-xl bottom`}>
                                {item.description}
                            </div>
                        </div>
                        <div className={`w-[30%] ${index % 2 !== 0 ? "order-1 left" : "order-2 flex flex-row-reverse right"} p-2`}>
                            <span className={`${blackOpsOne.className} antialiased text-[10rem] text-secondary`}>
                                {index + 1}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
    </section>
}

export default Ablauf