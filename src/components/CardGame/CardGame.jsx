import React, { useState, useEffect, useRef } from "react"
import Card from "../Card/Card";
import Score from "../Score/Score";

export default function CardGame({cardNumber, gameStore = {}, onDone, done}) {
  const [cards, setCards] = useState(gameStore && gameStore.cards ? gameStore.cards : []);
  const [revertCards, setRevertCards] = useState(gameStore && gameStore.cards ? gameStore.cards : []);
  const [flipped, setFlipped] = useState(gameStore && gameStore.flipped ? gameStore.flipped : []);
  const [revert, setRevert] = useState(false);
  const prevCardId = useRef();
  
  useEffect(() => {
    if (!done && !gameStore) {
      const newCards = [];
      let pair = cardNumber;
      while (pair) {
        newCards.push({id: 2*pair, colorId: pair});
        newCards.push({id: 2*pair-1, colorId: pair});
        pair--;
      }
      const sortedCards = newCards.sort(() => {return Math.random() - Math.random()})
      setFlipped(0)
      setCards(sortedCards)
      setRevertCards(sortedCards)
    }
  }, [done, cardNumber])

  useEffect(() => {
    localStorage.setItem('cardgame', JSON.stringify({cards: revertCards, flipped: flipped}))
  }, [revertCards])

  useEffect(() => {
    if (revert) {
      const timeout = setTimeout(() => {
        setCards(revertCards);
        setRevert(false)
      }, 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [revert])

  function handleCardClick({id, colorId}) {
    let dontCountFlip = false;
    let isDone = true;
    const newCards = cards.map((card) => {
      const newCard = {...card}
      if (id === newCard.id) {
        if (newCard.flip) {
          dontCountFlip = true
        }
        newCard.flip = true;
      }
      if (!newCard.flip) {
        isDone = false
      }
      return newCard
    })
    if (dontCountFlip) {
      return;
    }
    if (flipped%2) {
      const isMatch = prevCardId.current && colorId === prevCardId.current.colorId
      if (isMatch) {
        setRevertCards(newCards)
      } else {
        setRevert(true)
      }
    }
    setCards(newCards)
    setFlipped(flipped+1)
    prevCardId.current = {id, colorId};
    if (isDone) {
      onDone(Math.floor((flipped+1)/2))
    }
  }

  return(
    <div>
      <Score>{Math.floor(flipped/2)}</Score>
      {cards.map((cardConfig, idx) => <Card key={idx} {...cardConfig} onClick={revert || done? null : handleCardClick}/>)}
    </div>
  )
}