import { Action, createReducer, on } from '@ngrx/store';
import { setPokemonList } from '../actions/pokemon.actions';
import { pokemonInitialState, PokemonState } from '../states/pokemon.state';

const pokemonReducerCreator = createReducer(
  pokemonInitialState,
  on(setPokemonList, (state, { list }) => ({
    ...state,
    pokemonList: list
  })),
);

export function pokemonReducer(state: PokemonState | undefined, action: Action) {
  return pokemonReducerCreator(state, action);
}
