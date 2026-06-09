import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>T.P.</a>
        </h1>
        <h1 className={styles.title}>
          Go
          <Link href="/todolist">ToDoList</Link>
        </h1>
      </main>
    </div>
  );
}
