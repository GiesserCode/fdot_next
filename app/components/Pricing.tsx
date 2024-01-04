'use client'
import { pricing, contact} from "@/app/components/text";
import {blackOpsOne} from "@/app/ui/fonts";

const Pricing = () => {
    return (
        <section className={`relative w-full min-h-screen overflow-hidden selection:bg-blue-900 selection:text-white font-main`}>
            <div className="w-full flex items-center flex-col gap-24">
                <PricingTitle />
            </div>
            <Simple />
            <Advanced />
            <ContactTitle />
            <ContactForm />
        </section>
    );
};

function PricingTitle() {
    return (
        <div className="text-center mt-24 flex flex-col items-center">
            <h2 className={`text-white ${blackOpsOne.className} text-5xl m-2 max-lg:text-4xl`}>
                {pricing.title}
            </h2>
            <p className="text-2xl text-zinc-400 w-9/12 max-lg:text-lg">
                {pricing.description}
            </p>
        </div>
    );
}

function Simple() {
    return (
        <div className="w-full h-min grid place-items-center my-8">
            <div className="border-2 max-w-screen-2xl border-blue-600 flex rounded-xl w-10/12 max-lg:items-center max-lg:flex-col">
                <div className="text-white p-4 h-1/2 w-9/12 flex flex-col gap-4 max-lg:w-full">
                    <SimpleTitle />
                    <SimpleIncluded />
                </div>
                <SimplePrice />
            </div>
        </div>
    );
}

function SimpleTitle() {
    return (
        <div>
            <h2 className={`text-2xl ${blackOpsOne.className} text-blue-600`}>
                {pricing.simple.title}
            </h2>
            <p className="text-zinc-400 text-lg">{pricing.simple.description}</p>
        </div>
    );
}

function SimpleIncluded() {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} text-blue-600`}>
                {pricing.simple.includedTitle}
            </h3>
            <div className="flex flex-wrap max-lg:text-sm">
                {pricing.simple.included.map((items) => (
                    <p key={items} className="w-1/2 h-1/2 p-2 relative flex gap-x-3">
                        <svg
                            className="h-6 w-5 text-blue-600"
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
                        <span>{items}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}

function SimplePrice() {
    return (
        <div className="w-1/4 bg-zinc-900 rounded-xl border border-zinc-600 m-2 max-lg:w-10/12">
            <h3 className="h-1/3 w-full text-lg text-zinc-400 grid place-items-center text-center max-lg:text-sm max-lg:p-2">
                {pricing.simple.priceTitle}
            </h3>
            <h2 className={`h-1/3 w-full ${blackOpsOne.className} text-4xl text-white grid place-items-center max-lg:text-2xl`}>
                {pricing.simple.price}
            </h2>
            <button className={`m-5 p-2 w-10/12 text-sm ${blackOpsOne.className} text-white rounded-xl bg-blue-600 lg:hover:bg-zinc-600 ease-in-out duration-500`}>
                {pricing.simple.priceButton}
            </button>
        </div>
    );
}

function Advanced() {
    return (
        <div className="w-full h-min grid place-items-center my-8">
            <div className="border max-w-screen-2xl border-zinc-400 flex rounded-xl w-10/12 max-lg:items-center max-lg:flex-col">
                <div className="text-white p-4 h-1/2 w-9/12 flex flex-col gap-4 max-lg:w-full">
                    <AdvancedTitle />
                    <AdvancedIncluded />
                </div>
                <AdvancedPrice />
            </div>
        </div>
    );
}

function AdvancedTitle() {
    return (
        <div>
            <h2 className={`text-2xl ${blackOpsOne.className}`}>{pricing.advanced.title}</h2>
            <p className="text-zinc-400 text-lg">{pricing.advanced.description}</p>
        </div>
    );
}

function AdvancedIncluded() {
    return (
        <div>
            <h3 className={`text-sm ${blackOpsOne.className} text-blue-600`}>
                {pricing.advanced.includedTitle}
            </h3>
            <div className="flex flex-wrap max-lg:text-sm">
                {pricing.advanced.included.map((items) => (
                    <p key={items} className="w-1/2 h-1/2 p-2 relative flex gap-x-3">
                        <svg
                            className="h-6 w-5 text-blue-600"
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
                        <span>{items}</span>
                    </p>
                ))}
            </div>
        </div>
    );
}

function AdvancedPrice() {
    return (
        <div className="w-1/4 bg-zinc-900 rounded-xl border border-zinc-600 m-2 max-lg:w-10/12 flex flex-col justify-evenly relative">
            <h3 className="h-1/3 w-full text-lg text-zinc-400 grid place-items-center text-center max-lg:text-sm max-lg:p-2">
                {pricing.advanced.priceTitle}
            </h3>
            <h2 className={`h-1/3 w-full ${blackOpsOne.className} text-4xl text-white grid place-items-center max-lg:text-2xl`}>
                {pricing.advanced.price}
            </h2>
            <button className={`m-5 p-2 w-10/12 text-sm ${blackOpsOne.className} text-white rounded-xl bg-blue-600 lg:hover:bg-zinc-600 ease-in-out duration-500`}>
                {pricing.advanced.priceButton}
            </button>
        </div>
    );
}

function ContactTitle() {
    return (
        <div className="w-full grid place-items-center">
            <div
                id="kontakt"
                className="text-center mt-24 flex flex-col items-center max-w-3xl"
            >
                <h2 className={`text-white ${blackOpsOne.className} text-5xl m-2`}>{contact.title}</h2>
                <p className="text-2xl text-zinc-400 w-10/12 max-lg:text-lg">
                    {contact.description}
                </p>
            </div>
        </div>
    );
}

function ContactForm() {
    const sendMail = () => {
        const recipient = "flogie.007@outlook.com"; // Replace with the recipient's email address
        const nameInput =
            document.querySelector<HTMLInputElement>('input[name="name"]');
        const messageInput = document.querySelector<HTMLTextAreaElement>(
            'textarea[name="message"]'
        );

        if (nameInput && messageInput) {
            const subject = nameInput.value;
            const message = messageInput.value;
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(message)}`;

            window.location.href = mailtoLink;
        }
    };
    return (
        <div className="w-full grid place-items-center mb-8">
            <div className="w-4/5 max-w-3xl py-2">
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Anrede"
                    autoComplete="off"
                    className="w-full bg-transparent border border-zinc-600 p-2 rounded-lg m-2 outline-none text-white focus:border-blue-800 ease-in-out duration-500"
                />
                <textarea
                    name="message"
                    id="mail-content"
                    required
                    placeholder="Ich bin Interessiert..."
                    autoComplete="off"
                    className="w-full bg-transparent border border-zinc-600 p-2 rounded-lg m-2 outline-none text-white focus:border-blue-800 ease-in-out duration-500"
                ></textarea>
                <input
                    type="submit"
                    value={"Absenden"}
                    onClick={sendMail}
                    className="w-full bg-blue-600 p-2 rounded-lg m-2 outline-none text-white lg:hover:bg-zinc-600 ease-in-out duration-500"
                />
            </div>
        </div>
    );
}

export default Pricing;
