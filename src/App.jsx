import React from "react";
import styles from "./App.less";
import CardGame from "./components/CardGame/CardGame";

export default function App() {
  return (
    <main className={styles.main}>
      <h1>Card game</h1>
      <CardGame cardNumber={2}/>
    </main>
  );
}
