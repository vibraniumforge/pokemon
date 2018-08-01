import React from "react";

class PokeCard extends React.Component {
  render() {
    return (
      <div className="pokecard">
        <p>
          #{this.props.number}
          <br />
          {this.props.name}
        </p>
      </div>
    );
  }
}

export default PokeCard;
