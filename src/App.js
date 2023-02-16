import Header from "./components/Header";
import Game from "./components/Game";
import GlobalStyles from "./components/styles/Global";
import { Container } from "./components/styles/Container.styled";

export default function App() {
    return (
        <Container>
            <GlobalStyles />
            <Header />
            <Game />
        </Container>
    )
}