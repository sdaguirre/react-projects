import { Square } from "./components/Square";
import { TURNS } from "./constants";
import { useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import { checkEndGame, checkWinnerFrom } from "./logic/board";
import { WinnerModal } from "./components/WinnerModal";

export default function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem("board");
    return boardFromStorage
      ? JSON.parse(boardFromStorage)
      : Array(9).fill(null);
  });

  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem("turn");
    return turnFromStorage ?? TURNS.X;
  });

  const [winner, setWinner] = useState(null);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);

    window.localStorage.removeItem("board");
    window.localStorage.removeItem("turn");
  };

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    window.localStorage.setItem("board", JSON.stringify(newBoard));
    window.localStorage.setItem("turn", newTurn);

    const newWinner = checkWinnerFrom(newBoard);

    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (checkEndGame(newBoard)) {
      setWinner(false);
    }
  };

  return (
    <main className="board">
      <h1>Tres en raya</h1>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square index={index} key={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <button onClick={resetGame}>Reiniciar el Juego</button>
      <WinnerModal winner={winner} resetGame={resetGame}></WinnerModal>
    </main>
  );
}
