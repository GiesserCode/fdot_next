'use client'
import {pricing} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";

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
        <div className="text-center mt-24 flex flex-col items-center">
            <h2 className={`text-primary ${blackOpsOne.className} text-5xl m-2 max-lg:text-4xl text`}>
                {pricing.title}
            </h2>
            <p id={"0.02"} className="text-2xl text-zinc-400 w-9/12 max-lg:text-lg appear">
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
            <h2 className={`text-2xl ${blackOpsOne.className} background-gradient text-transparent bg-clip-text inline-block text`}>
                {pricing.simple.title}
            </h2>
            <p id={"0.02"} className="text-zinc-400 text-lg appear">{pricing.simple.description}</p>
        </div>
    );
}

function SimpleIncluded() {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} background-gradient text-transparent bg-clip-text inline-block text`}>
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
        <div className="w-1/4 bg-zinc-900 rounded-xl border border-zinc-600 m-2 max-lg:w-10/12 right">
            <h3 className="h-1/3 w-full text-lg text-zinc-400 grid place-items-center text-center max-lg:text-sm max-lg:p-2">
                {pricing.simple.priceTitle}
            </h3>
            <h2 className={`h-1/3 w-full ${blackOpsOne.className} text-4xl text-primary grid place-items-center max-lg:text-2xl`}>
                {pricing.simple.price}
            </h2>
            <button
                className={`m-5 p-2 w-10/12 text-sm ${blackOpsOne.className} text-primary bg-lightBG rounded-xl lg:hover:bg-normalLightBg ease-in-out duration-500`}>
                {pricing.simple.priceButton}
            </button>
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
            <h2 className={`text-2xl ${blackOpsOne.className}`}>{pricing.advanced.title}</h2>
            <p id={"0.02"} className="text-zinc-400 text-lg appear">{pricing.advanced.description}</p>
        </div>
    );
}

function AdvancedIncluded() {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} text-primary text`}>
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
        <div
            className="w-1/4 bg-zinc-900 rounded-xl border border-zinc-600 m-2 max-lg:w-10/12 flex flex-col justify-evenly relative right">
            <h3 className="h-1/3 w-full text-lg text-zinc-400 grid place-items-center text-center max-lg:text-sm max-lg:p-2">
                {pricing.advanced.priceTitle}
            </h3>
            <h2 className={`h-1/3 w-full ${blackOpsOne.className} text-4xl text-primary grid place-items-center max-lg:text-2xl`}>
                {pricing.advanced.price}
            </h2>
            <button
                className={`m-5 p-2 w-10/12 text-sm ${blackOpsOne.className} text-primary rounded-xl bg-lightBG lg:hover:bg-normalLightBg ease-in-out duration-500`}>
                {pricing.advanced.priceButton}
            </button>
        </div>
    );
}


export default Pricing;
