import React, { useState} from "react";
import styles from "./App.less";
import NumberSelector from "./components/NumberSelector/NumberSelector";
import CardGame from "./components/CardGame/CardGame";
import Welcome from "./components/Welcome/Welcome";

export default function App() {
  const [cardNumber, setCardNumber] = useState(3);
  const [isDone, setDone] = useState(true);
  const [score, setScore] = useState(null)

  function handleDone(score) {
    reset();
    setScore(score)
  }

  function handleReset() {
    reset();
    setScore(null)
  }
  
  function reset() {
    setDone(true)
    localStorage.removeItem('cardgame');
  }

  function handleClick() {
    setDone(false)
    setScore(0)
  }

  function handleNumberChange({target: {value}}) {
    setCardNumber(value)
  }

  const gameStore = JSON.parse(localStorage.getItem('cardgame'))

  return (
    <main className={styles.main}>
      <h1>Card game</h1>
      {!isDone || gameStore? (
        <>
          <button onClick={handleReset}>Go Back</button>
          <CardGame cardNumber={cardNumber} onDone={handleDone} done={isDone} gameStore={gameStore}/>
        </>
      ) : (
        <div>
          {score === null ? (
            <Welcome />
          ) : (
            <div><strong>Congratulations!</strong> Your score is: {score}</div>
          )}
          <NumberSelector min="3" max="10" value={cardNumber} onChange={handleNumberChange} label="Number of pairs"/>
          <button onClick={handleClick}>New game</button>
        </div>
      )}
    </main>
  );
}
