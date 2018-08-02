import React from "react";
import axios from "axios";
import PokeCard from "./pokecard.js";
import PokemonSpinner from "./pokemonspinner.jsx";
import "./pokemon.css";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=949";

class PokemonCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemonList: []
    };

    this.sort = this.sort.bind(this);
    this.reverseSort = this.reverseSort.bind(this);
    this.sortByOriginalOrder = this.sortByOriginalOrder.bind(this);
  }

  componentDidMount() {
    axios.get(pokemonUrl).then(data => {
      this.setState({
        pokemonList: data.data.results
      });
    });
  }

  sortByOriginalOrder() {
    axios.get(pokemonUrl).then(data => {
      this.setState({
        pokemonList: data.data.results
      });
    });
  }

  sort() {
    let sortedList = this.state.pokemonList.sort(function(a, b) {
      if (a.name > b.name) return 1;
      else if (a.name < b.name) return -1;
      return 0;
    });
    this.setState({ pokemonList: sortedList });
  }

  reverseSort() {
    let reverseSortedList = this.state.pokemonList.sort(function(a, b) {
      if (a.name > b.name) return -1;
      else if (a.name < b.name) return 1;
      return 0;
    });
    this.setState({ pokemonList: reverseSortedList });
  }

  render() {
    const pokes = this.state.pokemonList.map((poke, pokeIndex) => (
      <ol className="pokecard" key={pokeIndex}>
        <li>
          <PokeCard
            name={
              poke.name.substring(0, 1).toUpperCase() + poke.name.substring(1)
            }
            number={pokeIndex + 1}
            // url={poke.url}
          />
        </li>
      </ol>
    ));
    return (
      <div>
        <img
          alt="Pokemon!"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/250px-International_Pok%C3%A9mon_logo.svg.png"
        />
        <br />
        <PokemonSpinner />
        <br />
        <h2>List of all Pokemon:</h2>
        <br />
        <button type="button" className="button" onClick={this.sort}>
          Sort By Name
        </button>
        <button type="button" className="button" onClick={this.reverseSort}>
          Sort By Reverse Name
        </button>
        <button
          type="button"
          className="button"
          onClick={this.sortByOriginalOrder}
        >
          Reset List
        </button>
        <br />
        <br />
        {pokes}
      </div>
    );
  }
}

export default PokemonCards;
