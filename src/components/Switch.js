import { useState } from "react"
import { StyledSwitch } from "./styles/Switch.styled"
import { useContext, useEffect } from "react";
import { Context } from "../Context";

export default function Switch() {
    const [isToggled, setIsToggled] = useState(false);
    const { theme, setTheme } = useContext(Context)
    const onToggle = () => {
        setIsToggled(!isToggled)
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        console.log(theme)

    }, [theme])
    return (
        <StyledSwitch theme={theme}>
            <input type="checkbox" checked={isToggled} onChange={onToggle} />
            <span className="switch" />
        </StyledSwitch>
    )
}