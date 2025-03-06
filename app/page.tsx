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
import Contact from "@/app/components/Contact";
import Offers from "@/app/components/Offers";
import Footer from "@/app/components/Footer";
import MobileContact from "@/app/components/MobileContact";


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
            <Pricing/>
            <Offers/>
            <Footer />
        </main>
    );
}