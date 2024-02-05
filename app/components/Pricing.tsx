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
            <Simple/>
            <Advanced/>
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

function Simple() {
    return (
        <div className="w-full h-min grid place-items-center my-8 bottom">
            <div className={`max-w-screen-2xl rounded-2xl p-[2px] background-gradient  w-10/12`}>
                <div className="flex max-lg:items-center max-lg:flex-col overflow-hidden bg-darkBg rounded-2xl">
                    <div className="text-primary p-4 h-1/2 w-9/12 flex flex-col gap-4 max-lg:w-full">
                        <SimpleTitle/>
                        <SimpleIncluded/>
                    </div>
                    <SimplePrice/>
                </div>
            </div>
        </div>
    );
}

function SimpleTitle() {
    return (
        <div>
            <h2 className={`text-2xl ${blackOpsOne.className} background-gradient text-transparent bg-clip-text inline-block text max-lg:text-primary`}>
                {pricing.simple.title}
            </h2>
            <p id={"0.02"} className="text-zinc-400 text-lg appear max-lg:text-base">{pricing.simple.description}</p>
        </div>
    );
}

function SimpleIncluded() {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} background-gradient text-transparent bg-clip-text inline-block text max-lg:text-primary`}>
            {pricing.simple.includedTitle}
            </h3>
            <div className="flex flex-wrap max-lg:text-sm">
                {pricing.simple.included.map((items) => (
                    <p key={items} className="w-1/2 h-1/2 p-2 relative flex gap-x-3">
                        <svg
                            className="h-6 w-5 text-purpleMain"
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

function SimplePrice() {
    return (
        <div className="bg-normalLightBg m-3 rounded-2xl flex flex-col items-center justify-evenly w-1/4 border border-lightBG max-lg:w-10/12 max-lg:gap-2 max-lg:p-2">
            <h3 className="text-lg text-secondary max-lg:hidden">
                {pricing.simple.priceTitle}
            </h3>
            <h2 className={`${blackOpsOne.className} antialiased text-4xl max-lg:text-xl`}>
                {pricing.simple.price}
            </h2>
            <Link href={"#kontakt"}
                className={`${blackOpsOne.className} antialiased bg-lightBG w-10/12 p-2 rounded-xl text-center max-lg:text-base`}>
                {pricing.simple.priceButton}
            </Link>
        </div>
    );
}

function Advanced() {
    return (
        <div className="w-full h-min grid place-items-center my-8 bottom">
            <div className={`max-w-screen-2xl rounded-2xl p-[2px] bg-lightBG w-10/12`}>
                <div className="flex max-lg:items-center max-lg:flex-col overflow-hidden bg-darkBg rounded-2xl">
                    <div className="text-primary p-4 h-1/2 w-9/12 flex flex-col gap-4 max-lg:w-full">
                        <AdvancedTitle/>
                        <AdvancedIncluded/>
                    </div>
                    <AdvancedPrice/>
                </div>
            </div>
        </div>
    );
}

function AdvancedTitle() {
    return (
        <div>
            <h2 className={`text-2xl ${blackOpsOne.className} antialiased max-lg:text-primary`}>{pricing.advanced.title}</h2>
            <p id={"0.02"} className="text-zinc-400 text-lg appear max-lg:text-base">{pricing.advanced.description}</p>
        </div>
    );
}

function AdvancedIncluded() {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} antialiased text-primary text max-lg:text-primary`}>
                {pricing.advanced.includedTitle}
            </h3>
            <div className="flex flex-wrap max-lg:text-sm">
                {pricing.advanced.included.map((items) => (
                    <p key={items} className="w-1/2 h-1/2 p-2 relative flex gap-x-3">
                        <svg
                            className="h-6 w-5 text-primary"
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

function AdvancedPrice() {
    return (
        <div className="bg-normalLightBg m-3 rounded-2xl flex flex-col items-center justify-evenly w-1/4 border border-lightBG max-lg:w-10/12 max-lg:gap-2 max-lg:p-2">
            <h3 className="text-lg text-secondary max-lg:hidden">
                {pricing.advanced.priceTitle}
            </h3>
            <h2 className={`${blackOpsOne.className} antialiased text-4xl max-lg:text-xl`}>
                {pricing.advanced.price}
            </h2>
            <Link href={"#kontakt"}
                  className={`${blackOpsOne.className} antialiased bg-lightBG w-10/12 p-2 rounded-xl text-center max-lg:text-base`}>
                {pricing.advanced.priceButton}
            </Link>
        </div>
    );
}


export default Pricing;
