import { createContext, useState, useEffect } from "react";
import dictionary from "./dictionary";

const Context = createContext();

function ContextProvider({ children }) {
    const [solution, setSolution] = useState(null);
    const [solutionId, setSolutionId] = useState(null)
    const [currentGuess, setCurrentGuess] = useState('');
    const [turn, setTurn] = useState(0);
    const [guesses, setGuesses] = useState(
        [...Array(6)].fill({ id: '', input: '', formatted: [...Array(5).fill({ key: '', color: '' })] }).map((item, i) => ({ ...item, id: i + 1, }))
    )
    const [isSolution, setIsSolution] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});
    const [stats, setStats] = useState(function () {
        return JSON.parse(localStorage.getItem('wordleStats')) || []
    });
    const [newGame, setNewGame] = useState(false);
    const [noGames, setNoGames] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const filteredSolutions = data.solutions.filter(item => !stats.some(result => result.id === item.id))
                if (filteredSolutions.length === 0) {
                    setNoGames(true);
                    return;
                }
                const randomSolution = filteredSolutions[Math.floor(Math.random() * filteredSolutions.length)];
                setSolution(randomSolution.word);
                setSolutionId(randomSolution.id);
                setIsSolution(false);
                setCurrentGuess('');
                setGuesses([...Array(6)].fill({ id: '', input: '', formatted: [...Array(5).fill({ key: '', color: '' })] }).map((item, i) => ({ ...item, id: i + 1, })));
                setTurn(0);
                setUsedKeys({});

            })

    }, [newGame]);

    function handleKeyup({ key }) {
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
            if (guesses.filter(item => item.input === currentGuess).length > 1) {
                console.log('juz wpisane');
                return;
            }
            if (currentGuess.length !== 5) {
                return;
            }
            if (dictionary.includes(currentGuess.toUpperCase())) {
                checkGuess();
            } else {
                console.log('nie znaleziono słowa')
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 1000);
                return;
            }
        }
    }

    function handleClick(key) {
        if (key !== 'Enter' && key !== 'Back') {
            if (currentGuess.length < 5) {
                setCurrentGuess(prev => prev + key.toLowerCase());
            }
        }
        if (key === 'Back') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            })
            return;
        }
        if (key === 'Enter') {
            if (guesses.filter(item => item.input === currentGuess).length > 1) {
                console.log('juz wpisane');
                return;
            }
            if (currentGuess.length !== 5) {
                return;
            }
            if (dictionary.includes(currentGuess.toUpperCase())) {
                checkGuess();
            } else {
                console.log('nie znaleziono słowa');
                setShowAlert(true);
                setTimeout(() => setShowAlert(false), 1000);
                return;
            }
        }
    }

    function checkGuess() {
        let solutionArray = [...solution];

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
            let newKeys = { ...prev };
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
                if (l.color === 'gray' && currentColor !== 'green' && currentColor !== 'yellow') {
                    newKeys[l.key] = 'gray';
                    return;
                }
            })
            return newKeys;
        })


        if (currentGuess === solution) {
            setIsSolution(true);
            setStats(prev => {
                return [...prev, { id: solutionId, turn: turn + 1, win: true }]
            });
            setNewGame(false);
            setTimeout(() => setShowModal(true), 2000);
            return;
        }

        if (turn === 6 && currentGuess !== solution) {
            setIsSolution(false);
            setStats(prev => {
                return [...prev, { id: solutionId, turn: turn + 1, win: false }]
            });
            setNewGame(false);
            setTimeout(() => setShowModal(true), 2000);
            return;
        }
        setTurn(prev => prev + 1);
        setCurrentGuess('');

    }

    useEffect(() => {
        setGuesses(prev => {
            const updatedGuesses = prev.map((guess, i) => i === turn ? { ...guess, input: currentGuess, formatted: currentGuess.split('').map((lettter) => ({ key: lettter, color: '' })) } : guess);
            return updatedGuesses;
        })
    }, [currentGuess, turn]);

    useEffect(() => {
        localStorage.setItem('wordleStats', JSON.stringify(stats));
    }, [stats]);

    return (
        <Context.Provider value={{ solution, handleKeyup, currentGuess, guesses, turn, handleClick, usedKeys, isSolution, setNewGame, noGames, showAlert, stats, showModal, setShowModal }}>
            {children}
        </Context.Provider>
    )
}

export { ContextProvider, Context }

