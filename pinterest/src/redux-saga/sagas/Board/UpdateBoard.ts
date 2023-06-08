import { put, takeLatest, call } from "redux-saga/effects";
import axios from "../BaseApi";
import { Request } from "interfaces";
import { UPDATE_BOARD } from "../../actions";

const updateBoardUrl = (boardId: number) => `/board/${boardId}/save-pin`;

function updateBoard(payload: Record<string, unknown>) {
  const { boardId } = payload;
  const formData = new FormData();
  formData.append("image", payload.image as File);
  formData.append("name", payload.name as string || "image");
  return axios.put(`${updateBoardUrl(boardId as number)}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
}

function* doUpdateBoard(request: Request<Record<string, unknown>>): any {
  try {
    const response = yield call(updateBoard, request.payload!);
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

export default function* watchUpdateBoard() {
  yield takeLatest(UPDATE_BOARD, doUpdateBoard);
}
