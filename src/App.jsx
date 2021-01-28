import React, { useState} from "react";
import styles from "./App.less";
import CardGame from "./components/CardGame/CardGame";

export default function App() {
  const [isDone, setDone] = useState(true);
  const [score, setScore] = useState(null)

  function handleDone(score) {
    setScore(score)
    setDone(true)
  }

  function handleClick() {
    setDone(false)
    setScore(0)
  }

  return (
    <main className={styles.main}>
      <h1>Card game</h1>
      {!isDone ? (
          <CardGame cardNumber={2} onDone={handleDone} done={isDone}/>
      ) : (
        <div>
          {score === null ? (
            <h2>Welcome !</h2>
          ) : (
            <div><strong>Congratulations!</strong> Your score is: {score}</div>
          )}
          <button onClick={handleClick}>New game</button>
        </div>
      )}
    </main>
  );
}
