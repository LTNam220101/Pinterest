import { createReducer } from 'utils/redux';

export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILED = 'REGISTER_FAILED';
export const REGISTER_CLEAR = 'REGISTER_CLEAR';

export const registerResult = createReducer(
  REGISTER_SUCCESS,
  REGISTER_FAILED,
  REGISTER_CLEAR
);