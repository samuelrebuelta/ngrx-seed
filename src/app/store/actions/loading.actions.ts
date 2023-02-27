import { createAction } from '@ngrx/store';

export const ActionTypes = {
  SHOW_LOADING: '[Loading] show loading',
  HIDE_LOADING: '[Loading] hide loading',
};

export const showLoading = createAction(
  ActionTypes.SHOW_LOADING
);

export const hideLoading = createAction(
  ActionTypes.HIDE_LOADING
);
