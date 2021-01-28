import React, { useRef } from 'react';
import styles from './Card.less';

const colorSeq = [
  "#ff0000",
  "#ffa500",
  "#ffff00",
  "#008000",
  "#00ff00",
  "#0000ff",
  "#000080",
  "#2a0042",
  "#4b0082",
  "#ee82ee",
]

export default function Card({colorId, id, onClick, flip}) {
  const containerRef = useRef()

  function handleClick() {
    containerRef.current && containerRef.current.classList.toggle(styles.flip)
    onClick && onClick({id, colorId})
  }

  return <div className={[styles.container, flip && styles.flip].join(" ")} onClick={handleClick}>
    <div className={styles.wrapper}>
      <div className={styles.back}></div>
      <div className={styles.front} style={{backgroundColor: colorSeq[colorId]}}></div>
    </div>
  </div>
}