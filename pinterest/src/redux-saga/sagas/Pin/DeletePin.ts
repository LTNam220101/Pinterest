import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { DELETE_PIN } from "./../../actions";

const deletePinUrl = (id: number) => `/board/${id}/remove-pin`;

function deletePin(payload: Record<string, unknown>) {
  const { boardId, pinId } = payload;
  return axios.put(deletePinUrl(boardId as number), [{ id: pinId }]);
}

function* doGetPin(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(deletePin, request.payload!);
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
  yield takeLatest(DELETE_PIN, doGetPin);
}
