import React from "react";

export class Bar extends React.Component {
  render() {
    return (
      <div>
        <img
          alt=""
          style={{ width: 400 }}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"
        />
        <h1 style={{ fontSize: 60 }}> Pokèdex</h1>
        <h2>
          The Pokédex is a digital encyclopedia created by the Professor Oak.
        </h2>
        <h2>
          It gives informations about all the 807 Pokémons in the world that are
          contained in its database.
        </h2>
      </div>
    );
  }
}
