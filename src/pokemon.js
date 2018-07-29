import React from "react";
import axios from "axios";

const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/?limit=949";

class Pokemon extends React.Component {
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
      <ol className="ol" key={pokeIndex}>
        <li>{poke.name}</li>
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

export default Pokemon;
