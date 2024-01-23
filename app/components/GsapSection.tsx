/*'use client'
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {useEffect} from 'react'
import Split from 'split-type'

const GsapSection = () => {
    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const textElements = document.querySelectorAll('.text');
        const appearElements = document.querySelectorAll('.appear');
        const appearTitleElements = document.querySelectorAll('.appearTitle');

        textElements.forEach((element) => {
            //const split = new Split(element, { types: 'lines, words, chars' });
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
    }, []);
};

export default GsapSection;*/
