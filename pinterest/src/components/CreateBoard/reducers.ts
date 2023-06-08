import { createReducer } from 'utils/redux';

export const CREATE_BOARD_SUCCESS = 'CREATE_BOARD_SUCCESS';
export const CREATE_BOARD_FAILED = 'CREATE_BOARD_FAILED';
export const CREATE_BOARD_CLEAR = 'CREATE_BOARD_CLEAR';

export const CreateBoardResult = createReducer(
  CREATE_BOARD_SUCCESS,
  CREATE_BOARD_FAILED,
  CREATE_BOARD_CLEAR
);

export const EDIT_BOARD_SUCCESS = 'EDIT_BOARD_SUCCESS';
export const EDIT_BOARD_FAILED = 'EDIT_BOARD_FAILED';
export const EDIT_BOARD_CLEAR = 'EDIT_BOARD_CLEAR';

export const EditBoardResult = createReducer(
  EDIT_BOARD_SUCCESS,
  EDIT_BOARD_FAILED,
  EDIT_BOARD_CLEAR
);

export const DELETE_BOARD_SUCCESS = 'DELETE_BOARD_SUCCESS';
export const DELETE_BOARD_FAILED = 'DELETE_BOARD_FAILED';
export const DELETE_BOARD_CLEAR = 'DELETE_BOARD_CLEAR';

export const DeleteBoardResult = createReducer(
  DELETE_BOARD_SUCCESS,
  DELETE_BOARD_FAILED,
  DELETE_BOARD_CLEAR
);