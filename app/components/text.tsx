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
        title: "Modern",
        description: "Ich erstelle Ihnen ein auf ihr Unternhemen und ihre Branche angepasstes Design."
    },
    {
        icon: <UserSVG/>,
        title: "Handgemacht",
        description: "Ich programmiere Ihre Webseite aus eigener Hand und mach es für kann zukünftige Änderungen einfach vornehmen."
    },
    {
        icon: <LightningSVG/>,
        title: "Schnell",
        description: "Ich kreire ihre Seite basierend auf ihren wünschen"
    },
    {
        icon: <NavigatorSVG/>,
        title: "Personalisiert",
        description: "Ich kreire ihre Seite basierend auf ihren wünschen"
    },
]

export const ablauf = [
    {
        title: "Besprechung & Planung",
        description: "Füllen Sie unser online Formular aus und wir melden uns bei Ihnen. Nach einer kurzen telefonischen Besprechung erhalten Sie eine passende Offerte.",
    },
    {
        title: "Projekt Start",
        description: "Falls Ihnen unser Angebot zusagt, starten wir mit dem Projekt. Sie erhalten innerhalb von zwei Wochen den ersten Designentwurf Ihrer neuen Webseite. Gerne gehen wir auf alle Ihre Änderungswünsche ein.",
    },
    {
        title: "Go-Live",
        description: "Nachdem wir alle Texte erstellt und die Inhalte eingepflegt haben, sind wir bereit, Ihre neue Webseite der Welt zu präsentieren. Nun geht es darum, Ihre Webseite zu bewerben und möglichst viele Besucher zu erreichen.",
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
            "Mit dem Simple angebot erhalten sie eine einfache Webseite für ihr Unternehmen oder ihr Hobby. Mir diesem Angebot erhalten sie eine Webseite mit einem guten Preis/Leistungs verhältnis.",
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
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, voluptas quod architecto inventore harum accusamus similique cum perferendis magnam, vel ipsam expedita pariatur facilis repellendus quibusdam consequatur ex corrupti repudiandae.",
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