import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import Pokemon from "./pokemon.js";

ReactDOM.render(<Pokemon />, document.getElementById("root"));
registerServiceWorker();
