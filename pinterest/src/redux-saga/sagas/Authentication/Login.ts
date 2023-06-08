import axios from '../BaseApi';
import { put, takeLatest, call } from "redux-saga/effects";
import { Request } from "interfaces";
import { AUTH_LOGIN } from "./../../actions";

const signupUrl = `/auth/sign-in`;

function login(payload: Record<string, unknown>) {
  return axios.post(signupUrl, payload);
}

function* doLogin(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(login, request.payload!);
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

export default function* watchLogin() {
  yield takeLatest(AUTH_LOGIN, doLogin);
}
