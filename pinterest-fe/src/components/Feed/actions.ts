import { GET_ALL_PINS_FAILED, GET_ALL_PINS_SUCCESS } from "./reducers";
import { GET_ALL_PINS } from "./../../redux-saga/actions";

export const getAllPins = (payload: any, componentId?: string) => ({
  type: GET_ALL_PINS,
  response: {
    success: {
      type: GET_ALL_PINS_SUCCESS
    },
    failure: {
      type: GET_ALL_PINS_FAILED
    }
  },
  payload,
  componentId,
  loading: true
});
