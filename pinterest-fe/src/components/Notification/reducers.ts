import { createReducer } from "utils/redux";

export const GET_NOTI_SUCCESS = 'GET_NOTI_SUCCESS';
export const GET_NOTI_FAILED = 'GET_NOTI_FAILED';
export const GET_NOTI_CLEAR = 'GET_NOTI_CLEAR';

export const GetNotiResult = createReducer(
  GET_NOTI_SUCCESS,
  GET_NOTI_FAILED,
  GET_NOTI_CLEAR
);