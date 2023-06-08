import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { SEARCH_BY_USER } from "../../actions";

const searchByUserUrl = `/search/user`;

function searchByUser(payload: Record<string, unknown>) {
  const { text, pageNum, pageSize } = payload;
  return axios.get(searchByUserUrl, {
    params: {
      pageNum: pageNum,
      pageSize: pageSize,
      nameUser: text
    }
  });
}

function* doSearchByUser(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(searchByUser, request.payload!);
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

export default function* watchSearchByUser() {
  yield takeLatest(SEARCH_BY_USER, doSearchByUser);
}