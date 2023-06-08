import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { GET_TAGS } from "./../../actions";

const getTagsUrl =  `/tag`;

function getTags(payload: Record<string, unknown>) {
  return axios.get(getTagsUrl);
}

function* doGetTags(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getTags, request.payload!);
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

export default function* watchGetTags() {
  yield takeLatest(GET_TAGS, doGetTags);
}
