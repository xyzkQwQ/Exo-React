"use client";

import Grid from "./Grille";
import styles from "../game.module.css";

export default function Jeu() {
  return (
    <div className={styles.game}>
      <Grid />
    </div>
  );
}
