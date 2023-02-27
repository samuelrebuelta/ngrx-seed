import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { showLoading, hideLoading } from 'src/app/store/actions/loading.actions';
import { StoreState } from 'src/app/store/states/store.state';


@Injectable({ providedIn: 'root' })
export class RequestService {

  constructor(
    private http: HttpClient,
    private store: Store<StoreState>,
  ) { }

  public get<RequestModel>(url: string): Observable<RequestModel> {
    // Mostramos loading
    this.store.dispatch(showLoading());
    return this.http.get(url)
      .pipe(
        // Ocultamos loading
        this.handleLoadingOperator()
      ) as Observable<RequestModel>;
  }

  /**
   * Custom operator
   */
  private handleLoadingOperator() {
    return (source: Observable<unknown>) => {
      return source.pipe(
        delay(500),
        tap(() => this.store.dispatch(hideLoading())),
        catchError(e => {
          this.store.dispatch(hideLoading());
          return throwError(() => e);
        })
      );
    };
  }
}
