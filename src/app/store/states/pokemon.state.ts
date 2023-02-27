import { Pokemon } from "src/app/pages/pokemon-list/pokemon.model";

export interface PokemonState {
  pokemonList: Pokemon[];
}

export const pokemonInitialState: PokemonState = {
  pokemonList: []
};
