'use client'
import {pricing} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";
import Link from "next/link";

const Pricing = () => {
    return (
        <section
            className={`relative w-full overflow-hidden selection:bg-blue-900 selection:text-primary font-main`}>
            <div id={"preise"} className={`id`}></div>
            <div className="w-full flex items-center flex-col gap-24">
                <PricingTitle/>
            </div>
            {pricing.pricing.map((item: any, index: number) => (
                <Simple key={index} item={item} index={index}/>
            ))}
        </section>
    );
};

function PricingTitle() {
    return (
        <div className="text-center flex flex-col items-center max-lg:w-full">
            <h2 className={`text-primary ${blackOpsOne.className} text-5xl m-2 max-lg:text-2xl text`}>
                {pricing.title}
            </h2>
            <p id={"0.02"} className="text-2xl text-zinc-400 w-9/12 max-lg:text-base appear">
                {pricing.description}
            </p>
        </div>
    );
}

function Simple({item, index} : any) {
    return (
        <div className="w-full h-min grid place-items-center my-8">
            <div className={`maxW rounded-2xl p-[2px] ${index === 0 ? "background-gradient" : "bg-lightBG"}  w-10/12`}>
                <div className="flex max-lg:items-center max-lg:flex-col overflow-hidden bg-darkBg rounded-2xl">
                    <div className="text-primary p-4 h-1/2 w-full flex flex-col gap-4 max-lg:w-full">
                        <SimpleTitle item={item}/>
                        <SimpleIncluded item={item} index={index}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
//Mit Animation
/*<div className="w-full h-min grid place-items-center my-8 bottom">
            <div className={`maxW rounded-2xl p-[2px] ${index === 0 ? "background-gradient" : "bg-lightBG"}  w-10/12`}>
                <div className="flex max-lg:items-center max-lg:flex-col overflow-hidden bg-darkBg rounded-2xl">
                    <div className="text-primary p-4 h-1/2 w-full flex flex-col gap-4 max-lg:w-full">
                        <SimpleTitle item={item}/>
                        <SimpleIncluded item={item} index={index}/>
                    </div>
                </div>
            </div>
        </div>*/

function SimpleTitle({item}: any) {
    return (
        <div>
            <h2 className={`text-2xl ${blackOpsOne.className} text-primary text max-lg:text-primary`}>
                {item.title}
            </h2>
            <p id={"0.01"} className="text-zinc-400 text-lg appear max-lg:text-base">{item.description}</p>
        </div>
    );
}

function SimpleIncluded({item, index}: any) {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} text-primary max-lg:text-primary max-lg:mb-2`}>
                {item.includedTitle}
            </h3>
            <div className="flex flex-wrap max-lg:text-sm max-sm:flex-col max-sm:w-full">
                {item.included.map((items: any) => (
                    <p key={items} className="w-1/2 h-1/2 p-2 relative flex gap-x-3 max-sm:w-full">
                        <svg
                            className={`h-6 w-5 ${index === 0 ? "text-purpleMain" : "text-secondary"}`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span className={`text`}>{items}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}

function SimplePrice({item}: any) {
    return (
        <div className="bg-normalLightBg m-3 rounded-2xl flex flex-col items-center justify-evenly w-1/4 border border-lightBG max-lg:w-10/12 max-lg:gap-2 max-lg:p-2">
            <h3 className="text-lg text-secondary max-lg:hidden">
                {item.priceTitle}
            </h3>
            <h3 className="text-base text-secondary lg:hidden">
                Preis des Angebots:
            </h3>
            <h2 className={`${blackOpsOne.className} antialiased text-4xl max-lg:text-xl`}>
                {item.price}
            </h2>
            <Link href={"#kontakt"}
                  className={`${blackOpsOne.className} antialiased bg-lightBG w-10/12 p-2 rounded-xl text-center max-lg:text-base`}>
                {item.priceButton}
            </Link>
        </div>
    );
}

export default Pricing;