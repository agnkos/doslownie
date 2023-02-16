import { useContext } from "react";
import { Context } from "../Context";
import Row from "./Row";

export default function Board() {
    const { guesses} = useContext(Context);

    const boardHtml = guesses.map((guess, i) => <Row key={guess.id} guess={guess.formatted} id={guess.id} />)

    return (
        <div>
            {boardHtml}
        </div>
    )
}
