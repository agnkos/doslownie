import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Board from "./Board";
import Keypad from "./Keypad";

export default function Game() {

    const { solution, handleKeyup} = useContext(Context);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyup);
        return () => window.removeEventListener('keydown', handleKeyup);
    }, [handleKeyup])

    return (
        <>
            <p>rozwiązanie: {solution}</p>
            <Board />
            <Keypad />
        </>
    )
}