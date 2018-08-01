import React, { Component } from "react";
import PokemonCards from "./pokemoncards.js";
// import Pokemon from "./pokemon.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <PokemonCards />
      </div>
    );
  }
}

export default App;
