import { createReducer } from 'utils/redux';

export const GET_PIN_SUCCESS = 'GET_PIN_SUCCESS';
export const GET_PIN_FAILED = 'GET_PIN_FAILED';
export const GET_PIN_CLEAR = 'GET_PIN_CLEAR';

export const GetPinResult = createReducer(
  GET_PIN_SUCCESS,
  GET_PIN_FAILED,
  GET_PIN_CLEAR
);

export const DELETE_PIN_SUCCESS = 'DELETE_PIN_SUCCESS';
export const DELETE_PIN_FAILED = 'DELETE_PIN_FAILED';
export const DELETE_PIN_CLEAR = 'DELETE_PIN_CLEAR';

export const DeletePinResult = createReducer(
  DELETE_PIN_SUCCESS,
  DELETE_PIN_FAILED,
  DELETE_PIN_CLEAR
);