import 'splitting/dist/splitting.css';
import {ChakraProvider} from '@chakra-ui/react'
import type {Viewport} from 'next'
import {Metadata} from "next";
import Clientpage from "@/app/components/Clientpage";

export const metadata: Metadata = {
    title: 'Fdot',
    description: "Auf der Suche nach einer Neuen personalisierten Webseite? Ganzer Service von Design bis zum Aufschalten Ihrer neuen Webseite.",
    metadataBase: new URL('https://fdot.ch'),
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
        <ChakraProvider>
            <Clientpage />
        </ChakraProvider>
    );
}
