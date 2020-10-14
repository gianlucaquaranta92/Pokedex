export const PokeAPI = {
  Search(id) {
    return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((pokemon) => {
        console.log(pokemon);
        return {
          name: pokemon.name,
          height: pokemon.height,
          ability: pokemon.abilities[0].ability.name,
          hp: pokemon.stats[5].base_stat,
          attack: pokemon.stats[4].base_stat,
          type: pokemon.types[0].type.name,
          defense: pokemon.stats[2].base_stat,
          weight: pokemon.weight
        };
      });
  }
};
