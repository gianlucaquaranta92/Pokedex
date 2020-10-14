import React from "react";
import { SearchBar } from "../SearchBar/SearchBar";

import { PokeAPI } from "../../PokeAPI";
import { Pokemon } from "../Pokemon/Pokemon";
import { Bar } from "../Title/Title";
/*import { Pokemon2 } from "../Pokemon/Pokemon2";*/
import "./App.css";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemon: {}, pokemon2: {} };
    this.searchName = this.searchName.bind(this);
  }

  searchName(id) {
    PokeAPI.Search(id)
      .then((pokemon) => {
        this.setState({ pokemon: pokemon });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div
        className="pokedex"
        style={{
          textAlign: "center",
          padding: 60
        }}
      >
        <div className="row">
          <div className="col" />
          <div
            style={{
              paddingTop: 70,
              paddingBottom: 1,
              borderRadius: 10,
              backgroundColor: "rgb(245, 245, 255,0.8)"
            }}
            className="col-xl-8"
          >
            <Bar />
            <div className="pokemonContainer">
              <div>
                <Pokemon
                  name={this.state.pokemon.name}
                  ability={this.state.pokemon.ability}
                  hp={this.state.pokemon.hp}
                  attack={this.state.pokemon.attack}
                  type={this.state.pokemon.type}
                  defense={this.state.pokemon.defense}
                  height={this.state.pokemon.height}
                />
              </div>
              <div className="searchBarContainer">
                <SearchBar
                  name={this.state.pokemon.name}
                  ability={this.state.pokemon.ability}
                  type={this.state.pokemon.type}
                  searchName={this.searchName}
                  height={this.state.pokemon.height}
                  weight={this.state.pokemon.weight}
                />
              </div>
            </div>
            <h1 style={{ marginTop: 50 }}>HOW TO SEARCH A POKEMON?</h1>
            <div style={{ textAlign: "left", marginTop: 30 }}>
              <ul>
                <li>
                  <h2>
                    {" "}
                    Write the name of the Pokèmon or write a number from 1 to
                    807 to find the Pokèmon's ID number in the SearchBar!
                  </h2>
                </li>
                <li>
                  <h2>Press the Blue Button for start the research!</h2>
                </li>
                <li>
                  <h2>Then press Play for the the informations!</h2>
                </li>
              </ul>
            </div>
            <p style={{ marginTop: 110 }}>Big Thanks to PokeAPI for the API!</p>
          </div>

          <div className="col" />
        </div>
      </div>
    );
  }
}
