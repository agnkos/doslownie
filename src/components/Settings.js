import { useContext } from "react";
import { Context } from "../Context";
import StyledModal from "./styles/Modal.styled";
import { StyledSwitch } from "./styles/Switch.styled";



export default function Settings() {
    const { setSettings, theme, setTheme, colorblindMode, setColorblindMode } = useContext(Context);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    const toggleColorblindMode = () => {
        setColorblindMode(!colorblindMode);
    }

    return (
        <StyledModal>
            <div>
                <div onClick={() => setSettings(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                <h3>Ustawienia</h3>
                <h4>Dark mode</h4>
                <StyledSwitch theme={theme}>
                    <input type="checkbox" onChange={toggleTheme} />
                    <span />
                </StyledSwitch>
                <h4>Tryb dla daltonistów</h4>
                <StyledSwitch colorblindMode={colorblindMode}>
                    <input type="checkbox" onChange={toggleColorblindMode} />
                    <span />
                </StyledSwitch>
            </div>
        </StyledModal>
    )
}