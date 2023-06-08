import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { UPDATE_PROFILE } from "./../../actions";

const updateProfileUrl = `/user`;

function updateProfile(payload: Record<string, unknown>) {
  const { selectedImg, displayName } = payload;
  const formData = new FormData();
  if (selectedImg) {
    formData.append("profile-picture", selectedImg as File);
  }
  if (displayName) {
    formData.append("displayName", displayName as string);
  }
  return axios.put(updateProfileUrl, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

function* doUpdateProfile(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(updateProfile, request.payload!);
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

export default function* watchUpdateProfile() {
  yield takeLatest(UPDATE_PROFILE, doUpdateProfile);
}
