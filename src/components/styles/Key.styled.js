import styled, { keyframes } from "styled-components";

const keyppadColor = (newColor, oldColor) => keyframes`
0% {
    background-color: ${oldColor === 'green' ? '#8ac926' : oldColor === 'yellow' ? '#ffbe0b' : oldColor === 'orange' ? '#e65100' : oldColor === 'blue' ? '#2196f3' : oldColor === 'gray' ? '#b7b7a4' : ''};
    border-color: ${oldColor === 'green' ? '#8ac926' : oldColor === 'yellow' ? '#ffbe0b' : oldColor === 'orange' ? '#e65100' : oldColor === 'blue' ? '#2196f3' : oldColor === 'gray' ? '#b7b7a4' : ''};
    color: #eee;
}

100% {
    background-color: ${newColor === 'green' ? '#8ac926' : newColor === 'yellow' ? '#ffbe0b' : newColor === 'orange' ? '#e65100' : newColor === 'blue' ? '#2196f3' : '#b7b7a4'};
    border-color: ${newColor === 'green' ? '#8ac926' : newColor === 'yellow' ? '#ffbe0b' : newColor === 'orange' ? '#e65100' : newColor === 'blue' ? '#2196f3' : '#b7b7a4'};
    color: #eee;
}

`

const KeyStyled = styled.div`
    width: 2em;
    height: 2em;
    border-width: 1px;
    border-style: solid;
    border-color:${({ theme }) => theme.text};
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-weight: 600;
    cursor: pointer;

&.bigger {
    width: 3.5em;
}

&.green,
&.yellow,
&.gray {

    animation: ${({ newColor, oldColor }) => keyppadColor(newColor, oldColor)} .5s ease forwards;
    animation-delay: 1.5s;
}

@media (max-width: 330px) {
    height: 2em;
    }

@media (max-width: 450px) {
    height: 2.75em;
}
`

export default KeyStyled;

// &.green {
//     background-color: ${({ colorblindMode }) => colorblindMode ? '#e65100' : '#8ac926'};
//     border-color: ${({ colorblindMode }) => colorblindMode ? '#e65100' : '#8ac926'};
//     color: #eee;
// }
// &.yellow {
//     background-color: ${({ colorblindMode }) => colorblindMode ? '#2196f3' : ' #ffbe0b'};
//     border-color: ${({ colorblindMode }) => colorblindMode ? '#2196f3' : ' #ffbe0b'};
//     color: #eee;
// }
// &.gray {
//     background-color: #b7b7a4;
//     border-color: #b7b7a4;
//     color: #eee;
// }

// color: ${({ theme }) => theme.text};
// background-color: ${props === 'green' ? '#8ac926' : props === 'yellow' ? '#ffbe0b' : props === 'orange' ? '#e65100' : props === 'blue' ? '#2196f3' : '#b7b7a4'};
// border-color: ${props === 'green' ? '#8ac926' : props === 'yellow' ? '#ffbe0b' : props === 'orange' ? '#e65100' : props === 'blue' ? '#2196f3' : '#b7b7a4'};

// background-color: ${({ color }) => color === 'green' ? '#8ac926' : color === 'yellow' ? '#ffbe0b' : color === 'orange' ? '#e65100' : color === 'blue' ? '#2196f3' : '#b7b7a4'};
// border-color: ${({ color }) => color === 'green' ? '#8ac926' : color === 'yellow' ? '#ffbe0b' : color === 'orange' ? '#e65100' : color === 'blue' ? '#2196f3' : '#b7b7a4'};
// color: #eee;

// &.green,
// &.yellow,
// &.gray {
//     animation: ${({ color }) => keyppadColor(color)} .5s ease forwards;
//     animation-delay: 1500ms;
// }


// .setColor {
//     background-color: ${({ color }) => color === 'green' ? '#8ac926' : color === 'yellow' ? '#ffbe0b' : color === 'orange' ? '#e65100' : color === 'blue' ? '#2196f3' : color = 'gray' ? '#b7b7a4' : ''};
//     border-color: ${({ color }) => color === 'green' ? '#8ac926' : color === 'yellow' ? '#ffbe0b' : color === 'orange' ? '#e65100' : color === 'blue' ? '#2196f3' : color === 'gray' ? '#b7b7a4' : ''};
//     color: #eee;
// }

// color: ${oldColor === 'green' || oldColor === 'yellow' || oldColor === 'orange' || oldColor === 'gray' || oldColor === 'blue' ? '#eee' : ''}
// }
// color: ${({ oldColor }) => oldColor === 'green' || oldColor === 'yellow' || oldColor === 'orange' || oldColor === 'gray' || oldColor === 'blue' ? '#eee' : ''}

// color: ${newColor === 'green' || newColor === 'yellow' || newColor === 'orange' || newColor === 'gray' || newColor === 'blue' ? '#eee' : ''};
// color: #eee;