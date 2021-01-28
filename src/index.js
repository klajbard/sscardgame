import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import styles from "./App.less";

const container = document.createElement("div");
container.classList.add(styles.body);
document.body.appendChild(container);
ReactDOM.render(<App />, container);
