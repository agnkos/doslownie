import styled from "styled-components";

const KeyStyled = styled.div`
    width: 2em;
    height: 2em;
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;

&.bigger {
    width: 3.5em;
}

&.green {
    background-color: #8ac926;
    border-color: #8ac926;
    color: #eee;
} 
&.yellow {
    background-color: #ffbe0b;
    border-color: #ffbe0b;
    color: #eee;
} 
&.gray {
    background-color: #b7b7a4;
    border-color: #b7b7a4;
    color: #eee;
} 
`

export default KeyStyled;