import { useContext } from "react";
import { Context } from "../Context";
import { StatStyled, ProgressDivStyled, ProgressBarStyled } from "./styles/Stats.styled";

export default function Stats() {

    const { stats } = useContext(Context);

    const wins = stats.filter(item => item.win === true).length;
    const turnOne = stats.filter(item => item.turn === 1).length;
    const turnTwo = stats.filter(item => item.turn === 2).length;
    const turnThree = stats.filter(item => item.turn === 3).length;
    const turnFour = stats.filter(item => item.turn === 4).length;
    const turnFive = stats.filter(item => item.turn === 5).length;
    const turnSix = stats.filter(item => item.turn === 6).length;

    return (
        <div>
            <h3>statystyki</h3>
            <div>zagrane gry: {stats.length}</div>
            <div>wygrane: {wins}</div>
            <div>
                <h4>dystrybucja prób:</h4>
                <StatStyled>
                    <span>#1</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnOne / wins * 100}%`} /></ProgressDivStyled>
                    <span>{turnOne}</span>
                </StatStyled>
                <StatStyled>
                    <span>#2</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnTwo / wins * 100}%`} /></ProgressDivStyled>
                    <span>{turnTwo}</span>
                </StatStyled>
                <StatStyled>
                    <span>#3</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnThree / wins * 100}%`} /></ProgressDivStyled>
                    <span>{turnThree}</span>
                </StatStyled>
                <StatStyled>
                    <span>#4</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnFour / wins * 100}%`} /></ProgressDivStyled>
                    <span>{turnFour}</span>
                </StatStyled>
                <StatStyled>
                    <span>#5</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnFive / wins * 100}%`} /></ProgressDivStyled>
                    <span>{turnFive}</span>
                </StatStyled>
                <StatStyled>
                    <span>#6</span>
                    <ProgressDivStyled><ProgressBarStyled progress={`${turnSix / wins * 100}%`} /></ProgressDivStyled>
                    <span>{turnSix}</span>
                </StatStyled>
            </div>
        </div>
    )
}