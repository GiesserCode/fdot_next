'use server'

import HeroSection from "@/app/components/HeroSection";
import Navbar from "@/app/components/Navbar";
import Pricing from "@/app/components/Pricing";
import Advantages from "@/app/components/Advantages";
import Ablauf from "@/app/components/Ablauf";
import AblaufGrafik from "@/app/components/AblaufGrafik";

export default async function Home() {
  return (
    <main className={`min-h-min`}>
            <Navbar />
            <HeroSection />
        <Advantages />
        <Ablauf />
        <AblaufGrafik />
        <Pricing />
    </main>
  );
}
