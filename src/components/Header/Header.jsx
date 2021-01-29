import React from "react"
import styles from "./Header.less"
import Logo from "../../assets/logo/snapsoft-logo.svg"

export default function Header({children}) {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <Logo className={styles.logo}/>
        <span className={styles.title}>Memory Game</span>
      </div>
      <div className={styles.rest}>
        {children}
      </div>
    </header>
  )
}