import { useContext } from "react";
import { Context } from "../Context";
import { StatStyled, ProgressDivStyled, ProgressBarStyled } from "./styles/Stats.styled";

export default function Stats() {

    const { stats, startGame } = useContext(Context);

    const wins = stats.filter(item => item.win === true);
    // console.log(wins)
    const turnOne = wins.filter(item => item.turn === 1).length;
    const turnTwo = wins.filter(item => item.turn === 2).length;
    const turnThree = wins.filter(item => item.turn === 3).length;
    const turnFour = wins.filter(item => item.turn === 4).length;
    const turnFive = wins.filter(item => item.turn === 5).length;
    const turnSix = wins.filter(item => item.turn === 6).length;

    return (
        <div>
            <h3>statystyki</h3>
            <div>zagrane gry: {stats.length}</div>
            <div>wygrane: {wins.length}</div>
            <div>
                <h4>dystrybucja prób:</h4>
                <StatStyled>
                    <span>#1</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnOne / wins.length * 100}%`} /></ProgressDivStyled>
                    <span>{turnOne}</span>
                </StatStyled>
                <StatStyled>
                    <span>#2</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnTwo / wins.length * 100}%`} /></ProgressDivStyled>
                    <span>{turnTwo}</span>
                </StatStyled>
                <StatStyled>
                    <span>#3</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnThree / wins.length * 100}%`} /></ProgressDivStyled>
                    <span>{turnThree}</span>
                </StatStyled>
                <StatStyled>
                    <span>#4</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnFour / wins.length * 100}%`} /></ProgressDivStyled>
                    <span>{turnFour}</span>
                </StatStyled>
                <StatStyled>
                    <span>#5</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnFive / wins.length * 100}%`} /></ProgressDivStyled>
                    <span>{turnFive}</span>
                </StatStyled>
                <StatStyled>
                    <span>#6</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnSix / wins.length * 100}%`} /></ProgressDivStyled>
                    <span>{turnSix}</span>
                </StatStyled>
            </div>
            <button onClick={() => startGame()}>Nowa gra</button>
        </div>
    )
}