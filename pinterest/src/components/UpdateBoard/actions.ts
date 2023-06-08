import { UPDATE_BOARD_FAILED, UPDATE_BOARD_SUCCESS } from './reducers';
import { UPDATE_BOARD } from './../../redux-saga/actions';

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