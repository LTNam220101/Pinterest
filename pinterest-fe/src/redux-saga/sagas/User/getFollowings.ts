import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { GET_FOLLOWINGS, GET_FOLLOWINGS_USER } from "./../../actions"

const getFollowingsUrl = (id: number) => {
  return id
    ? `/user/${id}/following`
    : `/user/${localStorage.getItem("id")}/following`
}

function getFollowings(payload: Record<string, unknown>) {
  const { userId } = payload
  return axios.get(getFollowingsUrl(userId as number))
}

function* doGetFollowings(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getFollowings, request.payload!)
    yield put({
      type: request.response?.success?.type,
      payload: {
        request: request.payload,
        componentId: request.componentId,
        response: response.data
      }
    })
  } catch (error) {
    console.log(error)
    yield put({
      type: request.response?.failure?.type,
      loading: false,
      payload: {
        request: request.payload,
        componentId: request.componentId
      }
    })
  }
}

export function* watchGetFollowings() {
  yield takeLatest(GET_FOLLOWINGS, doGetFollowings)
}

export function* watchGetFollowingsUser() {
  yield takeLatest(GET_FOLLOWINGS_USER, doGetFollowings)
}
