import { createReducer } from 'utils/redux';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';
export const LOGIN_CLEAR = 'LOGIN_CLEAR';

export const LoginResult = createReducer(
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  LOGIN_CLEAR
);