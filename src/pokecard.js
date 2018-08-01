import React from "react";
import "./pokecard.css";

class PokeCard extends React.PureComponent {
  render() {
    return (
      <div>
        <p>
          <span>#{this.props.number}</span> <span>{this.props.name}</span>
        </p>
      </div>
    );
  }
}

export default PokeCard;
