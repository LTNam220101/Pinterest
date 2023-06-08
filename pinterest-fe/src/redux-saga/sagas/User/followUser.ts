import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { FOLLOW_USER } from "./../../actions"

const followUserUrl = (id: number) => `/user/follow/${id}`

function followUser(payload: Record<string, unknown>) {
  const { id } = payload
  return axios.put(followUserUrl(id as number))
}

function* doFollowUser(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(followUser, request.payload!)
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

export default function* watchFollowUser() {
  yield takeLatest(FOLLOW_USER, doFollowUser)
}
