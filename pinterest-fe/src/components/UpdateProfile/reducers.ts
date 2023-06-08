import { createReducer } from "utils/redux";

export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_FAILED = 'UPDATE_PROFILE_FAILED';
export const UPDATE_PROFILE_CLEAR = 'UPDATE_PROFILE_CLEAR';

export const UpdateProfileResult = createReducer(
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILED,
  UPDATE_PROFILE_CLEAR
);