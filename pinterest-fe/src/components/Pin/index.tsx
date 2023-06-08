import React, { useEffect, useState } from "react"
// import { Masonry } from "masonic";
// import { useViewport } from "hooks";
import formatDistanceToNow from "date-fns/formatDistanceToNow"
import { useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { ReactComponent as Dot } from "assets/svg/dot.svg"
import { PinResult } from "components/Board"
import Header from "components/Header"
import Modal from "components/Modal"
import { State } from "redux-saga/reducers"
import {
  addComment,
  deleteComment,
  getBoardsHasPin,
  getPin,
  updateComment
} from "./actions"
import "./styles.scss"
import {
  followUser,
  getFollowingsUser,
  unFollowUser
} from "components/Profile/actions"

export interface PinRequest {
  pinId: number
}

export interface BoardHasPin {
  id: number
  name: string
  thumbnail: string
  user: {
    id: number
    username: string
    displayName: string
    avatarUrl: string
  }
}

const Comment = ({ comment }: { comment: any }) => {
  const [open, setOpen] = useState(false)
  const [update, setUpdate] = useState(false)
  const [content, setContent] = useState(comment.content)
  const dispatch = useDispatch()

  const handleUpdateComment = () => {
    dispatch(updateComment({ commentId: comment.id, content: content }))
    setUpdate(false)
  }

  return (
    <div className="comment">
      <img
        src={comment.user.avatarUrl}
        alt={comment.user.displayName}
        className="comment-img"
      />
      <div>
        <div className="comment-top">
          <div className="comment-name">{comment.user.displayName}</div>
          {update ? (
            <>
              <input
                className="comment-content-clone"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button
                className="comment-input-btn-cancel"
                onClick={() => setUpdate(false)}
              >
                Huỷ
              </button>
              <button
                className="comment-input-btn"
                onClick={handleUpdateComment}
              >
                Đã xong
              </button>
            </>
          ) : (
            <div className="comment-content">{comment.content}</div>
          )}
        </div>
        <div className="comment-bottom">
          <div className="comment-time">
            {formatDistanceToNow(new Date(comment.updatedAt).getTime())}
          </div>
          {comment.user.id === Number(localStorage.getItem("id")) && (
            <div>
              <Dot className="comment-dot" onClick={() => setOpen((i) => !i)} />
              {open && (
                <>
                  <div className="bg" onClick={() => setOpen(false)}></div>
                  <div className="tooltip">
                    <div
                      className="tooltip-item"
                      onClick={() => {
                        setUpdate(true)
                        setOpen(false)
                      }}
                    >
                      Chỉnh sửa
                    </div>
                    <div
                      className="tooltip-item"
                      onClick={() =>
                        dispatch(deleteComment({ commentId: comment.id }))
                      }
                    >
                      Xoá
                    </div>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const Pin = () => {
  const [save, setSave] = useState(false)
  const [comment, setComment] = useState("")
  const { pinId } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const inputRef = React.createRef<HTMLInputElement>()

  const [isFollowing, setIsFollowing] = useState(false)

  const followUserResult = useSelector((state: State) => state.followUserResult)
  const followUserRes = followUserResult?.response
  const unFollowUserResult = useSelector(
    (state: State) => state.unFollowUserResult
  )
  const unFollowUserRes = unFollowUserResult?.response

  const getFollowingsUserResult = useSelector(
    (state: State) => state.getFollowingsUserResult
  )
  const followingsUser = getFollowingsUserResult?.response

  const getPinResult = useSelector((state: State) => state.getPinResult)
  const pin = getPinResult?.response as unknown as PinResult

  const addCommentResult = useSelector((state: State) => state.addCommentResult)
  const updateCommentResult = useSelector(
    (state: State) => state.updateCommentResult
  )
  const deleteCommentResult = useSelector(
    (state: State) => state.deleteCommentResult
  )

  useEffect(() => {
    if (pinId) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest))
      dispatch(getBoardsHasPin({ pinId: Number(pinId) } as PinRequest))
    }
  }, [])

  useEffect(() => {
    if (addCommentResult || deleteCommentResult || updateCommentResult) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest))
    }
  }, [addCommentResult, updateCommentResult, deleteCommentResult])

  useEffect(() => {
    dispatch(getFollowingsUser({ userId: undefined }))
  }, [])

  useEffect(() => {
    if (followingsUser && followingsUser.following && pin && pin.user) {
      setIsFollowing(
        (followingsUser.following as Array<any>).some(
          (user) => user.id === Number(pin.user.id)
        )
      )
    }
  }, [followingsUser])

  useEffect(() => {
    if (unFollowUserRes || followUserRes) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest))
      dispatch(getFollowingsUser({ userId: undefined }))
    }
  }, [unFollowUserRes, followUserRes])

  const handleFollow = () => {
    dispatch(followUser({ id: pin.user.id }))
  }

  const handleUnFollow = () => {
    dispatch(unFollowUser({ id: pin.user.id }))
  }

  const handleComment = () => {
    dispatch(addComment({ content: comment, pinId: pinId }))
    inputRef.current?.value ? (inputRef.current.value = "") : void 0
  }

  const handleCancelComment = () => {
    inputRef.current?.value ? (inputRef.current.value = "") : void 0
  }

  return (
    <div className="pin">
      <Header inPin setSave={setSave} />
      {save && (
        <Modal saveOpen pinId={pin.id} src={pin.url} setIsOpen={setSave} />
      )}
      {pin && <img src={pin.url} alt={pin.name} className="pin-image" />}
      <div className="img-attribute">
        <div className="img-name">{pin && pin.name}</div>
      </div>
      {pin && pin.user && (
        <div className="user-attribute">
          {pin.user.avatarUrl && (
            <img
              src={pin.user.avatarUrl}
              alt={pin.user.displayName}
              className="user-img"
              onClick={() => navigate(`/${pin.user.id}`)}
            />
          )}
          <div
            className="user-name-fl"
            onClick={() => navigate(`/${pin.user.id}`)}
          >
            {pin.user.displayName && (
              <div className="user-name">{pin.user.displayName}</div>
            )}
            {pin.user.followersCount !== undefined && (
              <div>{pin.user.followersCount} người theo dõi</div>
            )}
          </div>
          {pin.user.id &&
            pin.user.id !== Number(localStorage.getItem("id")) &&
            (isFollowing ? (
              <button className="user-btn-un" onClick={handleUnFollow}>
                Bỏ theo dõi
              </button>
            ) : (
              <button className="user-btn" onClick={handleFollow}>
                Theo dõi
              </button>
            ))}
        </div>
      )}
      <div className="comments">
        {pin && (
          <>
            <div className="comments-header">
              {pin.comments ? pin.comments.length : 0} nhận xét
            </div>
            {pin.comments.length > 0 &&
              pin.comments.map((comment: unknown) => {
                return <Comment comment={comment} key={(comment as any).id} />
              })}
          </>
        )}
        <div className="comment-inputs">
          <input
            className="comment-input"
            type="text"
            placeholder="Thêm nhận xét"
            ref={inputRef}
            onChange={(e) => setComment(e.target.value)}
          />
          {comment && (
            <>
              <button
                className="comment-input-btn-cancel"
                onClick={handleCancelComment}
              >
                Huỷ
              </button>
              <button className="comment-input-btn" onClick={handleComment}>
                Đã xong
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Pin
