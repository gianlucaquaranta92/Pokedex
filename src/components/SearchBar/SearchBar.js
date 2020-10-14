import React from "react";
import Speech from "react-speech";

import "./SearchBar.css";

export class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.Searching = this.Searching.bind(this);
  }

  Searching(event) {
    this.setState({ nome: event.target.value });
  }

  handleSearch(event) {
    this.props.searchName(this.state.nome);
  }

  render() {
    const style = {
      play: {
        button: {
          width: "28",
          height: "28",
          cursor: "pointer",
          pointerEvents: "none",
          outline: "none",

          border: "solid 1px rgba(255,255,255,1)",
          borderRadius: 6
        }
      }
    };

    function newHeight(height) {
      return height * 10;
    }
    let height = newHeight(this.props.height);

    function newWeight(weight) {
      return weight / 10;
    }
    let weight = newWeight(this.props.weight);

    let speech = `${this.props.name},is a ${this.props.type} pokemon , and his stronghest ability is ${this.props.ability}. It's height can reach the ${height} centimeters. and can weight up to ${weight} kilograms`;
    return (
      <div className="searchButtons">
        <button
          className="roundButton"
          style={{
            outline: " none",
            backgroundColor: "dodgerblue"
          }}
          onClick={this.handleSearch}
        />
        <input
          className="searchBar"
          placeholder="25/pikachu"
          style={{ outline: " none", margin: 15 }}
          onChange={this.Searching}
        />
        <Speech
          pitch="0.7"
          rate="0.8"
          volume="0.1"
          style={style}
          voice="Google UK English Male"
          text={speech}
        />
        Play
      </div>
    );
  }
}
