'use client'

import {useState} from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const LearnInput = ({userWordset, officialWordset}: any) => {
    const [currentUserWordset, setCurrentUserWordset] = useState(userWordset.words)
    const [currentOfficialWordset, setCurrentOfficialWordset] = useState(officialWordset.words)
    const [currentWord, setCurrentWord] = useState({"id":"f5a94aa4-7f07-4a2d-94a1-8f6f2e9de85a","word":"city","definition":"ville"})
    const [visible, setVisible] = useState(false)

    console.log(currentUserWordset)
    console.log(currentOfficialWordset)

    const getNewWord = () => {
        setVisible(false)
        console.log("getnewword")
        setCurrentWord(() => {
            const wrong = currentUserWordset.find((item: any) => {
                return item.done === false;
            });
            console.log("all wrong Items: " + JSON.stringify(wrong))
            const newWord = currentOfficialWordset?.find((item: any) => {
                return item.id === wrong?.id;
            });
            console.log("all wrong Items: " + JSON.stringify(newWord))
            return newWord ? newWord : {id:"f5a94aa4-7f07-4a2d-94a1-8f6f2e9de85a",word:"city",definition:"Every word done"}
        });
    };

    const isAnswerCloseEnough = (word: any, input: any) => {
        const maxLengthDifference = 1;
        const minLengthDifference = 1;

        if (Math.abs(word.length - input.length) > maxLengthDifference) {
            return false;
        }

        const wordArray = word.split("");
        const inputArray = input.split("");

        let differences = 0;

        for (let i = 0; i < Math.min(wordArray.length, inputArray.length); i++) {
            // Ignore characters within parentheses
            if (wordArray[i] === "(" || wordArray[i] === ")") {
                continue;
            }

            if (wordArray[i] !== inputArray[i]) {
                differences++;
            }

            if (differences > maxLengthDifference) {
                return false;
            }
        }

        return (
            differences <= maxLengthDifference &&
            word.length - input.length <= minLengthDifference
        );
    }

    const checkWord = (event: any) => {

        event.preventDefault();

        const inputWord = event.target.elements.wordInput.value;

        const sanitizedCorrectAnswer = currentWord.word.replace(/[()]/g, "");
        const sanitizedInput = inputWord.replace(/[()]/g, "");

        if (isAnswerCloseEnough(sanitizedCorrectAnswer, sanitizedInput)) {
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, done: true } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            console.log("true")
        } else {
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, wrong: word.wrong ++ } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            console.log("wrong")
        }

        if (currentWord.word === inputWord){
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, done: true } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            console.log(updatedUserWordset)
        }
        setVisible(true)
    };

    return <form className={"bg-transBackground bg-opacity-40 rounded-2xl p-5 flex flex-col gap-5"} onSubmit={(e) => {visible ? getNewWord() : checkWord(e)}}>
        <div className={"flex justify-between gap-5"}>
            <h2 className={"text-3xl text-main"}>{currentWord.definition}</h2>
            <input type={"submit"} value={"I don't know"} />
        </div>
        <div className={"flex justify-between gap-5 text-xl text-main"}>
            <input name={"wordInput"} type={"text"} placeholder={"Enter a Word"} autoComplete={"off"} className={"min-w-[500px] outline-0 focus:outline-none border-0 focus:border-none bg-lightBackground bg-opacity-40 rounded-xl h-[40px] p-4 placeholder-second"} />
            <input type={"submit"} value={"Check"} />
        </div>
        <div className={`${visible ? "visible" : "hidden"}`}>
            {currentWord.word}
        </div>
    </form>
}

export default LearnInput