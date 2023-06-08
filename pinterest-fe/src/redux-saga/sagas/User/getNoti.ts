import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { GET_NOTI } from "./../../actions"

const getNotiUrl = `/user/updates`

function getNoti(payload: Record<string, unknown>) {
  const { pageNum, pageSize } = payload
  return axios.get(getNotiUrl, {
    params: {
      pageNum,
      pageSize
    }
  })
}

function* doGetNoti(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(getNoti, request.payload!)
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

export default function* watchGetNoti() {
  yield takeLatest(GET_NOTI, doGetNoti)
}
