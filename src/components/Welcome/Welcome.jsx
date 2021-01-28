import React from "react"
import styles from "./Welcome.less"

export default function Welcome(){
  return (
    <div>
      <h2>Welcome to the card-matching game!</h2>
      <ol>
        <li>Present the user with an even number of cards, „face down”</li>
        <li>When the user clicks a card, „flip it over” and reveal the hidden image</li>
        <li>When two cards are revealed:</li>
          <ol className={styles.nested}>
            <li>If the cards are identical, remove them from play.</li>
            <li>If they are not, flip them back.</li>
          </ol>
        <li>The game ends when all cards are removed.</li>
      </ol>
    </div>
  )
}