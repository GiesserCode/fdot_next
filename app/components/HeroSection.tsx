'use client'
import {useState} from "react";
import {blackOpsOne} from "@/app/ui/fonts";
import Link from "next/link";
import {ArrowDownSVG} from "@/app/ui/SVG";

const HeroSection = () => {
    const [position, setPosition] = useState({x: 0, y: 0});

    const handleMouseMove = (e: React.MouseEvent) => {
        setPosition({
            x: ((e.clientX / window.innerWidth) * 2 - 1) * 20,
            y: ((e.clientY / window.innerHeight) * 2 - 1) * 20,
        });
    };

    const handleClick = () => {
        window.scrollTo({
            top: window.scrollY + 400,
            behavior: 'smooth'
        });
    }

    return (
        <section
            id="home"
            onMouseMove={handleMouseMove}
            className={`w-full h-screen min-h-min transition ease duration-700 tracking-widest selection:bg-white selection:text-black grid text-white place-items-center bg-zinc-950 overflow-hidden font-main relative`}
        >
            <div
                className={`w-4/5 max-w-screen-2xl h-4/5 flex flex-col justify-center items-center overflow-hidden`}
            >
                <h1 className={`text-9xl text-center z-20 font-second text-primary max-lg:text-6xl ${blackOpsOne.className}`}>
                    Webseite
                </h1>
                <div
                    className={`text-3xl text-white translate-y-[30%] flex flex-row items-center gap-8 z-30 max-lg:text-xl max-lg:gap-2 max-lg:translate-y-[10%]`}
                >
          <span
              className={`w-6 h-2 bg-white mr-2 max-lg:w-3 max-lg:h-1`}
          ></span>
                    <div>
                        Ihre personalisierte <br/>
                        Webseite
                    </div>
                </div>
                <div
                    className={`absolute top-1/2 left-1/2 bg-lightBG shadow-lg shadow-zinc-900 rounded-3xl -translate-x-[180%] translate-y-[-200%] w-52 h-20 flex justify-center items-center text-4xl -rotate-12 z-20
          max-lg:w-24 max-lg:h-12 max-lg:text-xl max-lg:rounded-lg`}
                    style={{
                        transform: `translate(${position.x * 0.5 - 180}%, ${
                            position.y * 0.5 - 200
                        }%) rotate(-12deg)`,
                    }}
                >
                    Ihre
                    <div
                        className={`absolute top-1/2 w-8 h-8 bg-zinc-950 rounded-full translate-y-[-50%] -left-4 max-lg:w-3 max-lg:h-3 max-lg:-left-1`}
                    ></div>
                    <div
                        className={`absolute top-1/2 w-8 h-8 bg-zinc-950 rounded-full translate-y-[-50%] -right-4 max-lg:w-3 max-lg:h-3 max-lg:-right-1`}
                    ></div>
                </div>
                <div
                    className={`absolute top-1/2 text-4xl left-1/2 shadow-lg shadow-zinc-900 translate-x-[-180%] translate-y-[40%] bg-zinc-800 w-64 h-24 rounded-[20px] flex justify-center items-center rotate-[30deg] z-20
          max-lg:w-24 max-lg:h-12 max-lg:text-xl max-lg:rounded-lg`}
                    style={{
                        transform: `translate(${position.x * 1.2 - 200}%, ${
                            position.y * 1.2 + 40
                        }%) rotate(30deg)`,
                    }}
                >
                    Einfach
                </div>
                <div
                    className={`absolute top-1/2 text-4xl left-1/2 shadow-lg shadow-zinc-900 translate-x-[-10%] translate-y-[160%] bg-neutral-700 w-56 h-28 flex justify-center items-center rotate-[-10deg] z-20
          max-lg:w-32 max-lg:h-12 max-lg:text-xl max-lg:rounded-lg`}
                    style={{
                        transform: `translate(${position.x * 0.7}%, ${
                            position.y * 0.7 + 120
                        }%) rotate(-10deg)`,
                    }}
                >
                    Qualität
                    <div
                        className={`w-10 h-10 bg-zinc-950 rounded-full absolute -top-4 -left-4 max-lg:-top-3 max-lg:-left-3 max-lg:w-6 max-lg:h-6`}
                    ></div>
                    <div
                        className={`w-10 h-10 bg-zinc-950 rounded-full absolute -top-4 -right-4 max-lg:-top-3 max-lg:-right-3 max-lg:w-6 max-lg:h-6`}
                    ></div>
                    <div
                        className={`w-10 h-10 bg-zinc-950 rounded-full absolute -bottom-4 -left-4 max-lg:-bottom-3 max-lg:-left-3 max-lg:w-6 max-lg:h-6`}
                    ></div>
                    <div
                        className={`w-10 h-10 bg-zinc-950 rounded-full absolute -bottom-4 -right-4 max-lg:-bottom-3 max-lg:-right-3 max-lg:w-6 max-lg:h-6`}
                    ></div>
                </div>
                <div
                    className={`absolute top-1/2 text-4xl left-1/2 shadow-lg shadow-zinc-900 translate-x-[190%] translate-y-[-20%] bg-neutral-500 rounded-[20px] w-40 h-32 flex justify-center items-center rotate-[10deg] z-20
          max-lg:w-16 max-lg:h-16 max-lg:text-xl max-lg:rounded-lg max-lg:hidden`}
                    style={{
                        transform: `translate(${position.x * 1.6 + 200}%, ${
                            position.y * 1.6
                        }%) rotate(10deg)`,
                    }}
                >
                    Schnell
                </div>
                <div
                    className={`absolute top-1/2 left-1/2 shadow-lg border-8 border-zinc-600 shadow-zinc-900 translate-x-[70%] translate-y-[-10%] bg-transparent rounded-[20px] w-20 h-20 flex justify-center items-center rotate-[10deg] z-20
          max-lg:hidden`}
                    style={{
                        transform: `translate(${position.x * 0.5 + 70}%, ${
                            position.y * 0.5 - 6
                        }%) rotate(10deg)`,
                    }}
                >
                    <div
                        className="absolute bg-zinc-600 rounded-[10px] w-[54px] h-[54px] flex justify-center items-center">
                        <svg
                            width="40"
                            height="40"
                            viewBox="0 0 79 102"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M69 47H10C8.89543 47 8 47.8954 8 49V92C8 93.1046 8.89543 94 10 94H69C70.1046 94 71 93.1046 71 92V49C71 47.8954 70.1046 47 69 47ZM10 39C4.47715 39 0 43.4772 0 49V92C0 97.5228 4.47715 102 10 102H69C74.5229 102 79 97.5228 79 92V49C79 43.4772 74.5229 39 69 39H10Z"
                                fill="white"
                            />
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M57 39V25C57 15.6112 49.3888 8 40 8C30.6112 8 23 15.6112 23 25V39H57ZM40 0C26.1929 0 15 11.1929 15 25V47H65V25C65 11.1929 53.8071 0 40 0Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
                <div
                    className={`absolute rounded-full top-1/2 shadow-lg shadow-zinc-900 left-1/2 translate-x-[-320%] translate-y-[-20%] bg-neutral-600 w-24 h-24 flex justify-center items-center rotate-[-10deg] z-10
          max-lg:w-12 max-lg:h-12 max-lg:rounded-lg max-lg:p-2`}
                    style={{
                        transform: `translate(${position.x * 0.3 - 320}%, ${
                            position.y * 0.3 - 30
                        }%) rotate(-10deg)`,
                    }}
                >
                    <svg width="40" height="40" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.409 0-1.779.152a2.008 2.008 0 0 0-1.09 1.083c-.094.223-.13.484-.145.863a1.615 1.615 0 0 1-.796 1.353a1.64 1.64 0 0 1-1.579.008c-.338-.178-.583-.276-.825-.308a2.026 2.026 0 0 0-1.49.396c-.318.242-.553.646-1.022 1.453c-.47.807-.704 1.21-.757 1.605c-.07.526.074 1.058.4 1.479c.148.192.357.353.68.555c.477.297.783.803.783 1.361c0 .558-.306 1.064-.782 1.36c-.324.203-.533.364-.682.556a1.99 1.99 0 0 0-.399 1.479c.053.394.287.798.757 1.605c.47.807.704 1.21 1.022 1.453c.424.323.96.465 1.49.396c.242-.032.487-.13.825-.308a1.64 1.64 0 0 1 1.58.008c.486.28.774.795.795 1.353c.015.38.051.64.145.863c.204.49.596.88 1.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2.008 2.008 0 0 0 1.09-1.083c.094-.223.13-.483.145-.863c.02-.558.309-1.074.796-1.353a1.64 1.64 0 0 1 1.579-.008c.338.178.583.276.825.308c.53.07 1.066-.073 1.49-.396c.318-.242.553-.646 1.022-1.453c.47-.807.704-1.21.757-1.605a1.99 1.99 0 0 0-.4-1.479c-.148-.192-.357-.353-.68-.555c-.477-.297-.783-.803-.783-1.361c0-.558.306-1.064.782-1.36c.324-.203.533-.364.682-.556a1.99 1.99 0 0 0 .399-1.479c-.053-.394-.287-.798-.757-1.605c-.47-.807-.704-1.21-1.022-1.453a2.026 2.026 0 0 0-1.49-.396c-.242.032-.487.13-.825.308a1.64 1.64 0 0 1-1.58-.008a1.615 1.615 0 0 1-.795-1.353c-.015-.38-.051-.64-.145-.863a2.007 2.007 0 0 0-1.09-1.083ZM12.5 15c1.67 0 3.023-1.343 3.023-3S14.169 9 12.5 9c-1.67 0-3.023 1.343-3.023 3s1.354 3 3.023 3Z"
                            clipRule="evenodd"
                        />
                    </svg>
                    <div className={`absolute h-full w-1/5 bg-zinc-950 -left-2`}></div>
                    <div className={`absolute h-full w-1/5 bg-zinc-950 -right-2`}></div>
                </div>
                <div
                    className={`absolute top-1/2 left-1/2 shadow-lg shadow-zinc-900 translate-x-[160%] translate-y-[-150%] bg-zinc-500 rounded-[20px] w-24 h-24 flex justify-center items-center rotate-[20deg] z-10
          max-lg:w-14 max-lg:h-14 max-lg:rounded-lg max-lg:p-2`}
                    style={{
                        transform: `translate(${position.x * 0.2 + 160}%, ${
                            position.y * 0.2 - 160
                        }%) rotate(20deg)`,
                    }}
                >
                    <svg width="60" height="60" viewBox="0 0 24 24">
                        <path
                            fill="currentColor"
                            d="M6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475T5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.963 2.038T19 11q1.725.2 2.863 1.488T23 15.5q0 1.875-1.313 3.188T18.5 20h-12Zm0-2h12q1.05 0 1.775-.725T21 15.5q0-1.05-.725-1.775T18.5 13H17v-2q0-2.075-1.463-3.538T12 6Q9.925 6 8.462 7.463T7 11h-.5q-1.45 0-2.475 1.025T3 14.5q0 1.45 1.025 2.475T6.5 18Zm5.5-6Z"
                        />
                    </svg>
                </div>
            </div>
            <div className={`absolute bottom-10 flex gap-5 z-30`}>
                <Link href={"#kontakt"} className={`bg-primary text-normalBG p-2 rounded-xl text-xl grid place-items-center hover:bg-normalLightBg hover:text-primary border border-primary hover:border-lightBG transition duration-500`}>Kontakt</Link>
                <div className={`border border-primary p-2 rounded-xl bg-darkBg text-xl cursor-pointer flex items-center hover:border-lightBG hover:bg-normalLightBg transition duration-500`} onClick={handleClick}>Mehr erfahren <ArrowDownSVG /></div>
            </div>
        </section>
    );
};

export default HeroSection;
