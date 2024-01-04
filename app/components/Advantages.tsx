import {advantages} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";

const Advantages = () => {
    return <section className={`section-Center`}>
        <div className={"flex flex-wrap maxW justify-evenly"}>
            {advantages.map((advantage: any, index: number) => (
                <div key={index} className={`w-[500px] h-[180px] mx-[5%] bg-normalBG rounded-2xl p-5 mb-[100px] border border-lightBG`}>
                    <div className={`mb-5`}>
                        {advantage.icon}
                    </div>
                    <h3 className={`text-3xl ${blackOpsOne.className} antialiased mb-2`}>
                        {advantage.title}
                    </h3>
                    <p>
                        {advantage.description}
                    </p>
                </div>
            ))}
        </div>
    </section>
}

export default Advantages