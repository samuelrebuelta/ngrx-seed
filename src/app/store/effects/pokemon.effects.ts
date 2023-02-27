import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { switchMap, map, tap, catchError } from 'rxjs/operators';
import { fetchPokemonList, setPokemonList } from '../actions/app.actions';
import { hideLoading, showLoading } from '../actions/loading.actions';
import { StoreState } from '../states/store.state';


@Injectable()
export class PokemonEffects {

  /**
   * Fetch pokemon list
   */
  fetchPokemonList$ = createEffect(() => this.actions$.pipe(
    ofType(fetchPokemonList),
    switchMap(({ limit }) => this.fetchPokemonList(limit).pipe(
      map(list => setPokemonList(list))
    )),
  ));


  constructor(
    private store: Store<StoreState>,
    private actions$: Actions,
    private httpClient: HttpClient,
  ) { }

  private fetchPokemonList(limit: number): Observable<any> {
    // Show loading on request
    this.store.dispatch(showLoading());
    const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
    return this.httpClient.get(url).pipe(
      // Hide loading on success
      tap(() => this.store.dispatch(hideLoading())),
      // Hide loading on error
      catchError((e) => {
        this.store.dispatch(hideLoading());
        return throwError(() => e);
      })
    );
  }

}
