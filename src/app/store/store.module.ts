import { NgModule } from "@angular/core";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { PokemonEffects } from "./effects/pokemon.effects";
import { pokemonReducer } from "./reducers/pokemon.reducers";
import { loadingReducer } from "./reducers/loading.reducers";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { environment } from "src/environments/environment";


@NgModule({
  imports: [
    StoreModule.forRoot({
      loading: loadingReducer,
      pokemon: pokemonReducer,
    }),
    EffectsModule.forRoot([
      PokemonEffects,
    ]),
  ],
  exports: [StoreModule],
  providers: []
})
export class AppStoreModule { }
