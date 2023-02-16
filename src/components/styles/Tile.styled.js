import styled, { keyframes } from "styled-components";

const flip = (props) => keyframes`
0% {
    transform: rotateX(0);
    background: #fff;
    border-color: #333;
  }

  45% {
    transform: rotateX(90deg);
    background: #fff;
    border-color: #333;
  }

  55% {
    transform: rotateX(90deg);
    background-color: ${props === 'green' ? '#8ac926' : props === 'yellow' ? '#f3de2c' : '#b7b7a4'};
    border-color: ${props === 'green' ? '#8ac926' : props === 'yellow' ? '#f3de2c' : '#b7b7a4'};
    color: #eee;
  }

  100% {
    transform: rotateX(0);
    background-color:${props === 'green' ? '#8ac926' : props === 'yellow' ? '#f3de2c' : '#b7b7a4'};
    border-color:${props === 'green' ? '#8ac926' : props === 'yellow' ? '#f3de2c' : '#b7b7a4'};
    color: #eee;
  }
`
const bounce = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
`

const StyledTile = styled.div`
height: 3em;
width: 3em;
display: flex;
align-items: center;
justify-content: center;
border: 1px solid #b7b7a4;
padding: .25em;
border-radius: 5px;
font-weight: 700;
text-transform: uppercase;

&.current {
  animation: ${bounce} .2s ease-in-out forwards;
  animation-delay: 0;
}

&.green,
&.yellow,
&.gray  { 
  animation: ${({ color }) => flip(color)} .5s ease forwards;
}

}

`
export default StyledTile;
