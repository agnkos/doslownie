import styled from "styled-components";

const StyledModal = styled.div`
    background: rgba(255, 255, 255, 0.7);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display:flex;
    align-items: center;
    justify-items: center;

> div {
    max-width: 400px;
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    margin: 10% auto;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
    text-align: center;
}

.solution {
    font-size: 1.25rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}

button {
    margin-top: 1em;
    background: #8ac926;
    border: 1px solid #8ac926;
    color: #eee;
    font-weight: 600;
    padding: .5em 1em;
    border-radius: 5px;
    letter-spacing: 1px;
    cursor: pointer;
}
`

export default StyledModal;