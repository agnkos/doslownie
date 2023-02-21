import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Board from "./Board";
import Keypad from "./Keypad";
import Modal from "./Modal";
import Stats from "./Stats";
import StyledModal from "./styles/Modal.styled";

export default function Game() {

    const { handleKeyup, isSolution, turn, noGames, showAlert, showModal, setShowStats, showStats } = useContext(Context);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyup);
        return () => window.removeEventListener('keydown', handleKeyup);
    }, [handleKeyup]);

    return (
        <>
            <Board />
            <Keypad />
            {((isSolution && showModal) || ((!isSolution && turn === 6) && showModal) || noGames || showAlert) && <Modal />}
            {showStats && (
                <StyledModal>
                    <div>
                        <div onClick={() => setShowStats(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                        <Stats />
                    </div>
                </StyledModal>
            )}
        </>
    )
}