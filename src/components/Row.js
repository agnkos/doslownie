import Tile from "./Tile";
import StyledRow from "./styles/Row.styled";
import { useContext } from "react";
import { Context } from "../Context";

export default function Row({ guess, id }) {

    const { currentGuess } = useContext(Context);

    if (guess.length === 5) {
        return (
            <StyledRow >{guess.map((item, i) => <Tile letter={item.key} color={item.color} key={i} id={id} tileNum={i} currentGuess={currentGuess} />)}</StyledRow>
        )
    }

    if (guess.length < 5) {
        return (
            <StyledRow >{guess.map((item, i) => <Tile letter={item.key} color={item.color} key={i} id={id} tileNum={i} currentGuess={currentGuess} />)}
                {[...Array(5 - guess.length)].map((item, i) => {
                    return <Tile key={i} />
                })}</StyledRow>
        )
    }

    return (
        <StyledRow>{[1, 2, 3, 4, 5].map((item, i) => <Tile key={i} />)}</StyledRow>
    )
}
