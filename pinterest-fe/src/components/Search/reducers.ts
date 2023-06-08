import { createReducer } from "utils/redux";

export const SEARCH_BY_TAG_SUCCESS = 'SEARCH_BY_TAG_SUCCESS';
export const SEARCH_BY_TAG_FAILED = 'SEARCH_BY_TAG_FAILED';
export const SEARCH_BY_TAG_CLEAR = 'SEARCH_BY_TAG_CLEAR';

export const SearchByTagResult = createReducer(
  SEARCH_BY_TAG_SUCCESS,
  SEARCH_BY_TAG_FAILED,
  SEARCH_BY_TAG_CLEAR
);

export const SEARCH_BY_USER_SUCCESS = 'SEARCH_BY_USER_SUCCESS';
export const SEARCH_BY_USER_FAILED = 'SEARCH_BY_USER_FAILED';
export const SEARCH_BY_USER_CLEAR = 'SEARCH_BY_USER_CLEAR';

export const SearchByUserResult = createReducer(
  SEARCH_BY_USER_SUCCESS,
  SEARCH_BY_USER_FAILED,
  SEARCH_BY_USER_CLEAR
);