'use client' // Error components must be Client Components

import {FFdotSVG} from "@/app/ui/SVG";
import { stringify } from "querystring";

export default function Error({error, reset,}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    /*useEffect(() => {
        const logo = document.getElementById('logo');

// Erstelle eine zufällige Animation
        gsap.to(logo, {
            x: () => Math.random() * 20 - 10, // Zufällige x-Position
            y: () => Math.random() * 20 - 10, // Zufällige y-Position
            rotation: () => Math.random() * 20 - 10, // Zufällige Rotation
            duration: 2, // Dauer der Animation in Sekunden
            repeat: -1, // Wiederhole die Animation unendlich oft
            yoyo: true, // Spiele die Animation rückwärts
            ease: 'power1.inOut', // Easing-Funktion
        });
        console.error(error)
    }, [error])*/

    return (
        <section className={`section-Center h-screen`}>
            <div className={`z-20 flex items-center flex-col gap-5`}>
                <FFdotSVG/>
                <h2 className={`text-4xl`}>Something went wrong!</h2>
                <button className={`bg-primary text-normalBG rounded-xl p-2`}
                onClick={() => reset()}
                >
                    Try again
                </button>
            </div>
            <div className="absolute white">
                {JSON.stringify(error)}
            </div>
        </section>
    )
}