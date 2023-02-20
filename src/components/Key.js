import KeyStyled from "../components/styles/Key.styled";
import { Context } from "../Context";
import { useContext } from "react";

export default function Key({ letter }) {

    const { handleClick, usedKeys } = useContext(Context);

    return (
        <KeyStyled className={`${letter === 'Enter' || letter === 'Back' ? 'bigger' : ''}
        ${usedKeys[letter.toLowerCase()]}`}
            onClick={() => {
                handleClick(letter)
            }}>{letter}</KeyStyled>
    )
}