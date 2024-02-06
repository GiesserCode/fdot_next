'use client'

import Navbar from "@/app/components/Navbar";
import HeroSection from "@/app/components/HeroSection";
import Advantages from "@/app/components/Advantages";
import Ablauf from "@/app/components/Ablauf";
import AblaufGrafik from "@/app/components/AblaufGrafik";
import Logos from "@/app/components/Logos";
import About from "@/app/components/About";
import References from "@/app/components/References";
import Pricing from "@/app/components/Pricing";
import Contact from "@/app/components/Contact";
import LgForm from "@/app/components/MobileContact";
import Offers from "@/app/components/Offers";
import Footer from "@/app/components/Footer";

const Clientpage = () => {
    return <main className={`min-h-min`}>
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
        <LgForm />
        <Offers/>
        <Footer/>
    </main>
}

export default Clientpage