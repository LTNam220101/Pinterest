import {
  CREATE_BOARD_FAILED,
  CREATE_BOARD_SUCCESS,
  DELETE_BOARD_FAILED,
  DELETE_BOARD_SUCCESS,
  EDIT_BOARD_FAILED,
  EDIT_BOARD_SUCCESS
} from "./reducers";
import {
  CREATE_BOARD,
  EDIT_BOARD,
  DELETE_BOARD
} from "./../../redux-saga/actions";
import { CreateBoard, DeleteBoard, EditingBoard } from ".";

export const createBoard = (payload: CreateBoard, componentId?: string) => ({
  type: CREATE_BOARD,
  response: {
    success: {
      type: CREATE_BOARD_SUCCESS
    },
    failure: {
      type: CREATE_BOARD_FAILED
    }
  },
  payload,
  componentId,
  loading: true
});

export const editingBoard = (payload: EditingBoard, componentId?: string) => ({
  type: EDIT_BOARD,
  response: {
    success: {
      type: EDIT_BOARD_SUCCESS
    },
    failure: {
      type: EDIT_BOARD_FAILED
    }
  },
  payload,
  componentId,
  loading: true
});

export const deleteBoard = (payload: DeleteBoard, componentId?: string) => ({
  type: DELETE_BOARD,
  response: {
    success: {
      type: DELETE_BOARD_SUCCESS
    },
    failure: {
      type: DELETE_BOARD_FAILED
    }
  },
  payload,
  componentId,
  loading: true
});
