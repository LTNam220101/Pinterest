import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { EDIT_BOARD } from "./../../actions";

const editBoardUrl = `/board`;

function editBoard(payload: Record<string, unknown>) {
  const { boardId } = payload;
  return axios.put(`${editBoardUrl}/${boardId}`, payload);
}

function* doEditBoard(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(editBoard, request.payload!);
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

export default function* watchEditBoard() {
  yield takeLatest(EDIT_BOARD, doEditBoard);
}
