import { useContext } from "react";
import { Context } from "../Context";
import StyledTile from "./styles/Tile.styled";

export default function Tile({ letter, color, id, tileNum }) {

    const { turn, currentGuess } = useContext(Context);

    return (
        <StyledTile className={`${color || ''}${id === turn + 1 && tileNum === currentGuess.length - 1 ? 'current' : ''}`} color={color}>{letter || ''}</StyledTile>
    )
}