import { createReducer } from "utils/redux";

export const CREATE_TOAST_SUCCESS = "CREATE_TOAST_SUCCESS";
export const CREATE_TOAST_FAILED = "CREATE_TOAST_FAILED";
export const CREATE_TOAST_CLEAR = "CREATE_TOAST_CLEAR";

export const ToastResult = createReducer(
  CREATE_TOAST_SUCCESS,
  CREATE_TOAST_FAILED,
  CREATE_TOAST_CLEAR
);
