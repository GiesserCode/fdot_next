'use client'

import 'splitting/dist/splitting.css';
import Pricing from "@/app/components/Pricing";
import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Advantages from "@/app/components/Advantages";
import Ablauf from "@/app/components/Ablauf";
import AblaufGrafik from "@/app/components/AblaufGrafik";
import Logos from "@/app/components/Logos";
import About from "@/app/components/About";
import References from "@/app/components/References";
import GsapSection from "@/app/components/GsapSection";
import Contact from "@/app/components/Contact";
import Offers from "@/app/components/Offers";
import Footer from "@/app/components/Footer";


export default function Home() {
    return (
        <main className={`min-h-min`}>
            <Navbar/>
            <HeroSection/>
            <Advantages/>
            <Ablauf/>
            <AblaufGrafik/>
            <Logos/>
            <About/>
            <References/>
            <GsapSection/>
            <Pricing/>
            <Contact/>
            <Offers/>
            <Footer />
        </main>
    );
}
