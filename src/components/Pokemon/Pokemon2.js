import React from "react";

export class Pokemon2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { type: "" };
    this.changeColor = this.changeColor.bind(this);
    this.changeType = this.changeType.bind(this);
  }

  changeType() {
    let newType = this.props.type;
    this.setState({ type: newType });
  }

  changeColor(type) {
    let color = "";

    if (type === "fire") {
      color = "coral";
    } else if (type === "grass") {
      color = "green";
    } else if (type === "water") {
      color = "dodgerblue";
    } else if (type === "electric") {
      color = "gold";
    } else if (type === "rock") {
      color = "gray";
    } else if (type === "fighitng") {
      color = "brown";
    } else if (type === "poison") {
      color = "Chartreuse";
    }
    return color;
  }
  render() {
    const pokeImages = `https://img.pokemondb.net/artwork/${
      this.props.name
    }.jpg`;

    return (
      <div style={{ backgroundColor: this.changeColor(this.state.type) }}>
        <div
          style={{
            position: "relative",
            bottom: 40,
            height: 400,
            width: 400,
            border: 3,
            borderStyle: "outset",
            borderColor: "gold",
            margin: "auto"
          }}
        >
          <img style={{ width: 394, height: 394 }} alt="" src={pokeImages} />
        </div>
        <h1>My name is:{this.props.name}</h1>
        <h1>HP: {this.props.hp} </h1>
        <h1>Defense: {this.props.defense} </h1>
        <h1>Attack: {this.props.attack}</h1>
        <h1>Type: {this.props.type}</h1>
        <h1>Use my ability</h1>
        <h1>{this.changeColor()}</h1>
        <button
          style={{ backgroundColor: "IndianRed", width: 100, height: 40 }}
          onClick={this.changeType}
        >
          {this.props.ability}
        </button>
      </div>
    );
  }
}
