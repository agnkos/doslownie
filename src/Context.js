import { createContext, useState, useEffect } from "react";

const Context = createContext();

function ContextProvider({ children }) {
    const [solution, setSolution] = useState(null);
    const [currentGuess, setCurrentGuess] = useState('');
    const [turn, setTurn] = useState(0);
    const [guesses, setGuesses] = useState([...Array(6)].fill({ id: '', input: '', formatted: [...Array(5).fill({ key: '', color: '' })] }).map((item, i) => ({ ...item, id: i + 1, })));
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const randomSolution = data.solutions[Math.floor(Math.random() * data.solutions.length)];
                setSolution(randomSolution.word);
            })
    }, []);

    function handleKeyup({ key }) {
        // console.log(key)
        // console.log(/^[A-Ża-ż]$/.test(key))
        // console.log(/^[A-Za-ząĄćĆęĘłŁńŃóÓśŚżŻźŹ]$/.test(key))
        if (/^[A-Za-ząĄćĆęĘłŁńŃóÓśŚżŻźŹ]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key.toLowerCase());
            }
        }
        if (key === 'Backspace') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            return;
        }
        if (key === 'Enter') {
            if (turn > 5) {
                return;
            }
            // if (guesses.includes(currentGuess)) { // niedziała
            //     console.log('juz wpisane')
            //     return;
            // }

            if (guesses.filter(item => item.input === currentGuess).length > 1) {
                console.log('juz wpisane');
                return;
            }
            if (currentGuess.length !== 5) {
                return;
            }
            // setGuesses(prev => {
            //     const updatedGuesses = prev.map((guess, i) => i === turn ? { ...guess, input: currentGuess } : guess);
            //     return updatedGuesses;
            // })
            // setTurn(prev => prev + 1);
            checkGuess();
            // setCurrentGuess('');
            //dodac slownik
            //dodać checkguesses - czy rozwiazane, koloruje
        }
    }

    function handleClick(key) {
        if (currentGuess.length < 5) {
            setCurrentGuess(prev => prev + key.toLowerCase());
            console.log(currentGuess)
        }
        if (key === 'Back') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            return;
        }
        if (key === 'Enter') {
            if (turn > 5) {
                return;
            }
            if (guesses.filter(item => item.input === currentGuess).length > 1) {
                console.log('juz wpisane');
                return;
            }
            if (currentGuess.length !== 5) {
                return;
            }
            checkGuess();
        }
    }

    function checkGuess() {
        let solutionArray = [...solution];

        // let checkedGuess = guesses[turn].formatted.map((item, i) => {
        //     if (item.key === solutionArray[i]) {
        //         solutionArray[i] = null;
        //         console.log(solutionArray)
        //         return { ...item, color: 'green' }
        //     }
        // })

        // guesses[turn].formatted.map((item, i) => {
        //     if (solutionArray.includes(item.key) && item.color !== 'green') {
        //         solutionArray[solutionArray.indexOf(item.key)] = null;
        //         return { ...item, color: 'yellow' };
        //     }
        //     else return { ...item, color: 'gray' }
        // })

        let checkedGuess = guesses[turn].formatted
        checkedGuess.forEach((item, i) => {
            if (item.key === solutionArray[i]) {
                solutionArray[i] = null;
                item.color = 'green';
            }
        });
        checkedGuess.forEach((item, i) => {
            if (solutionArray.includes(item.key) && item.color !== 'green') {
                solutionArray[solutionArray.indexOf(item.key)] = null;
                item.color = 'yellow';
            }
        })
        checkedGuess.forEach((item, i) => {
            if (item.color !== 'yellow' && item.color !== 'green') {
                item.color = 'gray'
            }
        })

        setGuesses(prev => prev.map((guess, i) => turn === i ? { ...guess, formatted: checkedGuess } : guess));

        setUsedKeys((prev) => {
            let newKeys = [{ ...prev }];
            checkedGuess.forEach((l) => {
                const currentColor = newKeys[l.key];
                if (l.color === 'green') {
                    newKeys[l.key] = 'green';
                    return;
                }
                if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow';
                    return;
                }
                if (l.color === 'grey' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.key] = 'grey';
                    return;
                }
            })
            return newKeys;
        })

        if (currentGuess === solution) {
            setIsCorrect(true);
            return;
        }
        setTurn(prev => prev + 1);
        setCurrentGuess('');
    }




    useEffect(() => {
        console.log(guesses, turn)
        console.log(usedKeys)
        // console.log(turn)
        // console.log('current guess', currentGuess, currentGuess.length)
    }, [guesses, turn, currentGuess, usedKeys]);

    useEffect(() => {
        setGuesses(prev => {
            const updatedGuesses = prev.map((guess, i) => i === turn ? { ...guess, input: currentGuess, formatted: currentGuess.split('').map((lettter) => ({ key: lettter, color: '' })) } : guess);
            return updatedGuesses;
        })
    }, [currentGuess, turn])

    return (
        <Context.Provider value={{ solution, handleKeyup, currentGuess, guesses, turn, handleClick, usedKeys }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }

