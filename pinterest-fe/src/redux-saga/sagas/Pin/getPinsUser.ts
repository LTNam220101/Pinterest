import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { GET_PINS_USER } from "./../../actions"

const getPinsUserUrl = (id: number) => `/user/${id}/pin`

function getPinsUser(payload: Record<string, unknown>) {
  const { userId } = payload
  return axios.get(getPinsUserUrl(userId as number))
}

function* doGetPinsUser(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getPinsUser, request.payload!)
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

export default function* watchGetPinsUser() {
  yield takeLatest(GET_PINS_USER, doGetPinsUser)
}
