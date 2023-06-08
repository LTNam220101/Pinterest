import { createReducer } from 'utils/redux';

export const GET_BOARDS_SUCCESS = 'GET_BOARDS_SUCCESS';
export const GET_BOARDS_FAILED = 'GET_BOARDS_FAILED';
export const GET_BOARDS_CLEAR = 'GET_BOARDS_CLEAR';

export const GetBoardsResult = createReducer(
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILED,
  GET_BOARDS_CLEAR
);

export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS';
export const GET_PROFILE_FAILED = 'GET_PROFILE_FAILED';
export const GET_PROFILE_CLEAR = 'GET_PROFILE_CLEAR';

export const GetProfileResult = createReducer(
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_CLEAR
);