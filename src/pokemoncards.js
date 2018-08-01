import React from "react";
import axios from "axios";
import PokeCard from "./pokecard.js";
import "./pokecard.css";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=949";

class PokemonCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    };
  }

  componentDidMount() {
    axios.get(pokemonUrl).then(data => {
      this.setState({ pokemonList: data.data.results });
    });
  }

  render() {
    const pokes = this.state.pokemonList.map((poke, pokeIndex) => (
      <ol key={pokeIndex}>
        <li>
          <PokeCard
            name={
              poke.name.substring(0, 1).toUpperCase() + poke.name.substring(1)
            }
            number={pokeIndex + 1}
          />
        </li>
      </ol>
    ));
    return (
      <div>
        <h2>List of all Pokemon:</h2>
        {pokes}
      </div>
    );
  }
}

export default PokemonCards;
