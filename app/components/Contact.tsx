'use client'
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import {useEffect, useState} from 'react';
import Link from "next/link";
import {blackOpsOne} from "@/app/ui/fonts";
import {LockSVG, MailSVG} from "@/app/ui/SVG";
import Split from "split-type";
import {sendContent} from '@/app/actions'

const ContactPage = () => {

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            const textElements = document.querySelectorAll('.text');
            const appearElements = document.querySelectorAll('.appear');
            const appearTitleElements = document.querySelectorAll('.appearTitle');

            textElements.forEach((element) => {
                //const split = new Split(element, { types: 'lines, words, chars' });
                // @ts-ignore
                const split = new Split(element, {types: 'lines, words, chars'});

                gsap.to(element.querySelectorAll('.char'), {
                    scrollTrigger: element,
                    y: 0,
                    stagger: 0.02,
                    delay: 0.05,
                    duration: 0.1,
                    opacity: 1,
                    ease: "back.out"
                });
            });

            appearElements.forEach((element) => {
                //const split = new Split({ target: element,  types: 'lines, words, chars' });
                // @ts-ignore
                const split = new Split(element, {types: 'lines, words, chars'});
                const chars = element.querySelectorAll('.char');

                gsap.to(chars, {
                    scrollTrigger: element,
                    opacity: 1,
                    stagger: 0.02,
                    delay: 1,
                    duration: 0.1,
                });
            });

            appearTitleElements.forEach((element) => {
                //const split = new Split({ target: element,  types: 'lines, words, chars' });
                // @ts-ignore
                const split = new Split(element, {types: 'lines, words, chars'});
                const chars = element.querySelectorAll('.char');
                const speed = parseInt(element.id)

                gsap.to(chars, {
                    scrollTrigger: element,
                    opacity: 1,
                    stagger: 0.3,
                    delay: 1,
                    duration: 0.1,
                });
            });

            const rightElements = document.querySelectorAll('.right');
            const leftElements = document.querySelectorAll('.left');
            const bottomElements = document.querySelectorAll('.bottom');
            const topElements = document.querySelectorAll('.top');

            rightElements.forEach((element) => {
                gsap.fromTo(element, {x: "110%"}, {
                    scrollTrigger: element,
                    x: 0,
                    duration: 1.2,
                    opacity: 1,
                });
            });
            leftElements.forEach((element) => {
                gsap.fromTo(element, {x: "-110%"}, {
                    scrollTrigger: element,
                    x: 0,
                    duration: 2,
                    opacity: 1,
                })
            })
            bottomElements.forEach((element) => {
                gsap.fromTo(element, {y: "115px"}, {
                    scrollTrigger: element,
                    y: 0,
                    duration: 0.5,
                    opacity: 1,
                })
            })
            topElements.forEach((element) => {
                gsap.fromTo(element, {y: "-115px"}, {
                    scrollTrigger: element,
                    y: 0,
                    duration: 2,
                    opacity: 1,
                })
            })
            gsap.fromTo(".shuffeledUp", {y: "100%"}, {
                y: 0,
                duration: 1,
                scrollTrigger: ".shuffeledUp",
                stagger: 0.2,
            })
            //ScrollTrigger.defaults({markers: {startColor: "white", endColor: "white"}});

            const container = document.querySelector('.container');
            const sections = gsap.utils.toArray('.section-horizontally');
            const windowWidth = (window.innerWidth < 1024 ? window.innerWidth : 3000)

            let scrollTween = gsap.to(sections, {
                x: () => -(container!.scrollWidth - window.innerWidth),
                ease: 'none',
                scrollTrigger: {
                    trigger: container,
                    scrub: 1,
                    end: `+=${windowWidth}`,
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
                // @ts-ignore
<<<<<<< HEAD
                const split = new Split(element, { types: 'lines, words, chars' });
=======
                const split = new Split(element, {types: 'lines, words, chars'});
>>>>>>> 965915d56d414cfbd6e6c1e1858d5cc1a5987b6d
                const chars = element.querySelectorAll('.char');

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
                        onEnter: () => {
                            (element as HTMLInputElement).focus();
                        },
                    },
                });
            });
        });
        const textElements = document.querySelectorAll('.text');
        const appearElements = document.querySelectorAll('.appear');
        const appearTitleElements = document.querySelectorAll('.appearTitle');

        textElements.forEach((element) => {
            //const split = new Split(element, { types: 'lines, words, chars' });
            // @ts-ignore
            const split = new Split(element, { types: 'lines, words, chars' });

            gsap.to(element.querySelectorAll('.char'), {
                scrollTrigger: element,
                y: 0,
                stagger: 0.02,
                delay: 0.05,
                duration: 0.1,
                opacity: 1,
                ease: "back.out"
            });
        });

        appearElements.forEach((element) => {
            //const split = new Split({ target: element,  types: 'lines, words, chars' });
            // @ts-ignore
            const split = new Split(element, { types: 'lines, words, chars' });
            const chars = element.querySelectorAll('.char');

            gsap.to(chars, {
                scrollTrigger: element,
                opacity: 1,
                stagger: 0.02,
                delay: 1,
                duration: 0.1,
            });
        });

        appearTitleElements.forEach((element) => {
            //const split = new Split({ target: element,  types: 'lines, words, chars' });
            // @ts-ignore
            const split = new Split(element, { types: 'lines, words, chars' });
            const chars = element.querySelectorAll('.char');
            const speed = parseInt(element.id)

            gsap.to(chars, {
                scrollTrigger: element,
                opacity: 1,
                stagger: 0.3,
                delay: 1,
                duration: 0.1,
            });
        });

        const rightElements = document.querySelectorAll('.right');
        const leftElements = document.querySelectorAll('.left');
        const bottomElements = document.querySelectorAll('.bottom');
        const topElements = document.querySelectorAll('.top');

        rightElements.forEach((element) => {
            gsap.fromTo(element, { x: "110%" }, {
                scrollTrigger: element,
                x: 0,
                duration: 1.2,
                opacity: 1,
            });
        });
        leftElements.forEach((element) => {
            gsap.fromTo(element,{x: "-110%" }, {
                scrollTrigger: element,
                x: 0,
                duration: 2,
                opacity: 1,
            })
        })
        bottomElements.forEach((element) => {
            gsap.fromTo(element,{y: "115px" }, {
                scrollTrigger: element,
                y: 0,
                duration: 0.5,
                opacity: 1,
            })
        })
        topElements.forEach((element) => {
            gsap.fromTo(element,{y: "-115px" }, {
                scrollTrigger: element,
                y: 0,
                duration: 2,
                opacity: 1,
            })
        })
        gsap.fromTo(".shuffeledUp", {y: "100%"}, {
            y: 0,
            duration: 1,
            scrollTrigger: ".shuffeledUp",
            stagger: 0.2,})
        return () => ctx.revert();
    }, []);

    return (
        <div id={"kontakt"} className="wrapper overflow-x-hidden relative selection:bg-lightBG">
            <div className="flex container max-lg:hidden">
                <section className="section-horizontally w-screen center flex justify-evenly">
                    <div className={`w-1/2 p-1 flex justify-center max-lg:w-full`}>
                        <div className={`max-w-[600px] flex flex-col gap-5 max-lg:max-w-full`}>
                            <h2 className={`${blackOpsOne.className} antialiased text-primary text-6xl text max-lg:text-4xl`}>
                                Lass uns über ihr Projekt sprechen
                            </h2>
                            <p className={`text-2xl text-secondary text max-lg:text-base`}>
                                Scrollen Sie, um beeindruckende Projekte zu realisieren.
                            </p>
                            <div className={`overflow-hidden py-2 pr-2`}>
                                <Link href={"mailto:info.fdot@gmail.com"}
                                      className={`bg-normalBG rounded-2xl border border-lightBG p-5 gap-5 flex items-center bottom`}>
                                    <MailSVG/>
                                    <div className={`flex flex-col`}>
                                        <p className={`text-xl text-primary max-lg:text-base`}>
                                            Mailen sie mir
                                        </p>
                                        <p className={`text-secondary text-xl max-lg:text-base`}>
                                            info.fdot@gmail.com
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
                <Form/>
            </div>
        </div>
    );
};

/*function Form() {
    const initValues = {name: "", contact: "", message: ""}
    const initState = {values: initValues}
    const [state, setState] = useState(initState)
    const [touched, setTouched] = useState({
        message: false,
        contact: false,
        name: false
    })

    // @ts-ignore
    const {values, isLoading} = state

    const onBlur = ({target}: any) => setTouched((prev) => ({
        ...prev,
        [target.name]:true
    }))

    const handleChange = ({target}: any) => {
        setState((prev) => ({
            ...prev,
                values: {
                ...prev.values,
                    [target.name]: target.value,
            }
        }))
    }

    const onSubmit = async () => {
        setState((prev) => ({
            ...prev,
            isLoading:true
        }))
        await sendContactForm(state.values)
    }

    return <form className={`gap-5 ${blackOpsOne.className} antialiased`}>
        <FormControl isRequired className={`overflow-hidden h-min`} isInvalid={!values.name && touched.name}>
            <Input name={"name"}
                   type="text"
                   placeholder="Ihr Name"
                   className={` input w-[7ch] no-focus boxScrub`}
                   errorBorderColor={"red.300"}
                   value={values.name}
                   onChange={handleChange}
                   onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired className={`overflow-hidden h-min`} isInvalid={!values.contact && touched.contact}>
            <Input name={"contact"}
                   type="text"
                   placeholder="Ihr Kontakt"
                   className={` input w-[9ch] no-focus boxScrub`}
                   errorBorderColor={"red.300"}
                   value={values.contact}
                   onChange={handleChange}
                   onBlur={onBlur}
            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <FormControl isRequired className={`overflow-hidden h-min`} isInvalid={!values.message && touched.message}>
                            <Textarea placeholder={"Ihre Nachricht"} rows={4} name={"message"}
                                      className={` textarea no-focus boxScrub`}
                                      errorBorderColor={"red.300"}
                                      value={values.message}
                                      onChange={handleChange}
                                      onBlur={onBlur}
                            />
            <FormErrorMessage>Required</FormErrorMessage>
        </FormControl>
        <Button disabled={!values.name || !values.contact ||!values.message} onClick={onSubmit} isLoading={isLoading}
            className={`bg-normalLightBg lg:hover:bg-lightBG w-[300px] center rounded-2xl text-6xl h-[70px] transition duration-500 ease-in-out max-lg:text-2xl max-lg:w-min max-lg:h-min max-lg:p-2`}>Senden
        </Button>
    </form>
}*/

function Form() {

    const [submitted, setSubmittet] = useState(false)
    const [filled, setFilled] = useState({name: true, contact: true, message: true})
    const [filledReal, setFilledReal] = useState({name: false, contact: false, message: false})

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFilled((prevFilled) => ({ ...prevFilled, [name]: value !== "" }));
        setFilledReal((prevFilledReal) => ({ ...prevFilledReal, [name]: value !== "" }));
    };

    const handleSubmit = () => {
        setSubmittet(true)
    }

    return <section className="section-horizontally w-min flex items-center">
        <div
            className={`absolute flex gap-2 text-primary transition duration-500 ease-in-out right-10 bottom-10 rounded-xl text-xl bg-green-600 p-2 ${submitted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}>
            <svg
                className="h-6 w-5 text-primary"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                />
            </svg>
            Daten wurden versendet
        </div>
        <div className={`absolute flex gap-2 text-primary transition duration-500 ease-in-out right-10 bottom-10 rounded-xl text-xl bg-red-600 p-2 ${submitted && Object.values(filledReal).some((value) => !value) ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"}`}>
            Füllen Sie die Felder aus
        </div>
        <form className={`flex gap-5 ${blackOpsOne.className} antialiased`} action={sendContent}
              onSubmit={handleSubmit}>
            <h2 className={` input-text textScrub`}>Hallo Florian, ich
                bin</h2>
            <div className={`overflow-hidden h-min`}>
                <input
                    type="text"
                    placeholder="Ihr Name" readOnly={submitted} onBlur={(e) => handleChange(e)} name={"name"} autoComplete={"off"}
                    className={` input w-[7ch] no-focus boxScrub ${filled.name || "border border-red-600 "}`}
                />
                <p className={`absolute text-lg text-red-600 w-[200%] ${filled.name ? "hidden" : "visible"}`}>Füllen Sie dieses Feld aus</p>
            </div>
            <h2 className={` input-text textScrub`}>. Du kannst mich
                über </h2>
            <div className={`overflow-hidden h-min`}>
                <input
                    type="text" name={"contact"} autoComplete={"off"}
                    placeholder="Ihr Kontakt" onBlur={(e) => handleChange(e)} readOnly={submitted}
                    className={` input w-[9ch] no-focus boxScrub ${filled.contact || "border border-red-600"}`}
                />
                <p className={`absolute text-lg text-red-600 w-[200%] ${filled.contact ? "hidden" : "visible"}`}>Füllen Sie dieses Feld aus</p>
            </div>
            <h2 className={` input-text textScrub`}> erreichen.</h2>
            <div className={`overflow-hidden h-min`}>
                            <textarea placeholder={"Ihre Nachricht"} name={"message"} autoComplete={"off"} rows={4}
                                      onBlur={(e) => handleChange(e)} readOnly={submitted}
                                      className={` textarea no-focus boxScrub ${filled.message || "border border-red-600"}`}/>
                <p className={`absolute text-lg text-red-600 ${filled.message ? "hidden" : "visible"}`}>Füllen Sie dieses Feld aus</p>
            </div>
            <input type={"submit"} disabled={submitted || Object.values(filledReal).some((value) => !value)}
                   className={`bg-normalLightBg lg:hover:bg-lightBG w-[300px] center rounded-2xl text-6xl h-[70px] transition duration-500 ease-in-out max-lg:text-2xl max-lg:w-min max-lg:h-min max-lg:p-2 disabled:text-secondary disabled:bg-normalBG disabled:cursor-no-drop`}
                   value={submitted ? "Fertig" : "Senden"}></input>
        </form>
    </section>
}

// @ts-ignore
export default ContactPage;