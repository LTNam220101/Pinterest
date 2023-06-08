import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { DELETE_COMMENT } from "./../../actions"

const deleteCommentUrl = (id: number) => `/comment/${id}`

function deleteComment(payload: Record<string, unknown>) {
  const { commentId } = payload
  return axios.delete(deleteCommentUrl(commentId as number), payload)
}

function* doDeleteComment(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(deleteComment, request.payload!)
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

export default function* watchDeleteComment() {
  yield takeLatest(DELETE_COMMENT, doDeleteComment)
}
