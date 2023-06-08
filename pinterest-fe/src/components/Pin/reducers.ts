import { createReducer } from "utils/redux";

export const GET_PIN_SUCCESS = "GET_PIN_SUCCESS";
export const GET_PIN_FAILED = "GET_PIN_FAILED";
export const GET_PIN_CLEAR = "GET_PIN_CLEAR";

export const GetPinResult = createReducer(
  GET_PIN_SUCCESS,
  GET_PIN_FAILED,
  GET_PIN_CLEAR
);

export const DELETE_PIN_SUCCESS = "DELETE_PIN_SUCCESS";
export const DELETE_PIN_FAILED = "DELETE_PIN_FAILED";
export const DELETE_PIN_CLEAR = "DELETE_PIN_CLEAR";

export const DeletePinResult = createReducer(
  DELETE_PIN_SUCCESS,
  DELETE_PIN_FAILED,
  DELETE_PIN_CLEAR
);

export const GET_BOARDS_HAS_PIN_SUCCESS = "GET_BOARDS_HAS_PIN_SUCCESS";
export const GET_BOARDS_HAS_PIN_FAILED = "GET_BOARDS_HAS_PIN_FAILED";
export const GET_BOARDS_HAS_PIN_CLEAR = "GET_BOARDS_HAS_PIN_CLEAR";

export const GetBoardsHasPinResult = createReducer(
  GET_BOARDS_HAS_PIN_SUCCESS,
  GET_BOARDS_HAS_PIN_FAILED,
  GET_BOARDS_HAS_PIN_CLEAR
);

export const ADD_COMMENT_SUCCESS = "ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_FAILED = "ADD_COMMENT_FAILED";
export const ADD_COMMENT_CLEAR = "ADD_COMMENT_CLEAR";

export const AddCommentResult = createReducer(
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAILED,
  ADD_COMMENT_CLEAR
);

export const UPDATE_COMMENT_SUCCESS = "UPDATE_COMMENT_SUCCESS";
export const UPDATE_COMMENT_FAILED = "UPDATE_COMMENT_FAILED";
export const UPDATE_COMMENT_CLEAR = "UPDATE_COMMENT_CLEAR";

export const UpdateCommentResult = createReducer(
  UPDATE_COMMENT_SUCCESS,
  UPDATE_COMMENT_FAILED,
  UPDATE_COMMENT_CLEAR
);

export const DELETE_COMMENT_SUCCESS = "DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_FAILED = "DELETE_COMMENT_FAILED";
export const DELETE_COMMENT_CLEAR = "DELETE_COMMENT_CLEAR";

export const DeleteCommentResult = createReducer(
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_FAILED,
  DELETE_COMMENT_CLEAR
);
