// import { useState } from "react"
import { StyledSwitch } from "./styles/Switch.styled"
import { useContext, useEffect } from "react";
import { Context } from "../Context";

export default function Switch({ toggleTheme, theme, toggleColorblindMode  }) {
    // const [isToggled, setIsToggled] = useState(false);
    // const { theme, setTheme } = useContext(Context);

    // const toggleTheme = () => {
    //     // setIsToggled(!isToggled)
    //     setTheme(theme === 'dark' ? 'light' : 'dark')
    // }

    return (
        <StyledSwitch theme={theme}>
            <input type="checkbox" onChange={toggleTheme} />
            <span className="switch" />
        </StyledSwitch>
    )
}

// checked={isToggled}