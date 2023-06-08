import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { GET_FOLLOWERS, GET_FOLLOWERS_USER } from "./../../actions"

const getFollowersUrl = (id: number) => {
  return id
    ? `/user/${id}/followers`
    : `/user/${localStorage.getItem("id")}/followers`
}

function getFollowers(payload: Record<string, unknown>) {
  const { userId } = payload
  return axios.get(getFollowersUrl(userId as number))
}

function* doGetFollowers(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getFollowers, request.payload!)
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

export function* watchGetFollowers() {
  yield takeLatest(GET_FOLLOWERS, doGetFollowers)
}

export function* watchGetFollowersUser() {
  yield takeLatest(GET_FOLLOWERS_USER, doGetFollowers)
}
