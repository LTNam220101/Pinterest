import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { GET_PINS } from "./../../actions";

const getPinsUrl = (id: number) => `/board/${id}/pins`;

function getPins(payload: Record<string, unknown>) {
  const { boardId, pageNum, pageSize } = payload;
  return axios.get(getPinsUrl(boardId as number), {
    params: {
      pageNum,
      pageSize
    }
  });
}

function* doGetPins(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getPins, request.payload!);
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

export default function* watchGetPins() {
  yield takeLatest(GET_PINS, doGetPins);
}
