import React from "react";

export class Pokemon extends React.Component {
  render() {
    const pokeImages = `https://img.pokemondb.net/artwork/${this.props.name}.jpg`;

    return (
      <div style={{ display: "flex", justifyContent: "inline-flex" }}>
        <div>
          <img
            className="imagePokemon"
            alt=""
            src={
              this.props.name
                ? `https://img.pokemondb.net/artwork/${this.props.name}.jpg`
                : "https://img.pokemondb.net/artwork/pikachu.jpg"
            }
          />
        </div>
        <div className="pokemonName">
          <h1 style={{ color: "#002C09 ", marginTop: 55 }}>
            {this.props.name}
          </h1>
        </div>
      </div>
    );
  }
}
