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
        description: "Ihre Webseite, gestaltet nach ihren Wünschen."
    },
    {
        icon: <UserSVG/>,
        title: "Handgemacht",
        description: "Ihre Seite ist mit Liebe zum Deteil gestaltet, um eine einzigartige Online-Erfahrung zu bieten."
    },
    {
        icon: <LightningSVG/>,
        title: "Schnell",
        description: "Erfahren sie eine schnelle Online-Präsenz."
    },
    {
        icon: <NavigatorSVG/>,
        title: "Modern",
        description: "Ihre digitale Identität, auf dem neusten Stand der Technologie."
    },
]

export const ablauf = [
    {
        title: "Besprechung & Planung",
        description: "Nachdem sie mein Online-Formular ausgefüllt haben, kann ich mich mit ihnen in Verbindung setzen. Nach einer kurzen Besprechung werde ich ihnen ein massgeschneiderstes Angebot unterbreiten.",
    },
    {
        title: "Startschuss",
        description: "Wenn Ihnen mein Angebot zusagt, setze ich das Projekt in Gang. Innerhalb von zwei Wochen präsentieren ich Ihnen den ersten Designentwurf Ihrer zukünftigen Webseite. Ich freuen mich darauf, alle Ihre Anpassungswünsche sorgfältig zu berücksichtigen.",
    },
    {
        title: "Weblaunch",
        description: "Nachdem ich alle Inhalte eingefügt habe, steht die Enthüllung Ihrer neuen Webseite bevor. Jetzt konzentriere ich mich darauf, Ihre Webseite effektiv zu vermarkten und eine breite Besucherschaft zu erreichen.",
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
        description: "Erste Designforschläge",
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
    title: "Preise",
    description:
        "Die Preise können erheblich variieren, abhängig von dem investierten Aufwand.",
    simple: {
        title: "Simple",
        description:
            "Mit dem Simple angebot erhalten sie eine einfache Webseite für ihr Unternehmen oder Hobby. Zu diesem Angebot kommt dazu, dass ich ihnen kostenfrei zeige, wie sie in Zukunft zugriff auf die Webseite haben.",
        includedTitle: "Das gehört dazu",
        included: [
            "Bis zu 3 Seiten",
            "Simples Design",
            "Optimiert",
            "Personalisiert",
            "Eigene Domain",
            "Gute Performance",
        ],
        priceTitle: "Preis des Simplen Angebots",
        price: "CHF 1200.-",
        priceButton: "Jetzt Kaufen",
    },
    advanced: {
        title: "Advanced",
        description:
            "Mit dem Advanced-Angebot erhalten Sie eine maßgeschneiderte Webseite mit erweiterten Funktionen und einem modernen Design für Ihr Unternehmen oder Hobby. Steigern Sie Ihre Online-Präsenz und bringen Sie Ihr Projekt auf das nächste Level.",
        includedTitle: "Das gehört dazu",
        included: [
            "Animationen",
            "AGB und Datenschutz",
            "Komplexes Design",
            "Backend",
            "Scrollanimation",
            "Ab 3 Seiten",
        ],
        priceTitle: "Preis wird nach Aufwand berechnet",
        price: "nach Aufwand",
        priceButton: "Jetzt Kaufen",
    },
};

export const contact = {
    title: "Kontakt",
    description:
        "Kontaktieren Sie mich gerne wenn Sie interessiert sind oder noch Fragen haben",
};
