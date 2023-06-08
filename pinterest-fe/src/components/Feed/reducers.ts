import { createReducer } from "utils/redux";

export const GET_ALL_PINS_SUCCESS = 'GET_ALL_PINS_SUCCESS';
export const GET_ALL_PINS_FAILED = 'GET_ALL_PINS_FAILED';
export const GET_ALL_PINS_CLEAR = 'GET_ALL_PINS_CLEAR';

export const GetAllPinsResult = createReducer(
  GET_ALL_PINS_SUCCESS,
  GET_ALL_PINS_FAILED,
  GET_ALL_PINS_CLEAR
);