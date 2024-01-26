import Image from "next/image";
import styles from "./page.module.css";
import Pokemon from "./components/pokemon.js"

export default function Home() {
  return (
    <main className={styles.main}>
      <Pokemon />
    </main>
  );
}
