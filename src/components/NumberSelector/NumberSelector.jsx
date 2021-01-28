import React from "react"

export default function NumberSelector({label, ...restProps}) {
  return(
    <label>
      {label}{" "}
      <input type="number" name="quantity" {...restProps}></input>
    </label>
  )
}