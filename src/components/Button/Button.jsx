import React from "react"
import styles from "./Button.less"

export default function Button({children, ghost, ...restProps}) {
  return (
    <button className={[styles.button, ghost && styles.ghost].join(" ")} {...restProps}>{children}</button>
  )
}