import StyledModal from "./styles/Modal.styled";
import { useContext, useEffect } from "react";
import { Context } from "../Context";
import Stats from "./Stats";

export default function Modal() {
    const { solution, isSolution, turn, setNewGame, noGames, showAlert, showModal, setShowModal } = useContext(Context);

    useEffect(() => {
        if (showModal) {
            window.addEventListener('keypress', function (e) {
                if (e.key === 'Enter') {
                    setNewGame(true);
                }
            });
        }
    }, [showModal])

    return (
        <StyledModal>
            {(isSolution && showModal) && (
                <div>
                    <div onClick={() => setShowModal(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                    <p className="solution">{solution}</p>
                    <h2>Gratulacje!</h2>
                    <p>Wygrana w {turn + 1} próbie.</p>
                    <Stats />
                    <button onClick={() => setNewGame(true)}>New Game</button>
                </div>
            )}
            {((!isSolution && turn === 6) && showModal) && (
                <div>
                    <div onClick={() => setShowModal(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                    <p className="solution">{solution}</p>
                    <h2>Spróbuj jeszcze raz!</h2>
                    <Stats />
                    <button onClick={() => setNewGame(true)}>New Game</button>
                </div>
            )}
            {noGames && (
                <div>
                    <h2>Zagrałeś już wszystkie gry!</h2>
                    <Stats />
                </div>
            )}
            {showAlert && (
                <div>
                    <h2>Nie znaleziono słowa w bazie</h2>
                </div>
            )}
        </StyledModal>
    )
}