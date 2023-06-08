import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { GET_BOARDS } from "./../../actions";

const getBoardsUrl = `/board/user`;

function getBoards(payload: Record<string, unknown>) {
  const { userId } = payload;
  return axios.get(`${getBoardsUrl}/${userId}`, {
    params: {
      pageNum: 1,
      pageSize: 30
    }
  });
}

function* doGetBoards(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getBoards, request.payload!);
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

export default function* watchGetBoards() {
  yield takeLatest(GET_BOARDS, doGetBoards);
}
