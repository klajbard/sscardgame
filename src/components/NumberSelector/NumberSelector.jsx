import React from "react"
import styles from "./NumberSelector.less"

export default function NumberSelector({label, ...restProps}) {
  return(
    <label className={styles.container}>
      {label}{" "}
      <input className={styles.input} type="number" name="quantity" {...restProps}></input>
    </label>
  )
}