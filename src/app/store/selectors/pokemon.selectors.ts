import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PokemonState } from "../states/pokemon.state";

const pokemonSelector = createFeatureSelector<PokemonState>('pokemon');

export const selectPokemonList = createSelector(
  pokemonSelector,
  state => state.pokemonList
);
