import { createReducer } from "utils/redux"

export const GET_BOARDS_SUCCESS = "GET_BOARDS_SUCCESS"
export const GET_BOARDS_FAILED = "GET_BOARDS_FAILED"
export const GET_BOARDS_CLEAR = "GET_BOARDS_CLEAR"

export const GetBoardsResult = createReducer(
  GET_BOARDS_SUCCESS,
  GET_BOARDS_FAILED,
  GET_BOARDS_CLEAR
)

export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS"
export const GET_PROFILE_FAILED = "GET_PROFILE_FAILED"
export const GET_PROFILE_CLEAR = "GET_PROFILE_CLEAR"

export const GetProfileResult = createReducer(
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILED,
  GET_PROFILE_CLEAR
)

export const GET_BOARDS_PROFILE_SUCCESS = "GET_BOARDS_PROFILE_SUCCESS"
export const GET_BOARDS_PROFILE_FAILED = "GET_BOARDS_PROFILE_FAILED"
export const GET_BOARDS_PROFILE_CLEAR = "GET_BOARDS_PROFILE_CLEAR"

export const GetBoardsProfileResult = createReducer(
  GET_BOARDS_PROFILE_SUCCESS,
  GET_BOARDS_PROFILE_FAILED,
  GET_BOARDS_PROFILE_CLEAR
)

export const GET_FOLLOWERS_SUCCESS = "GET_FOLLOWERS_SUCCESS"
export const GET_FOLLOWERS_FAILED = "GET_FOLLOWERS_FAILED"
export const GET_FOLLOWERS_CLEAR = "GET_FOLLOWERS_CLEAR"

export const GetFollowersResult = createReducer(
  GET_FOLLOWERS_SUCCESS,
  GET_FOLLOWERS_FAILED,
  GET_FOLLOWERS_CLEAR
)

export const GET_FOLLOWINGS_SUCCESS = "GET_FOLLOWINGS_SUCCESS"
export const GET_FOLLOWINGS_FAILED = "GET_FOLLOWINGS_FAILED"
export const GET_FOLLOWINGS_CLEAR = "GET_FOLLOWINGS_CLEAR"

export const GetFollowingsResult = createReducer(
  GET_FOLLOWINGS_SUCCESS,
  GET_FOLLOWINGS_FAILED,
  GET_FOLLOWINGS_CLEAR
)

export const FOLLOW_USER_SUCCESS = "FOLLOW_USER_SUCCESS"
export const FOLLOW_USER_FAILED = "FOLLOW_USER_FAILED"
export const FOLLOW_USER_CLEAR = "FOLLOW_USER_CLEAR"

export const FollowUserResult = createReducer(
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_FAILED,
  FOLLOW_USER_CLEAR
)

export const UN_FOLLOW_USER_SUCCESS = "UN_FOLLOW_USER_SUCCESS"
export const UN_FOLLOW_USER_FAILED = "UN_FOLLOW_USER_FAILED"
export const UN_FOLLOW_USER_CLEAR = "UN_FOLLOW_USER_CLEAR"

export const UnFollowUserResult = createReducer(
  UN_FOLLOW_USER_SUCCESS,
  UN_FOLLOW_USER_FAILED,
  UN_FOLLOW_USER_CLEAR
)

export const GET_FOLLOWERS_USER_SUCCESS = "GET_FOLLOWERS_USER_SUCCESS"
export const GET_FOLLOWERS_USER_FAILED = "GET_FOLLOWERS_USER_FAILED"
export const GET_FOLLOWERS_USER_CLEAR = "GET_FOLLOWERS_USER_CLEAR"

export const GetFollowersUserResult = createReducer(
  GET_FOLLOWERS_USER_SUCCESS,
  GET_FOLLOWERS_USER_FAILED,
  GET_FOLLOWERS_USER_CLEAR
)

export const GET_FOLLOWINGS_USER_SUCCESS = "GET_FOLLOWINGS_USER_SUCCESS"
export const GET_FOLLOWINGS_USER_FAILED = "GET_FOLLOWINGS_USER_FAILED"
export const GET_FOLLOWINGS_USER_CLEAR = "GET_FOLLOWINGS_USER_CLEAR"

export const GetFollowingsUserResult = createReducer(
  GET_FOLLOWINGS_USER_SUCCESS,
  GET_FOLLOWINGS_USER_FAILED,
  GET_FOLLOWINGS_USER_CLEAR
)

export const GET_PINS_USER_SUCCESS = "GET_PINS_USER_SUCCESS";
export const GET_PINS_USER_FAILED = "GET_PINS_USER_FAILED";
export const GET_PINS_USER_CLEAR = "GET_PINS_USER_CLEAR";

export const GetPinsUserResult = createReducer(
  GET_PINS_USER_SUCCESS,
  GET_PINS_USER_FAILED,
  GET_PINS_USER_CLEAR
);