'use client'

import {useEffect, useState} from "react";

const WriteInput = ({userWordset, officialWordset, id}: any) => {

    const [currentUserWordset, setCurrentUserWordset] = useState(userWordset)

    useEffect(() => {
        const storedData = localStorage.getItem(id);

        if (!storedData) {
            localStorage.setItem(id, JSON.stringify(userWordset));
        } else {
            const parsedData = JSON.parse(storedData);
            console.log(parsedData)

            const filteredParsedData = parsedData.filter(({ id }: any) => userWordset.some((item: any) => item.id === id));

            const idsToAdd = userWordset.filter(({ id }: any) => !parsedData.some((item: any) => item.id === id));

            const updatedParsedData = filteredParsedData.map(({ id, ...rest }: any) => ({
                id,
                ...parsedData.find((item: any) => item.id === id),
                ...rest,
            }));

            const finalParsedData = updatedParsedData.concat(idsToAdd);
            setCurrentUserWordset(finalParsedData)
            console.log(finalParsedData);
            console.log(officialWordset)// Log the updated data
            localStorage.setItem(id, JSON.stringify(finalParsedData))

            const countFalseAndWrong = currentUserWordset.filter((item: any) => !item.done && item.wrong > 0).length;
            const countDoneTrue = currentUserWordset.filter((item: any) => item.done).length;
            setCountWrong(countFalseAndWrong)
            setCountDoneTrue(countDoneTrue)
        }
    }, []);


    const [currentOfficialWordset, setCurrentOfficialWordset] = useState(officialWordset)
    const [currentWord, setCurrentWord] = useState({"id":"f5a94aa4-7f07-4a2d-94a1-8f6f2e9de85a","word":"","definition":""})
    const [visible, setVisible] = useState(false)
    const [correct, setCorrect] = useState(false)
    const [perfect, setPerfect] = useState(false)
    const [countWrong, setCountWrong] = useState(0)
    const [countDoneTrue, setCountDoneTrue] = useState(0)

    useEffect(() => {
        const initNewWord = () => {
            setCurrentWord(
                () => {
                    const notStartedWords = currentUserWordset.filter((item: any) => {
                        return item.done === false && item.wrong === 0 && item.id !== currentWord.id && item
                    });
                    const randomIndexStart = Math.floor(Math.random() * notStartedWords.length)
                    const newWord = currentOfficialWordset?.find((item: any) => {
                        return item.id === notStartedWords[randomIndexStart]?.id;
                    });
                    return newWord
                }
            )
        }
        initNewWord()
    }, []);

    const getNewWord = (event: any) => {
        event.preventDefault();
        const inputWord = event.target.elements.wordInput.value;
        event.target.elements.wordInput.readOnly = false;
        setVisible(false)
        console.log("getnewword")
        setCurrentWord(() => {
            let newWord
            const notDoneWrongWords = currentUserWordset.filter((item: any) => {
                return item.done === false && item.wrong > 0 && item.id !== currentWord.id && item
            });
            const starWords = currentUserWordset.filter((item: any) => {
                return item.star === true && item.id !== currentWord.id && item
            });
            const notStartedWords = currentUserWordset.filter((item: any) => {
                return item.done === false && item.wrong === 0 && item.id !== currentWord.id && item
            });
            console.log("notDoneWrongWords: " + JSON.stringify(notDoneWrongWords))
            console.log("notDoneWrongWords length: " + notDoneWrongWords.length)
            console.log("notStartedWords: " + JSON.stringify(notStartedWords))
            console.log("notStartedWords length: " + notStartedWords.length)
            const randomIndexStart = Math.floor(Math.random() * notStartedWords.length)
            const randomIndexDone = Math.floor(Math.random() * notDoneWrongWords.length)
            const multiplikator = 1 / 20;
            const provability =
                Math.random() <
                (notDoneWrongWords.length > 0
                    ? multiplikator * notDoneWrongWords.length
                    : 0)
            console.log("randomIndexStart: " + randomIndexStart)
            console.log("randomIndexDone: " + randomIndexStart)
            if (provability) {
                if (notDoneWrongWords.length > 0){
                    if (notDoneWrongWords === 1) {
                        newWord = currentUserWordset.filter((item: any) => {
                            return item.done === false && item.wrong > 0 && item
                        });
                        console.log("1 last: " + notDoneWrongWords[randomIndexDone])

                    } else {
                        newWord = currentOfficialWordset?.find((item: any) => {
                            return item.id === notDoneWrongWords[randomIndexDone]?.id;
                        });
                        console.log("1: " + notDoneWrongWords[randomIndexDone])
                    }
                } else {
                    newWord = currentOfficialWordset?.find((item: any) => {
                        return item.id === notStartedWords[randomIndexStart]?.id;
                    });
                    console.log("2: " + notStartedWords[randomIndexStart])

                }
            }else {
                if (notStartedWords.length > 0) {
                    newWord = currentOfficialWordset?.find((item: any) => {
                        return item.id === notStartedWords[randomIndexStart]?.id;
                    });
                    console.log("3: " + notStartedWords[randomIndexStart])
                } else {
                 console.log("new wrong word");
                 newWord = currentOfficialWordset?.find((item: any) => {
                     return item.id === notDoneWrongWords[randomIndexDone]?.id;
                 });
                 console.log(newWord)
                 if(newWord === undefined){
                     newWord = starWords?.find((item: any) => {
                         return item.id === starWords[randomIndexDone]?.id
                     })
                     console.log(starWords)
                 }
                 console.log("4: " + notDoneWrongWords[randomIndexDone])
                }
            }
            return newWord ? newWord : {id:"f5a94aa4-7f07-4a2d-94a1-8f6f2e9de85a",word:"Every word done",definition:"Every word done"}
        });
        event.target.elements.wordInput.value = "";
        setPerfect(false)
        localStorage.setItem(id, JSON.stringify(currentUserWordset))
        const countFalseAndWrong = currentUserWordset.filter((item: any) => !item.done && item.wrong > 0).length;
        const countDoneTrue = currentUserWordset.filter((item: any) => item.done).length;
        const lenght = currentUserWordset.length
        setCountWrong(countFalseAndWrong > 0 ? countFalseAndWrong * 100 / lenght : countFalseAndWrong)
        setCountDoneTrue(countDoneTrue > 0 ? countDoneTrue * 100 / lenght : countDoneTrue)
    };

    const isAnswerCloseEnough = (word: any, input: any) => {
        const maxLengthDifference = 1;
        const minLengthDifference = 1;

        const removeIgnoredCharacters = (str: any) => str.replace(/[\(\)\/]/g, '');

        const cleanWord = removeIgnoredCharacters(word);
        const cleanInput = removeIgnoredCharacters(input);

        if (Math.abs(cleanWord.length - cleanInput.length) > maxLengthDifference) {
            return false;
        }

        let differences = 0;

        for (let i = 0; i < Math.min(cleanWord.length, cleanInput.length); i++) {
            if (cleanWord[i] !== cleanInput[i]) {
                differences++;
            }

            if (differences > maxLengthDifference) {
                return false;
            }
        }

        return (
            differences <= maxLengthDifference &&
            cleanWord.length - cleanInput.length <= minLengthDifference
        );
    };


    const checkWord = (event: any) => {

        event.preventDefault();

        const inputWord = event.target.elements.wordInput.value;
        event.target.elements.wordInput.readOnly = true;

        const sanitizedCorrectAnswer = currentWord.word.replace(/[()]/g, "");
        const sanitizedInput = inputWord.replace(/[()]/g, "");

        if (isAnswerCloseEnough(sanitizedCorrectAnswer, sanitizedInput)) {
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, done: true } : word
            );
            setCorrect(true)
            setVisible(true)
            setCurrentUserWordset(updatedUserWordset)
            console.log("true")
        } else {
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, star: true,  done: false, wrong: word.wrong + 1 } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            setCorrect(false)
            setVisible(true)
            console.log("wrong")
        }

        if (currentWord.word === inputWord){
            const updatedUserWordset = currentUserWordset.map((word: any) =>
                word.id === currentWord.id ? { ...word, done: true } : word
            );
            setCurrentUserWordset(updatedUserWordset)
            setPerfect(true)
            setVisible(false)
            console.log(updatedUserWordset)
            setTimeout(() => {
                setPerfect(false)
                getNewWord(event)
            }, 500);
        }
    };

    return <form className={"bg-normalLightBg bg-opacity-40 rounded-2xl p-5 flex flex-col gap-5"} onSubmit={(e) => {visible ? getNewWord(e) : checkWord(e)}}>
        <div className={"flex justify-between gap-5"}>
            <h2 className={"text-3xl text-main"}>{currentWord.definition}</h2>
            <input type={"submit"} value={"I don't know"} />
        </div>
        <div className={"flex justify-between gap-5 text-xl text-main"}>
            <input name={"wordInput"} type={"text"} placeholder={"Enter a Word"} autoComplete={"off"} className={`min-w-[500px] w-full outline-0 focus:outline-none border-0 focus:border-none bg-opacity-40 rounded-xl h-[40px] p-4 placeholder-second ${perfect ? "bg-green-600 bg-opacity-80" :  "bg-lightBackground"} ${visible ? correct ? "bg-green-500" : "bg-red-500" : "bg-lightBackground"} no-focus normal-input bg-lightBG`} />
            <input type={"submit"} value={"Check"} />
        </div>
        <div className={`${visible ? "visible" : "hidden"} ${correct ? "text-green-500" : "text-red-500"}`}>
            {currentWord.word}
        </div>
        <div className={`w-full relative flex rounded-xl h-2 bg-zinc-600`}>
            <div className={`h-full bg-red-600 bg-opacity-80`} style={{width: countWrong + "%"}}></div>
            <div className={`h-full bg-green-600 bg-opacity-80`} style={{width: countDoneTrue + "%"}}></div>
        </div>
    </form>
}

export default WriteInput