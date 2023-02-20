import styled from "styled-components";

const StatStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ProgressDivStyled = styled.div`
    width: 350px;
    height: 8px;
    border: 1px solid #b7b7a4;
    border-radius: 2px;
`

const ProgressBarStyled = styled.div`
    height: 8px;
    width: ${({ progress }) => progress || '0%'};
    background: #8ac926;
`

export {StatStyled, ProgressDivStyled, ProgressBarStyled }