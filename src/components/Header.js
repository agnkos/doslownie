import { useContext } from "react";
import { Context } from "../Context";
import HeaderStyled from "./styles/Header.styled";

export default function Header() {
    const { setShowStats,setSettings } = useContext(Context);

    return (
        <>
            <HeaderStyled>
                <i className="fa-solid fa-gear" onClick={() => setSettings(true)}></i>
                <h1><span className="colored">.</span>dosłownie</h1>
                <i className="fa-solid fa-square-poll-vertical" onClick={() => setShowStats(true)}></i>
            </HeaderStyled>
        </>
    )
}