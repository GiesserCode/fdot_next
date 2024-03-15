import 'splitting/dist/splitting.css';
import {ChakraProvider} from '@chakra-ui/react'
import type {Viewport} from 'next'
import {Metadata} from "next";
import Clientpage from "@/app/components/Clientpage";

export const metadata: Metadata = {
    title: 'Fdot - Erstellen Sie Ihre persönliche Website',
    description: "Auf der Suche nach einer Neuen personalisierten Webseite? Ganzer Service von Design bis zum Aufschalten Ihrer neuen Webseite. Kontaktieren Sie mich noch heute, um Ihre Träume zu verwirklichen und Ihre Website zu erstellen.",
    metadataBase: new URL('https://fdot.ch'),
    authors: [
        {name: "Florian Giesser", url: "https://fdot.ch"}
    ],
    openGraph: {
        title: 'Fdot',
        description: 'Auf der Suche nach einer Neuen personalisierten Webseite? Ganzer Service von Design bis zum Aufschalten Ihrer neuen Webseite.',
    },
}

export const viewport: Viewport = {
    themeColor: "#090909",
}

export default function Home() {
    return (
<<<<<<< HEAD
        <main className={`min-h-min`}>
            <Navbar/>
            <HeroSection/>
            <Advantages/>
            <Ablauf/>
            <AblaufGrafik/>
            <Logos/>
            <About/>
            <References/>
            <Pricing/>
            <Contact/>
            <Offers/>
            <Footer />
        </main>
=======
        <ChakraProvider>
            <Clientpage />
        </ChakraProvider>
>>>>>>> 965915d56d414cfbd6e6c1e1858d5cc1a5987b6d
    );
}
