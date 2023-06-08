import { GET_NOTI_FAILED, GET_NOTI_SUCCESS } from "./reducers";
import { GET_NOTI } from "./../../redux-saga/actions";

export const getNoti = (payload: any, componentId?: string) => ({
  type: GET_NOTI,
  response: {
    success: {
      type: GET_NOTI_SUCCESS
    },
    failure: {
      type: GET_NOTI_FAILED
    }
  },
  payload,
  componentId,
  loading: true
});
