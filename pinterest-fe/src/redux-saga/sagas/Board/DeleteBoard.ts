import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { DELETE_BOARD } from "./../../actions";

const deleteBoardUrl = `/board`;

function deleteBoard(payload: Record<string, unknown>) {
  const { boardId } = payload;
  return axios.delete(`${deleteBoardUrl}/${boardId}`);
}

function* doDeleteBoard(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(deleteBoard, request.payload!);
    yield put({
      type: request.response?.success?.type,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: response.data
      }
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: request.response?.failure?.type,
      loading: false,
      payload: {
        request: request.payload,
        componentId: request.componentId
      }
    });
  }
}

export default function* watchDeleteBoard() {
  yield takeLatest(DELETE_BOARD, doDeleteBoard);
}
