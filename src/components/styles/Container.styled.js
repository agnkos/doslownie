import styled from "styled-components";

export const Container = styled.div`
    max-width: 800px;
    height: 100%;
    min-height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

@media (max-width: 450px) {
    max-width: 95%;
}
`