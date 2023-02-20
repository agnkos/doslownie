import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Board from "./Board";
import Keypad from "./Keypad";
import Modal from "./Modal";

export default function Game() {

    const { handleKeyup, isSolution, turn, noGames, showAlert, showModal } = useContext(Context);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyup);
        return () => window.removeEventListener('keydown', handleKeyup);
    }, [handleKeyup]);

    return (
        <>
            <Board />
            <Keypad />
            {((isSolution && showModal) || ((!isSolution && turn === 6) && showModal) || noGames || showAlert) && <Modal />}
        </>
    )
}