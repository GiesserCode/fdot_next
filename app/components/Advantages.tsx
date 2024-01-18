'use client'
import {advantages} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";

const Advantages = () => {
    return <section className={`section-Center selection:bg-blue-800`}>
        <div className={`maxW w-full flex px-10 justify-evenly overflow-hidden py-5 flex-wrap`}>
            {advantages.map((item: any, index: number) => (
                <div key={index} className={`w-[300px] shuffeledUp bg-normalBG rounded-2xl border border-lightBG mb-20 mx-2`}>
                    <div className={`w-full grid place-items-center my-5 mx-auto`}>
                        <div className={`bg-darkBg rounded-full p-4`}>{item.icon}</div>
                    </div>
                    <h3 className={`w-full text-center text-primary ${blackOpsOne.className} antialiased text-3xl`}>
                        {item.title}
                    </h3>
                    <p className={`p-5 text-lg text-center text-secondary`}>
                        {item.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
}

export default Advantages