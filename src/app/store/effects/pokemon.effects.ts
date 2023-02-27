import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { fetchPokemonList, setPokemonList } from '../actions/pokemon.actions';
import { PokemonListApi } from 'src/app/pages/pokemon-list/pokemon.model';
import { RequestService } from 'src/app/core/services/request.service';


@Injectable()
export class PokemonEffects {

  /**
   * Fetch pokemon list
   */
  fetchPokemonList$ = createEffect(() => this.actions$.pipe(
    ofType(fetchPokemonList),
    switchMap(({ limit }) => this.fetchPokemonList(limit).pipe(
      map(({ results }: PokemonListApi) => setPokemonList({ list: results }))
    )),
  ));


  constructor(
    private actions$: Actions,
    private requestService: RequestService,
  ) { }

  private fetchPokemonList(limit: number): Observable<any> {
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    return this.requestService.get(url);
  }

}
