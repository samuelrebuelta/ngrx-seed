import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { Observable } from 'rxjs';
import { hideLoading, showLoading } from './store/actions/loading.actions';
import { StoreState } from './store/states/store.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public title = 'Bienvenidos al repo de Angular RxJS, NgRX, Testing and more!';
  public showLoading$?: Observable<boolean>;

  constructor(
    private store: Store<StoreState>,
  ) { }

  ngOnInit(): void {
    /** Loading store subscription */
    this.showLoading$ = this.store.select('loading').pipe(map(el => el.showLoading));

    /** Show loading dispatch example */
    // this.store.dispatch(showLoading());
    /** Hide loading dispatch example */
    // setTimeout(() => this.store.dispatch(hideLoading()), 5000);
  }
}
