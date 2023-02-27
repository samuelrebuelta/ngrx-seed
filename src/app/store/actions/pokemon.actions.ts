import { createAction, props } from '@ngrx/store';
import { Pokemon } from 'src/app/pages/pokemon-list/pokemon.model';

export const ActionTypes = {
  FETCH_POKEMON_LIST: '[App] Fetch pokemon list',
  SET_POKEMON_LIST: '[App] Set pokemon list',
};

export const fetchPokemonList = createAction(
  ActionTypes.FETCH_POKEMON_LIST,
  props<{ limit: number }>()
);

export const setPokemonList = createAction(
  ActionTypes.SET_POKEMON_LIST,
  props<{ list: Pokemon[] }>()
);
