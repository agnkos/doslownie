import { useContext } from "react";
import { Context } from "../Context";
import StyledModal from "./styles/Modal.styled";
import Switch from "./Switch";
import { useEffect } from "react";

export default function Settings() {
    const { setSettings } = useContext(Context)

    return (
        <StyledModal>
            <div>
                <div onClick={() => setSettings(false)}><i className="fa-solid fa-circle-xmark"></i></div>
                <h3>Ustawienia</h3>
                <h4>Dark mode</h4>
                <Switch />
                <h4>Tryb dla daltonistów</h4>
            </div>
        </StyledModal>
    )
}