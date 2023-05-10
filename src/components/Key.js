import { useEffect, useState } from "react";
import KeyStyled from "../components/styles/Key.styled";
import { Context } from "../Context";
import { useContext } from "react";

export default function Key({ letter }) {

    const { handleClick, usedKeys, oldKeys, setOldKeys, colorblindMode } = useContext(Context);
    const [color, setColor] = useState()

    const colorblindColors = {
        yellow: 'blue',
        green: 'orange',
        gray: 'gray',
    }

    // useEffect(() => {
    //     setTimeout(() => {
    //         setColor(
    //             colorblindMode ? colorblindColors[usedKeys[letter.toLowerCase()]] : usedKeys[letter.toLowerCase()]
    //         )
    //         setOldKeys(usedKeys)
    //     }, 1500)
    // }, [usedKeys, colorblindMode]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setOldKeys(usedKeys)
    //     }, 1500)
    // }, []);

    // useEffect(() => {
    //     console.log(color)
    // }, [color])

    //     let classcolor = oldKeys[letter.toLowerCase()];

    //     useEffect(() => {
    //         const timer = setTimeout(() =>
    //             classcolor = usedKeys[letter.toLowerCase()]
    //    , 3000);
    //         return () => clearTimeout(timer);
    //     }, []);

    //    
    return (
        <KeyStyled className={`${letter === 'Enter' || letter === 'Back' ? 'bigger' : ''}
        ${usedKeys[letter.toLowerCase()]}
        `}
            // colorblindMode={colorblindMode}
            // color={colorblindMode ? colorblindColors[usedKeys[letter.toLowerCase()]] : usedKeys[letter.toLowerCase()]}
            // color={color}
            newColor={colorblindMode ? colorblindColors[usedKeys[letter.toLowerCase()]] : usedKeys[letter.toLowerCase()]}
            oldColor={colorblindMode ? colorblindColors[oldKeys[letter.toLowerCase()]] : oldKeys[letter.toLowerCase()]}
            onClick={() => {
                handleClick(letter)
            }}>{letter}</KeyStyled>
    )
}