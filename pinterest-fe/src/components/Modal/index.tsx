import React, { Dispatch, SetStateAction, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Close } from "assets/svg/close.svg"
import { ReactComponent as Pin } from "assets/svg/pin.svg"
import { ReactComponent as Share } from "assets/svg/share2.svg"
import { ReactComponent as Delete } from "assets/svg/delete.svg"
import { deletePin } from "components/Pin/actions"
import { State } from "redux-saga/reducers"
import { BoardsRequest, BoardsResponse } from "components/Profile"
import { DELETE_PIN_CLEAR } from "components/Pin/reducers"
import { UPDATE_BOARD_CLEAR } from "components/UpdateBoard/reducers"
import { createToastSuccess } from "screens/Home/actions"
import { updateBoard } from "components/UpdateBoard/actions"
import { getBoardsProfile } from "components/Profile/actions"
import "./styles.scss"

interface ModalProps {
  inProfile?: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  pinId?: number
  src?: string
  setting?: boolean
  saveOpen?: boolean
}

const Modal = ({
  inProfile,
  setIsOpen,
  pinId,
  src,
  setting,
  saveOpen
}: ModalProps) => {
  const auth = localStorage.getItem("id")
  const { boardId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [save, setSave] = useState(false)
  const [selectedImg, setSelectedImg] = useState<File | undefined>(undefined)

  const updateBoardResult = useSelector(
    (state: State) => state.updateBoardResult
  )
  const deletePinResult = useSelector((state: State) => state.deletePinResult)

  const getBoardsProfileResult = useSelector(
    (state: State) => state.getBoardsProfileResult
  )
  const boards = getBoardsProfileResult?.response as unknown as BoardsResponse

  useEffect(() => {
    if (selectedImg) navigate("/board/update", { state: { img: selectedImg } })
  }, [selectedImg])

  useEffect(() => {
    dispatch(
      getBoardsProfile({
        userId: localStorage.getItem("id")
      } as unknown as BoardsRequest)
    )
  }, [])

  useEffect(() => {
    if (deletePinResult) {
      if (deletePinResult.success) {
        dispatch(createToastSuccess({ title: "Delete pin succeed!" }))
      } else if (deletePinResult.error) {
        dispatch(createToastSuccess({ title: "Delete pin failed!" }))
      }
      navigate(-1)
      return () => {
        dispatch({
          type: DELETE_PIN_CLEAR
        })
      }
    }
  }, [deletePinResult])

  useEffect(() => {
    if (updateBoardResult) {
      if (updateBoardResult.success) {
        dispatch(createToastSuccess({ title: "Upload image succeed!" }))
      } else if (updateBoardResult.error) {
        dispatch(createToastSuccess({ title: "Upload image failed!" }))
      }
      navigate(-1)
    }
    return () => {
      dispatch({
        type: UPDATE_BOARD_CLEAR
      })
    }
  }, [updateBoardResult])

  const handleUpdate = (id: number) => {
    dispatch(updateBoard({ boardId: id, pinId: pinId }))
  }

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    localStorage.removeItem("refreshToken")
    localStorage.removeItem("id")
    navigate("/login")
  }
  return (
    <>
      <div className="modal-background" onClick={() => setIsOpen(false)}></div>
      <div className="modal">
        <div className="modal-header">
          <Close className="header-button" onClick={() => setIsOpen(false)} />
          <div className="header-text">
            {inProfile
              ? setting
                ? "Cài đặt"
                : "Thêm vào hồ sơ"
              : save || saveOpen
              ? "Lưu vào bảng"
              : "Tuỳ chọn"}
          </div>
        </div>
        <div className="modal-buttons">
          {inProfile ? (
            setting ? (
              <>
                <div
                  className="img-picker-text"
                  onClick={() => navigate("/settings/profile")}
                >
                  Chỉnh sửa hồ sơ
                </div>
                <div onClick={handleLogout}>Đăng xuất</div>
              </>
            ) : (
              <>
                <div className="img-picker-text">
                  Ảnh
                  <input
                    id="upload-pin"
                    type="file"
                    accept="image/*"
                    className="img-picker"
                    onChange={(e) => {
                      if (e.target.files) setSelectedImg(e.target.files[0])
                    }}
                  ></input>
                </div>
                <div onClick={() => navigate("/board/create")}>Bảng</div>
              </>
            )
          ) : save || saveOpen ? (
            <>
              {boards &&
                boards.data.map((board) => {
                  return (
                    <div
                      className="modal-board"
                      key={board.id}
                      onClick={() => handleUpdate(board.id)}
                    >
                      <img
                        src={
                          board.thumbnail ||
                          "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
                        }
                        className="modal-img"
                        alt={board.name}
                      />
                      {board.name}
                    </div>
                  )
                })}
              {/* <div
                className="create-board"
                onClick={() => navigate("/board/create")}
              >
                <Add className="create-icon" />
                Tạo bảng
              </div> */}
            </>
          ) : (
            <>
              <div className="button" onClick={() => setSave(true)}>
                <Pin className="button-icon" />
                Lưu
              </div>
              {boardId && boardId === auth && (
                <div
                  className="button"
                  onClick={() =>
                    pinId &&
                    dispatch(deletePin({ boardId: boardId, pinId: pinId }))
                  }
                >
                  <Delete className="button-icon" />
                  Xoá khỏi bảng
                </div>
              )}
              <div className="button">
                <Share className="button-icon" />
                Gửi
              </div>
              {/* <div className="button" onClick={downloadImage}>
                <Save className="button-icon" />
                Tải hình ảnh xuống
              </div> */}
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Modal
