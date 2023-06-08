import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { GET_PROFILE } from "./../../actions";

const getProfileUrl = `/user/1`;

function getProfile(payload: Record<string, unknown>) {
  return axios.get(`${getProfileUrl}`);
}

function* doGetProfile(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getProfile, request.payload!);
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

export default function* watchGetProfile() {
  yield takeLatest(GET_PROFILE, doGetProfile);
}
