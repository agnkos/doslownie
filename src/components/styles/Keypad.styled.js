import styled from "styled-components";

const StyledKeypad = styled.div`
display: flex;
width: 100%;
flex-direction: column;
gap: .5em;
margin: 1em;
> div {
    display: flex;
    flex-direction: row;
    gap: .5em;
    justify-content: center;
}
`

export default StyledKeypad;