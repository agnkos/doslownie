import styled from "styled-components";

const HeaderStyled = styled.div`
    width: 100%;
    max-width: 400px;
    display:  grid;
    grid-template-columns: 1fr auto;
    align-items:center;
    justify-items: center;

h1 {
    margin-left: 28px;
}

.colored {
    color: #8ac926;
}

.fa-square-poll-vertical {
    font-size: 2rem;
    color: #b7b7a4;
    cursor: pointer;
    transition: color 500ms;
}

.fa-square-poll-vertical:hover {
    color: #8ac926;
}

@media (max-width: 330px) {
   h1 {
    font-size: 1.75rem;
    margin: .5em;
   }
}
`

export default HeaderStyled;
