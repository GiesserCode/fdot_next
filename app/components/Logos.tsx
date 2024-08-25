'use client'
import {FigmaSVG, GithubSVG, NextjsSVG, ReactSVG, TailwindSVG} from "@/app/ui/SVG";

const Logos = () => {
    return <section className={`section-Center px-10 overflow-hidden mb-20`}>
        <div className={`maxW flex justify-evenly w-full max-lg:flex-wrap gap-5`}>
            <FigmaSVG />
            <TailwindSVG />
            <GithubSVG />
            <NextjsSVG />
            <ReactSVG />
        </div>
    </section>
}

export default Logos

// Mit Animation
/*<section className={`section-Center px-10 overflow-hidden mb-20`}>
        <div className={`maxW flex justify-evenly w-full bottom max-lg:flex-wrap gap-5`}>
            <FigmaSVG />
            <TailwindSVG />
            <GithubSVG />
            <NextjsSVG />
            <ReactSVG />
        </div>
    </section>*/