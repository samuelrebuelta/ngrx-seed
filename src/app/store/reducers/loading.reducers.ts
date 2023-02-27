import { Action, createReducer, on } from '@ngrx/store';
import { hideLoading, showLoading } from '../actions/loading.actions';
import { loadingInitialState, LoadingState } from '../states/loading.state';

const loadingReducerCreator = createReducer(
  loadingInitialState,
  on(showLoading, (state) => ({ ...state, showLoading: true })),
  on(hideLoading, (state) => ({ ...state, showLoading: false })),
);

export function loadingReducer(state: LoadingState | undefined, action: Action) {
  return loadingReducerCreator(state, action);
}
