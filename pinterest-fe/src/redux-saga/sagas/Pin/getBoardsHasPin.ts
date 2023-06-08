import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { GET_BOARDS_HAS_PIN } from "./../../actions";

const getBoardsHasPinUrl = (id: number) => `/pin/${id}/boards`;

function getBoardsHasPin(payload: Record<string, unknown>) {
  const { pinId } = payload;
  return axios.get(getBoardsHasPinUrl(pinId as number), {
    params: {
      pageNum: 1,
      pageSize: 30
    }
  });
}

function* doGetBoardsHasPin(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getBoardsHasPin, request.payload!);
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

export default function* watchGetBoardHasPin() {
  yield takeLatest(GET_BOARDS_HAS_PIN, doGetBoardsHasPin);
}
