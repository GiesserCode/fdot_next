'use client'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useEffect} from 'react';
import Link from "next/link";
import {blackOpsOne} from "@/app/ui/fonts";
import {LockSVG, MailSVG} from "@/app/ui/SVG";
import Split from "split-type";


const Contact = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);
            //ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

            const container = document.querySelector('.container');
            const sections = gsap.utils.toArray('.section-horizontally');

            let scrollTween = gsap.to(sections, {
                x: () => -(container!.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: 1,
                    end: "+=3000",
                    pin: true,
                },
            });

            /*gsap.to(".box-1", {
                y: -130,
                duration: 2,
                ease: "elastic",
                scrollTrigger: {
                    trigger: ".box-1",
                    containerAnimation: scrollTween,
                    start: "left center",
                    toggleActions: "play none none reset",
                    id: "1",
                }
            });*/

            const textScrubElements = document.querySelectorAll('.textScrub');
            textScrubElements.forEach((element) => {
                const split = new Split(element, { types: 'lines, words, chars' });
                const chars = element.querySelectorAll('.char');
                console.log(element)

                gsap.to(chars, {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    delay: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        containerAnimation: scrollTween,
                        start: 'left 80%', // Adjust start for horizontal position
                        end: 'right 70%', // Adjust end for horizontal position
                        scrub: 0.5,
                    },
                });
            });

            const boxScrubElements = document.querySelectorAll('.boxScrub');

            boxScrubElements.forEach((element) => {
                console.log(element)

                gsap.to(element, {
                    y: 0,
                    opacity: 1,
                    stagger: 0.2,
                    delay: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        containerAnimation: scrollTween,
                        start: 'left 80%', // Adjust start for horizontal position
                        end: 'right 80%', // Adjust end for horizontal position
                        scrub: 0.5,
                    },
                });
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <div id={"kontakt"} className="wrapper overflow-x-hidden relative">
            <div className="flex container">
                <section className="section-horizontally w-screen center flex justify-evenly">
                    <div className={`w-1/2 p-1 flex justify-center max-lg:w-full`}>
                        <div className={`max-w-[600px] flex flex-col gap-5 max-lg:max-w-full`}>
                            <h2 className={`${blackOpsOne.className} antialiased text-primary text-6xl text max-lg:text-4xl`}>
                                Lass uns über ihr Projekt sprechen
                            </h2>
                            <p className={`text-2xl text-secondary text max-lg:text-base`}>
                                Realisieren sie ihre Projekte
                            </p>
                            <div className={`overflow-hidden py-2 pr-2`}>
                                <Link href={"mailto:info@fdot.ch"}
                                      className={`bg-normalBG rounded-2xl border border-lightBG p-5 gap-5 flex items-center bottom`}>
                                    <MailSVG/>
                                    <div className={`flex flex-col`}>
                                        <p className={`text-xl text-primary max-lg:text-base`}>
                                            Mailen sie mir
                                        </p>
                                        <p className={`background-gradient text-transparent bg-clip-text inline-block text-xl max-lg:text-base`}>
                                            info@fdot.ch
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`w-[40%] right min-w-[400px] bg-darkBg border-2 border-lightBG rounded-2xl relative selection:bg-zinc-600 max-[1200px]:hidden`}>
                        <nav className={`w-full bg-normalLightBg rounded-t-2xl flex p-2 items-center`}>
                            <div className={`flex items-center p-2`}>
                                <div className={`ball bg-red-600 bg-opacity-90`}></div>
                                <div className={`ball bg-yellow-600 bg-opacity-90`}></div>
                                <div className={`ball bg-green-600 bg-opacity-90`}></div>
                            </div>
                            <div
                                className={`flex gap-5 items-center rounded-xl border-2 border-lightBG w-full h-10 p-2 text-secondary`}>
                                <LockSVG/>
                                www.Fdot.ch
                            </div>
                        </nav>
                        <section className={`flex p-2`}>
                            <div className={`text-end text-secondary`}>
                                {Array.from({length: 10}, (_, index) => (
                                    <div key={index}>
                                        {index + 1}.
                                    </div>
                                ))}
                            </div>
                            <code className="pl-4">
                                <div className="text-red-600 text-opacity-90">&lt;html&gt;</div>
                                <div className="pl-4 text-red-600 text-opacity-90">&lt;form&gt;</div>
                                <div className="pl-8 text-red-600 text-opacity-90">&lt;div&gt;</div>
                                <div className="pl-12 text-yellow-500">&lt;h1&gt;</div>
                                <div id={"0.05"} className="pl-16 appear">Füllen sie das Formular rechts aus</div>
                                <div className="pl-12 text-yellow-500">&lt;/h1&gt;</div>
                                <div
                                    className="pl-12 text-yellow-500">{`<input type="text" defaultValue="Ihr Name" />`}</div>
                                <div className="pl-8 text-red-600 text-opacity-90">&lt;/div&gt;</div>
                                <div className="pl-4 text-red-600 text-opacity-90">&lt;/form&gt;</div>
                                <div className="text-red-600 text-opacity-90">&lt;/html&gt;</div>
                            </code>

                        </section>
                    </div>
                </section>
                <section className="section-horizontally w-min flex items-center">
                    <form className={`flex gap-5 ${blackOpsOne.className} antialiased`}>
                        <h2 className={` input-text textScrub`}>Hallo Florian, ich
                            bin</h2>
                        {/*<div className={`box-1 w-10 h-10 bg-red-600`}></div>*/}
                        <div className={`overflow-hidden h-min`}>
                            <input
                                type="text"
                                placeholder="Ihr Name"
                                className={` input w-[7ch] no-focus boxScrub`}
                            />
                        </div>
                        <h2 className={` input-text textScrub`}>. Du kannst mich
                            über </h2>
                        <div className={`overflow-hidden h-min`}>
                            <input
                                type="text"
                                placeholder="Ihr Kontakt"
                                className={` input w-[9ch] no-focus boxScrub`}
                            />
                        </div>
                        <h2 className={` input-text textScrub`}> erreichen.</h2>
                        <div className={`overflow-hidden h-min`}>
                            <textarea placeholder={"Ihre Nachricht"} rows={4}
                                      className={` textarea no-focus boxScrub`}/>
                        </div>
                        <button className={`bg-normalLightBg lg:hover:bg-lightBG w-[300px] center rounded-2xl text-6xl h-[70px] transition duration-500 ease-in-out max-lg:text-2xl max-lg:w-min max-lg:h-min max-lg:p-2`}>Senden</button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default Contact;
