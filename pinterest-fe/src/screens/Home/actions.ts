import {
  CREATE_TOAST_FAILED,
  CREATE_TOAST_SUCCESS,
  CREATE_TOAST_CLEAR
} from "./reducers";

export const createToastSuccess = (payload: any, componentId?: string) => ({
  type: CREATE_TOAST_SUCCESS,
  payload,
  componentId,
  loading: true
});

export const createToastFailed = (payload: any, componentId?: string) => ({
  type: CREATE_TOAST_FAILED,
  payload,
  componentId,
  loading: true
});

export const createToastClear = (payload: any, componentId?: string) => ({
  type: CREATE_TOAST_CLEAR,
  payload,
  componentId,
  loading: true
});
