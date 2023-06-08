import { GET_BOARDS_FAILED, GET_BOARDS_SUCCESS, GET_PROFILE_FAILED, GET_PROFILE_SUCCESS } from './reducers';
import { GET_BOARDS, GET_PROFILE } from './../../redux-saga/actions';

export const getBoards = (payload: any, componentId?: string) => ({
  type: GET_BOARDS,
  response: {
    success: {
      type: GET_BOARDS_SUCCESS,
    },
    failure: {
      type: GET_BOARDS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});

export const getProfile = (payload?: any, componentId?: string) => ({
  type: GET_PROFILE,
  response: {
    success: {
      type: GET_PROFILE_SUCCESS,
    },
    failure: {
      type: GET_PROFILE_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});