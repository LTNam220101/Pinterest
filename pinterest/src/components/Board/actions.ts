import { GET_PINS_FAILED, GET_PINS_SUCCESS } from './reducers';
import { GET_PINS } from './../../redux-saga/actions';

export const getPins = (payload: any, componentId?: string) => ({
  type: GET_PINS,
  response: {
    success: {
      type: GET_PINS_SUCCESS,
    },
    failure: {
      type: GET_PINS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});