import {ablauf} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";

const Ablauf = () => {
    return <section className={`section-Center`}>
            {ablauf.map((item: any, index: number) => (
                <div key={index} className={`section-Center`}>
                    <div className={`maxW max-w-[1000px] flex px-10 items-center`}>
                        <div className={`w-[70%] ${index % 2 !== 0 ? "order-2" : "order-1"}`}>
                            <h4 className={`${blackOpsOne.className} antialiased text-2xl background-gradient text-transparent bg-clip-text inline-block`}>
                                Schritt {index + 1}
                            </h4>
                            <h3 className={`${blackOpsOne.className} antialiased text-4xl text-primary`}>
                                {item.title}
                            </h3>
                            <p className={`text-secondary text-xl`}>
                                {item.description}
                            </p>
                        </div>
                        <div className={`w-[30%] ${index % 2 !== 0 ? "order-1" : "order-2 flex flex-row-reverse"} p-2`}>
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