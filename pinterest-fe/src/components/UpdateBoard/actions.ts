import { UPDATE_BOARD_FAILED, UPDATE_BOARD_SUCCESS } from './reducers';
import { UPDATE_BOARD } from './../../redux-saga/actions';

import { GET_TAGS_FAILED, GET_TAGS_SUCCESS } from './reducers';
import { GET_TAGS } from './../../redux-saga/actions';

export const updateBoard = (payload: any, componentId?: string) => ({
  type: UPDATE_BOARD,
  response: {
    success: {
      type: UPDATE_BOARD_SUCCESS,
    },
    failure: {
      type: UPDATE_BOARD_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});


export const getTags = (payload?: any, componentId?: string) => ({
  type: GET_TAGS,
  response: {
    success: {
      type: GET_TAGS_SUCCESS,
    },
    failure: {
      type: GET_TAGS_FAILED,
    },
  },
  payload,
  componentId,
  loading: true,
});