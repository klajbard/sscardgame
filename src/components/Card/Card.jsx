import React, { useRef } from 'react';
import styles from './Card.less';

const colorSeq = [
  "angular",
  "jenkins",
  "react",
  "sass",
  "webpack",
  "d3",
  "postcss",
  "redux",
  "ts",
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
      <div className={styles.front}>
        <img className={styles.image} src={`./cards/${colorSeq[colorId]}.png`} alt={colorSeq[colorId]}/>
      </div>
    </div>
  </div>
}