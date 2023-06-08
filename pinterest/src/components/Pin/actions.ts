import { GET_PIN_FAILED, GET_PIN_SUCCESS, DELETE_PIN_SUCCESS, DELETE_PIN_FAILED } from './reducers';
import { DELETE_PIN, GET_PIN } from './../../redux-saga/actions';

export const getPin = (payload: any, componentId?: string) => ({
  type: GET_PIN,
  response: {
    success: {
      type: GET_PIN_SUCCESS,
    },
    failure: {
      type: GET_PIN_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

export const deletePin = (payload: any, componentId?: string) => ({
  type: DELETE_PIN,
  response: {
    success: {
      type: DELETE_PIN_SUCCESS,
    },
    failure: {
      type: DELETE_PIN_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});