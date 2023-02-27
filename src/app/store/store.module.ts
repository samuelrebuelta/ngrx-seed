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
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
  ],
  exports: [StoreModule],
  providers: []
})
export class AppStoreModule { }
