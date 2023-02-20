import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Board from "./Board";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Game() {

    const { solution, handleKeyup, isSolution, turn, noGames, showModal } = useContext(Context);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyup);
        return () => window.removeEventListener('keydown', handleKeyup);
    }, [handleKeyup])

    return (
        <>
            <Board />
            <Keypad />
            {(isSolution || (!isSolution && turn === 5) || noGames || showModal) && <Modal />}
        </>
    )
}