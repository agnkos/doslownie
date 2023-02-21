import StyledModal from "./styles/Modal.styled";
import { useContext} from "react";
import { Context } from "../Context";
import Stats from "./Stats";

export default function Modal() {
    const { solution, isSolution, turn, noGames, showAlert, showModal, setShowModal, startGame } = useContext(Context);

    // function getModal(e) {
    //     if (e.key === 'Enter') {
    //         setNewGame(true);
    //     }
    // }

    // useEffect(() => {
    //     if (showModal) {
    //         window.addEventListener('keydown', getModal)
    //     }
    //     return () => window.removeEventListener('keydown', getModal);
    // }, [showModal])

    return (
        <StyledModal>
            {(isSolution && showModal) && (
                <div>
                    <div onClick={() => setShowModal(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                    <p className="solution">{solution}</p>
                    <h2>Gratulacje!</h2>
                    <p>Wygrana w {turn + 1} próbie.</p>
                    <Stats />
                    {/* <button onClick={() => startGame()}>New Game</button> */}
                </div>
            )}
            {((!isSolution && turn === 6) && showModal) && (
                <div>
                    <div onClick={() => setShowModal(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                    <p className="solution">{solution}</p>
                    <h2>Spróbuj jeszcze raz!</h2>
                    <Stats />
                    {/* <button onClick={() => startGame()}>New Game</button> */}
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