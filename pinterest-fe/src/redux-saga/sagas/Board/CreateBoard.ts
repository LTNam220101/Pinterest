import { put, takeLatest, call } from "redux-saga/effects";
import axios from '../BaseApi';
import { Request } from "interfaces";
import { CREATE_BOARD } from "./../../actions";

const createBoardUrl = `/board`;

function createBoard(payload: Record<string, unknown>) {
  return axios.post(createBoardUrl, payload);
}

function* doCreateBoard(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(createBoard, request.payload!);
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

export default function* watchCreateBoard() {
  yield takeLatest(CREATE_BOARD, doCreateBoard);
}
