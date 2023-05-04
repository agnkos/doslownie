import { useContext } from "react";
import { Context } from "../Context";
import StyledTile from "./styles/Tile.styled";

export default function Tile({ letter, color, id, tileNum }) {

    const { turn, currentGuess, colorblindMode } = useContext(Context);

    const colorblindColors = {
        yellow: 'blue',
        green: 'orange',
        gray: 'gray',
    }

    // const colorDisplayed = colorblindMode ? colorblindColors.color : color;
    // console.log(colorblindMode)
    // console.log(colorblindColors.yellow)
    // console.log(colorblindColors[color])

    return (
        <StyledTile className={`${color || ''} ${id === turn + 1 && tileNum === currentGuess.length - 1 ? 'current' : ''}`} color={colorblindMode ? colorblindColors[color] : color}>{letter || ''}</StyledTile>
    )
}