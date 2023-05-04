import styled from "styled-components";

export const StyledSwitch = styled.label`
position: relative;
margin-left: auto;
margin-right: auto;
display: flex;
align-items: center;
justify-content: space-between;
width: 50px;
height: 25px;
padding: 5px;
border-radius: 50px;
background-color: #070D0D;
background-color: ${({ theme }) => theme === 'dark' ? '#8ac926' : '#070D0D'};

input {
    position: absolute;
    display: none;
}

span {
    position: absolute;
    left: 3px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    transition: transform .15s linear;
    transform: ${({ theme }) => theme === 'dark' ? 'translateX(24px)' : 'translateX(0px)'}
}

`