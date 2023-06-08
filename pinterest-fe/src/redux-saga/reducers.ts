import { combineReducers } from "@reduxjs/toolkit"
import { LoginResult } from "screens/Login/reducers"
import { registerResult } from "screens/Register/reducers"
import {
  CreateBoardResult,
  DeleteBoardResult,
  EditBoardResult
} from "components/CreateBoard/reducers"
import {
  FollowUserResult,
  GetBoardsProfileResult,
  GetBoardsResult,
  GetFollowersResult,
  GetFollowersUserResult,
  GetFollowingsResult,
  GetFollowingsUserResult,
  GetPinsUserResult,
  GetProfileResult,
  UnFollowUserResult
} from "components/Profile/reducers"
import { GetPinsResult } from "components/Board/reducers"
import {
  GetTagsResult,
  UpdateBoardResult
} from "components/UpdateBoard/reducers"
import { ToastResult } from "screens/Home/reducers"
import {
  AddCommentResult,
  DeleteCommentResult,
  DeletePinResult,
  GetBoardsHasPinResult,
  GetPinResult,
  UpdateCommentResult
} from "components/Pin/reducers"
import { UpdateProfileResult } from "components/UpdateProfile/reducers"
import {
  SearchByTagResult,
  SearchByUserResult
} from "components/Search/reducers"
import { GetAllPinsResult } from "components/Feed/reducers"
import { GetNotiResult } from "components/Notification/reducers"

const rootReducer = combineReducers({
  loginResult: LoginResult,
  registerResult: registerResult,
  getProfileResult: GetProfileResult,
  updateProfileResult: UpdateProfileResult,
  createBoardResult: CreateBoardResult,
  editBoardResult: EditBoardResult,
  deleteBoardResult: DeleteBoardResult,
  getBoardsResult: GetBoardsResult,
  getBoardsProfileResult: GetBoardsProfileResult,
  updateBoardResult: UpdateBoardResult,
  getPinsResult: GetPinsResult,
  getAllPinsResult: GetAllPinsResult,
  getPinResult: GetPinResult,
  deletePinResult: DeletePinResult,
  getBoardsHasPinResult: GetBoardsHasPinResult,
  getTagsResult: GetTagsResult,
  searchByTagResult: SearchByTagResult,
  searchByUserResult: SearchByUserResult,
  toastResult: ToastResult,
  getFollowersResult: GetFollowersResult,
  getFollowingsResult: GetFollowingsResult,
  getFollowersUserResult: GetFollowersUserResult,
  getFollowingsUserResult: GetFollowingsUserResult,
  followUserResult: FollowUserResult,
  unFollowUserResult: UnFollowUserResult,
  addCommentResult: AddCommentResult,
  updateCommentResult: UpdateCommentResult,
  deleteCommentResult: DeleteCommentResult,
  getNotiResult: GetNotiResult,
  getPinsUserResult: GetPinsUserResult
})

export type State = ReturnType<typeof rootReducer>

export default rootReducer
