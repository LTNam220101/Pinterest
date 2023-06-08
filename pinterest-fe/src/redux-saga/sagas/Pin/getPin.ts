import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { GET_PIN } from "./../../actions";

const getPinUrl = (id: number) => `/pin/${id}`;

function getPin(payload: Record<string, unknown>) {
  const { pinId, pageNum, pageSize } = payload;
  return axios.get(getPinUrl(pinId as number), {
    params: {
      pageNum,
      pageSize
    }
  });
}

function* doGetPin(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getPin, request.payload!);
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

export default function* watchGetPin() {
  yield takeLatest(GET_PIN, doGetPin);
}
