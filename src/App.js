import React, { Component } from "react";
import Pokemon from "./pokemon.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokemon />
      </div>
    );
  }
}

export default App;
