import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { StoreState } from './store/states/store.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Bienvenidos al repo de Angular con NgRX!';
  public showLoading$?: Observable<boolean>;

  constructor(
    private store: Store<StoreState>,
  ) { }

  ngOnInit(): void {
    /** Loading store subscription */
    this.showLoading$ = this.store.select('loading').pipe(
      map(state => state.showLoading),
    );  
  }
}
