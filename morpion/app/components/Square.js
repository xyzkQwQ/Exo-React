"use client";

import styles from "../square.module.css";

export default function Square({ value, click }) {
  let squareClass = styles.square;

  if (value === "X") {
    squareClass += " " + styles.x;
  } else if (value === "O") {
    squareClass += " " + styles.o;
  }

  return (
    <button className={squareClass} onClick={click}>
      {value}
    </button>
  );
}