import {blackOpsOne} from "@/app/ui/fonts";

const Offers = () => {
    return <section className={`section-Center`}>
        <div id={"angebote"} className={`id`}></div>
        <div className={`flex justify-evenly maxW p-5 w-full`}>

            <div className={`box`}>
                <h3 className={`text-4xl ${blackOpsOne.className} antialiased`}>
                    Datenbank
                </h3>
                <div className={`box border-0`}>
                    <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2`}>
                        Programmiert
                    </h4>
                    <p className={`text-xl text-secondary`}>
                        Ich benutze Supabase um eine Datenbank für sie zu erstellen.
                    </p>
                </div>
            </div>
            <div className={`box border-0 p-[1px] background-gradient rounded-2xl`}>
                <div className={`rounded-2xl w-full h-full bg-normalBG p-5`}>
                    <h3 className={`text-4xl ${blackOpsOne.className} antialiased`}>
                        Einfache Webseite
                    </h3>
                    <div className={`box`}>
                        <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2`}>
                            Programmiert
                        </h4>
                        <p className={`text-xl text-secondary`}>
                            Personalisierte Effekte, keine Einschränkung von Möglichkeiten, NextJs wird verwendet
                        </p>
                    </div>
                    <div className={`box`}>
                        <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2`}>
                            Zusammengebaut
                        </h4>
                        <p className={`text-xl text-secondary`}>
                            Mit Wordpress gemacht, einfache Animationen, schneller, einfach zu bearbeiten
                        </p>
                    </div>
                </div>
            </div>
            <div className={`box`}>
                <h3 className={`text-4xl ${blackOpsOne.className} antialiased`}>
                    Onlineshop
                </h3>
                <div className={`box border-0`}>
                    <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2`}>
                        Zusammengebaut
                    </h4>
                    <p className={`text-xl text-secondary`}>
                        Onlineshops baue ich nur mit Onlinetools wie Shopify, Wordpress, Jimdo, etc. Somit können sie den Shop später ganz einfach verändern.
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default Offers