import Header from "./components/Header";
import Game from "./components/Game";
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./components/styles/Global";
import { lightTheme, darkTheme } from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";
import { useContext } from "react";
import { Context } from "./Context";

export default function App() {
    const {theme} = useContext(Context);
    const isDarkTheme = theme === "dark";
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Container>
                <GlobalStyles />
                <Header />
                <Game />
            </Container>
        </ThemeProvider>
    )
}