import React, { useState, useEffect, useRef } from "react"
import Card from "../Card/Card";

export default function CardGame({cardNumber}) {
  const [cards, setCards] = useState([]);
  const [revertCards, setRevertCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [revert, setRevert] = useState(false);
  const prevCardId = useRef();
  
  useEffect(() => {
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
  }, [cardNumber])

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
    console.log(id)
    console.log(colorId)
    const newCards = cards.map((card) => {
      const newCard = {...card}
      if (id === newCard.id) {
        newCard.flip = true;
      }
      return newCard
    })
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
  }

  console.log(cards)

  return(
    <div>
      {Math.floor(flipped/2)}
      {cards.map((cardConfig, idx) => <Card key={idx} {...cardConfig} onClick={revert ? null : handleCardClick}/>)}
    </div>
  )
}