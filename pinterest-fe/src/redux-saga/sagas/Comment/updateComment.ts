import { put, takeLatest, call } from "redux-saga/effects"
import axios from "../BaseApi"
import { Request } from "interfaces"
import { UPDATE_COMMENT } from "./../../actions"

const updateCommentUrl = (id: number) => `/comment/${id}`

function updateComment(payload: Record<string, unknown>) {
  const { commentId } = payload
  return axios.put(updateCommentUrl(commentId as number), {
    content: payload.content
  })
}

function* doUpdateComment(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(updateComment, request.payload!)
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

export default function* watchUpdateComment() {
  yield takeLatest(UPDATE_COMMENT, doUpdateComment)
}
