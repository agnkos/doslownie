import { useContext} from "react";
import { Context } from "../Context";
import HeaderStyled from "./styles/Header.styled";

export default function Header() {
    const { setShowStats } = useContext(Context);

    return (
        <>
            <HeaderStyled>
                <h1><span className="colored">.</span>dosłownie</h1>
                <i className="fa-solid fa-square-poll-vertical" onClick={() => setShowStats(true)}></i>
            </HeaderStyled>
        </>
    )
}