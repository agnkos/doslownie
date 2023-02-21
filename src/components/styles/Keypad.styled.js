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

@media (max-width: 450px) {
    > div {
        gap: .25em;
    }

    gap: .4em;
}
`

export default StyledKeypad;