import KeyStyled from "../components/styles/Key.styled";
import { Context } from "../Context";
import { useContext } from "react";

export default function Key({ letter }) {

    const { handleClick, usedKeys, colorblindMode } = useContext(Context);



    return (
        <KeyStyled className={`${letter === 'Enter' || letter === 'Back' ? 'bigger' : ''}
        ${usedKeys[letter.toLowerCase()]}`}
            colorblindMode={colorblindMode}
            onClick={() => {
                handleClick(letter)
            }}>{letter}</KeyStyled>
    )
}