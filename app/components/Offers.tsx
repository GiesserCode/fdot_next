import {blackOpsOne} from "@/app/ui/fonts";

const Offers = () => {
    return <section className={`section-Center selection:bg-blueMain selection:text-primary`}>
        <div id={"angebote"} className={`id`}></div>
        <div className={`flex justify-evenly maxW p-5 w-full max-lg:flex-wrap`}>

            <div className={`box`}>
                <h3 className={`text-4xl ${blackOpsOne.className} antialiased max-[1200px]:text-2xl`}>
                    Datenbank
                </h3>
                <div className={`box border-0`}>
                    <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2 max-[1200px]:text-lg`}>
                        Programmiert
                    </h4>
                    <p className={`text-xl text-secondary max-[1200px]:text-base`}>
                        Für die Erstellung Ihrer Datenbank setze ich auf Supabase. Diese Plattform ermöglicht nicht nur die Entwicklung einer leistungsstarken Datenbank, sondern bietet auch eine benutzerfreundliche Oberfläche für die einfache Verwaltung Ihrer Daten.
                    </p>
                </div>
            </div>
            <div className={`box border-0 p-[1px] background-gradient rounded-2xl`}>
                <div className={`rounded-2xl w-full h-full bg-normalBG p-5`}>
                    <h3 className={`text-4xl ${blackOpsOne.className} antialiased max-[1200px]:text-2xl`}>
                        Einfache Webseite
                    </h3>
                    <div className={`box`}>
                        <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2 max-[1200px]:text-lg`}>
                            Programmiert
                        </h4>
                        <p className={`text-xl text-secondary max-[1200px]:text-base`}>
                            Individuelle Effekte ohne Einschränkungen – realisiert mit Next.js.
                        </p>
                    </div>
                    <div className={`box`}>
                        <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2 max-[1200px]:text-lg`}>
                            Zusammengebaut
                        </h4>
                        <p className={`text-xl text-secondary max-[1200px]:text-base`}>
                            Mit WIX erstellt – unkomplizierte Animationen, schnelle Ladezeiten, mühelose Bearbeitung.
                        </p>
                    </div>
                </div>
            </div>
            <div className={`box`}>
                <h3 className={`text-4xl ${blackOpsOne.className} antialiased max-[1200px]:text-2xl`}>
                    Onlineshop
                </h3>
                <div className={`box border-0`}>
                    <h4 className={`colortitle ${blackOpsOne.className} antialiased text-2xl mb-2 max-[1200px]:text-lg`}>
                        Zusammengebaut
                    </h4>
                    <p className={`text-xl text-secondary max-[1200px]:text-base`}>
                        Ich erstelle Onlineshops ausschließlich mit benutzerfreundlichen Plattformen wie WIX. Dies ermöglicht Ihnen eine problemlose Anpassung des Shops nach Ihren Wünschen.
                    </p>
                </div>
            </div>
        </div>
    </section>
}

export default Offers