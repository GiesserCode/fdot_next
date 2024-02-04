'use client'

import 'splitting/dist/splitting.css';
import {ChakraProvider} from '@chakra-ui/react'
import Pricing from "@/app/components/Pricing";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Advantages from "@/app/components/Advantages";
import Ablauf from "@/app/components/Ablauf";
import AblaufGrafik from "@/app/components/AblaufGrafik";
import Logos from "@/app/components/Logos";
import About from "@/app/components/About";
import References from "@/app/components/References";
import Offers from "@/app/components/Offers";
import Footer from "@/app/components/Footer";
import Contact from "@/app/components/Contact";

export default function Home() {
    return (
        <ChakraProvider>
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
                <Footer/>
            </main>
        </ChakraProvider>
    );
}
