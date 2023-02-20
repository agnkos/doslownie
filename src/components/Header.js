import { useState } from "react";
import Stats from "./Stats";
import HeaderStyled from "./styles/Header.styled";
import StyledModal from "./styles/Modal.styled";

export default function Header() {
    const [showStats, setShowStats] = useState(false);

    return (
        <>
            <HeaderStyled>
                <h1><span className="colored">.</span>dosłownie</h1>
                <i className="fa-solid fa-square-poll-vertical" onClick={() => setShowStats(true)}></i>
            </HeaderStyled>
            {showStats && (
                <StyledModal>
                    <div>
                        <div onClick={() => setShowStats(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                        <Stats />
                    </div>
                </StyledModal>
            )}
        </>
    )
}