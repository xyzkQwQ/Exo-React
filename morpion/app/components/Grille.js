"use client";

import { useState } from "react";
import Square from "./Square";
import styles from "../grid.module.css";

export default function Grille() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) {
      return;
    }

    const copy = [...squares];
    copy[i] = xIsNext ? "X" : "O";

    setSquares(copy);
    setXIsNext(!xIsNext);
  }

  function calculateWinner(grille) {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of win) {
      if (grille[a] && grille[a] === grille[b] && grille[a] === grille[c]) return grille[a];
    }
    return null;
  }

  const winner = calculateWinner(squares);

  return (
    <div>
      <div className={styles.status}>{winner ? "Vainqueur : " + winner : "Tour : " + (xIsNext ? "X" : "O")}</div>

      <div>
        <div className={styles.boardrow}>
          <Square value={squares[0]} click={() => handleClick(0)} />
          <Square value={squares[1]} click={() => handleClick(1)} />
          <Square value={squares[2]} click={() => handleClick(2)} />
        </div>

        <div className={styles.boardrow}>
          <Square value={squares[3]} click={() => handleClick(3)} />
          <Square value={squares[4]} click={() => handleClick(4)} />
          <Square value={squares[5]} click={() => handleClick(5)} />
        </div>

        <div className={styles.boardrow}>
          <Square value={squares[6]} click={() => handleClick(6)} />
          <Square value={squares[7]} click={() => handleClick(7)} />
          <Square value={squares[8]} click={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}
