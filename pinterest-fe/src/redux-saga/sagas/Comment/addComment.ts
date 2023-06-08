import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { ADD_COMMENT } from "./../../actions"

const addCommentUrl = (id: number) => `/pin/${id}/add-comment`

function addComment(payload: Record<string, unknown>) {
  const { pinId } = payload
  return axios.post(addCommentUrl(pinId as number), payload)
}

function* doAddComment(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(addComment, request.payload!)
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

export default function* watchAddComment() {
  yield takeLatest(ADD_COMMENT, doAddComment)
}
