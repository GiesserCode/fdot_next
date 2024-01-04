import {CompassSVG, LightningSVG, UserSVG} from "@/app/ui/SVG";

export const navbar = ["Home", "Über mich", "Kontakt", "afsda"];
export const dropdown = [
  null,
  ["Mission", "Über mich", "Referenzen"],
  ["Preise", "Kontakt", "Kontaktfda"],
  ["Prdeise", "d", "a"],
];
export const links = [
  "home",
  ["mission", "aboutme", "references"],
  ["preise", "kontakt"],
  null,
];

export const advantages = [
  {
    icon: <CompassSVG />,
    title: "Modern",
    description: "Some Text"
  },
  {
    icon: <UserSVG />,
    title: "Personalisiert",
    description: "Some Text"
  },
  {
    icon: <LightningSVG />,
    title: "Schnell",
    description: "Some Text"
  },
  {
    icon: "icon",
    title: "Modern",
    description: "Some Text"
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
