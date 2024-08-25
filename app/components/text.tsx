import {CompassSVG, FinishSVG, LightningSVG, MapSVG, NavigatorSVG, PenSVG, PlanungSVG, UserSVG} from "@/app/ui/SVG";

export const navbar = ["Home", "Ablauf", "Über mich", "Referenzen", "Preise", "Kontakt", "Angebote"];
export const dropdown = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];
export const links = [
    "home",
    "ablauf",
    "übermich",
    "referenzen",
    "preise",
    "kontakt",
    "angebote",
];

export const advantages = [
    {
        icon: <CompassSVG/>,
        title: "Personalisiert",
        description: "Ihre Webseite, gestaltet nach ihren Wünschen. Lassen Sie uns gemeinsam Ihre Vorstellungen in die Realität umsetzen."
    },
    {
        icon: <UserSVG/>,
        title: "Handgemacht",
        description: "Ihre Seite ist mit Liebe zum Deteil gestaltet, um eine einzigartige Online-Erfahrung zu bieten."
    },
    {
        icon: <LightningSVG/>,
        title: "Schnell",
        description: "Vergessen Sie lange Wartezeiten und erleben Sie eine schnelle Online-Präsenz."
    },
    {
        icon: <NavigatorSVG/>,
        title: "Modern",
        description: "Ihre digitale Identität, auf dem neusten Stand der Technologie. Hinterlassen Sie so einen bleibenden Eindruck."
    },
]

export const ablauf = [
    {
        title: "Besprechung & Planung",
        description: "Nachdem Sie das Online-Formular ausgefüllt haben, stehe ich gerne für einen persönlichen Austausch zur Verfügung. Nach einer kurzen Besprechung erstelle ich für Sie ein massgeschneidertes Angebot.",
    },
    {
        title: "Startschuss",
        description: "Sollten Sie sich für mein Angebot entscheiden, beginne ich umgehend mit dem Projekt. Nachdem ich Ihnen den ersten Designentwurf Ihrer zukünftigen Webseite präsentiert habe. Wird es mir eine Freude sein, all Ihre Anpassungswünsche sorgfältig zu berücksichtigen.",
    },
    {
        title: "Weblaunch",
        description: "Mit allen eingefügten Inhalten rückt die Enthüllung Ihrer neuen Webseite näher. Mein aktuelles Ziel ist es, Ihre Webseite effektiv zu vermarkten und eine breite Besucherschaft zu erreichen.",
    },
]

export const ablaufGrafik = [
    {
        style: "col-span-1 row-span-1 row-start-2 col-start-1",
        icon: <PlanungSVG/>,
        title: "Besprechung",
        description: "Sammeln von Informationen",
    },
    {
        style: "col-span-1 row-span-1 row-start-3 col-start-2",
        icon: <PenSVG/>,
        title: "Planung & Design",
        description: "Erste Designvorschläge",
    },
    {
        style: "col-span-4 row-span-1 row-start-4 col-start-3",
        icon: <MapSVG/>,
        title: "Programmierung & Entwicklung",
        description: "Verwandlung des Designs in Realität",
    },
    {
        style: "col-span-2 row-span-1 row-start-5 col-start-7",
        icon: <FinishSVG/>,
        title: "Testen und Feinschliff",
        description: "Kleinigkeiten und Fehler werden behoben",
    },
]

export const pricing = {
    title: "Kosten",
    description:
        "Die Preise können erheblich variieren, abhängig vom Aufwand.",
    pricing: [{
        title: "Simple",
        description:
            "Mit dem Simple angebot erhalten sie eine einfache Webseite für ihr Unternehmen oder Hobby. Zu diesem Angebot kommt dazu, dass ich ihnen kostenfrei zeige, wie sie in Zukunft zugriff auf die Webseite haben.",
        includedTitle: "Das gehört dazu",
        included: [
            "Bis zu 3 Seiten",
            "Gute Performance",
            "Optimiert",
            "Personalisiert",
            "Eigene Domain",
            "Gratis hosting",
        ],
        priceTitle: "Preis wird nach Aufwand berechnet",
        price: "999.-",
        priceButton: "Kontakt aufnehmen",
    },
        {
            title: "WIX",
            description:
                "Mein WIX-Angebot mit einfachem und kostengünstigem Design ist jetzt verfügbar! Erhalten Sie eine maßgeschneiderte Website für Ihr Unternehmen oder Hobby, die Ihren Bedürfnissen entspricht.",
            includedTitle: "Das gehört dazu",
            included: [
                "mehrere Seiten",
                "Simples Design",
                "Eigene Domain",
                "Personalisiert",
                "Scrollanimation",
                "12 CHF/monat hosting",
            ],
            priceTitle: "Preis wird nach Aufwand berechnet",
            price: "800.-",
            priceButton: "Kontakt aufnehmen",
        },
        {
            title: "Reparatur und Hosting",
            description:
                "Sind Sie mit Ihrer Webseite unzufrieden oder zahlen Sie zu viel für Ihr Hosting? Kontaktieren Sie mich und wir schauen uns die Probleme gemeinsam an.",
            includedTitle: "Das gehört dazu",
            included: [
                "Technische Unterstützung",
                "Änderungen im Design",
                "Beratung",
                "Hinzufügen von neuen Seiten",
                "Problembehebung",
                "Günstiges Hosting",
            ],
            priceTitle: "Beratung Gratis",
            price: "25.-/h",
            priceButton: "Kontakt aufnehmen",
        },]
};

export const contact = {
    title: "Kontakt",
    description:
        "Kontaktieren Sie mich gerne wenn Sie interessiert sind oder noch Fragen haben",
};