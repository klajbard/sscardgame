import React, { useState, useEffect} from "react";
import styles from "./App.less";
import NumberSelector from "./components/NumberSelector/NumberSelector";
import CardGame from "./components/CardGame/CardGame";
import Welcome from "./components/Welcome/Welcome";
import Header from "./components/Header/Header";
import Button from "./components/Button/Button";

export default function App() {
  const [cardNumber, setCardNumber] = useState(3);
  const [isDone, setDone] = useState(true);
  const [score, setScore] = useState(null);
  const [isReset, setReset] = useState();

  function handleDone(score) {
    reset();
    setScore(score)
  }

  function handleReset() {
    reset();
    setScore(null)
  }

  useEffect(() => {
    setReset(false)
  }, [isReset])
  
  function reset() {
    setDone(true)
    setReset(true)
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
    <>
      <Header />
      <main className={styles.main}>
        {!isDone || gameStore? (
          <>
            <CardGame cardNumber={cardNumber} onDone={handleDone} onReset={handleReset} done={isDone && !gameStore} gameStore={gameStore}/>
          </>
        ) : (
          <div className={styles.container}>
            {score === null ? (
              <Welcome />
            ) : (
              <div><strong>Congratulations!</strong> Your score is: {score}</div>
            )}
            <div className={styles.controls}>
              <NumberSelector min="3" max="10" value={cardNumber} onChange={handleNumberChange} label="Deck size"/>
              <Button onClick={handleClick}>Start new game</Button>
            </div>
          </div>
        )}
      </main>
    </>
  );
}
