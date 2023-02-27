import { pokemonInitialState, PokemonState } from './pokemon.state';
import { loadingInitialState, LoadingState } from './loading.state';

export interface StoreState {
  loading: LoadingState;
  pokemon: PokemonState;
}

export const storeInitialState: StoreState = {
  loading: loadingInitialState,
  pokemon: pokemonInitialState,
};
