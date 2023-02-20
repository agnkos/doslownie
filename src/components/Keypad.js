import Key from "./Key";
import StyledKeypad from "../components/styles/Keypad.styled";

export default function Keypad() {

    const keypad = [
        ['Ą', 'Ć', 'Ę', 'Ł', 'Ó', 'Ś', 'Ń', 'Ż', 'Ź'],
        ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
        ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
        ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Back']
    ]

    const keypadHtml = keypad.map((row, i) => <div key={i}>{row.map(key => <Key key={key} letter={key} />)}</div>)

    return (
        <StyledKeypad>
            {keypadHtml}
        </StyledKeypad>
    )
}