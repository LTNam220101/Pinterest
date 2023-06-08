import { createReducer } from 'utils/redux';

export const UPDATE_BOARD_SUCCESS = 'UPDATE_BOARD_SUCCESS';
export const UPDATE_BOARD_FAILED = 'UPDATE_BOARD_FAILED';
export const UPDATE_BOARD_CLEAR = 'UPDATE_BOARD_CLEAR';

export const UpdateBoardResult = createReducer(
  UPDATE_BOARD_SUCCESS,
  UPDATE_BOARD_FAILED,
  UPDATE_BOARD_CLEAR
);

export const GET_TAGS_SUCCESS = 'GET_TAGS_SUCCESS';
export const GET_TAGS_FAILED = 'GET_TAGS_FAILED';
export const GET_TAGS_CLEAR = 'GET_TAGS_CLEAR';

export const GetTagsResult = createReducer(
  GET_TAGS_SUCCESS,
  GET_TAGS_FAILED,
  GET_TAGS_CLEAR
);