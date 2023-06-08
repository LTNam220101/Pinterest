import { all } from "redux-saga/effects";
import { login, register } from "./sagas/Authentication";
import {
  createBoard,
  deleteBoard,
  editBoard,
  getBoards,
  updateBoard
} from "./sagas/Board";
import { deletePin, getPin, getPins } from "./sagas/Pin";
import { getProfile } from "./sagas/Profile";

export default function* rootSaga() {
  yield all([
    login(),
    register(),
    createBoard(),
    editBoard(),
    deleteBoard(),
    getBoards(),
    getPins(),
    getPin(),
    deletePin(),
    updateBoard(),
    getProfile()
  ]);
}
