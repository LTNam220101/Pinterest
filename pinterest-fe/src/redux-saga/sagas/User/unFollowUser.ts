import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { UN_FOLLOW_USER } from "./../../actions"

const unFollowUserUrl = (id: number) => `/user/unfollow/${id}`

function unFollowUser(payload: Record<string, unknown>) {
  const { id } = payload
  return axios.put(unFollowUserUrl(id as number))
}

function* doUnFollowUser(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(unFollowUser, request.payload!)
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

export default function* watchUnFollowUser() {
  yield takeLatest(UN_FOLLOW_USER, doUnFollowUser)
}
