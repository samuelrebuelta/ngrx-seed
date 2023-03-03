import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';
import { RequestService } from 'src/app/core/services/request.service';
import { fetchPokemonList } from 'src/app/store/actions/pokemon.actions';
import { selectPokemonList } from 'src/app/store/selectors/pokemon.selectors';
import { StoreState } from 'src/app/store/states/store.state';
import { Pokemon, PokemonListApi } from './pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit, OnDestroy {

  public pokemonList$?: Observable<Pokemon[]>;
  public totalPokemons?: number;

  private readonly unsubscribe$ = new Subject<void>();


  constructor(
    private store: Store<StoreState>,
  ) { }

  ngOnInit(): void {
    this.pokemonList$ = this.store.select(selectPokemonList).pipe(
      tap(pokemonList => this.totalPokemons = pokemonList.length)
    );
  }

  public fetchPokemonList() {
    this.store.dispatch(fetchPokemonList({ limit: 9 }));
  }

  public trackByIndex(index: number): number {
    return index;
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
