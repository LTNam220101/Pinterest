import { createReducer } from 'utils/redux';

export const GET_PINS_SUCCESS = 'GET_PINS_SUCCESS';
export const GET_PINS_FAILED = 'GET_PINS_FAILED';
export const GET_PINS_CLEAR = 'GET_PINS_CLEAR';

export const GetPinsResult = createReducer(
  GET_PINS_SUCCESS,
  GET_PINS_FAILED,
  GET_PINS_CLEAR
);