import React, { Dispatch, SetStateAction } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { State } from "redux-saga/reducers"
import { ReactComponent as Back } from "assets/svg/back.svg"
import { followUser, unFollowUser } from "components/Profile/actions"
import "./styles.scss"

interface FollowProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>
  following?: boolean
  follow: any[]
}

const Follow = ({ setIsOpen, follow, following }: FollowProps) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getFollowingsUserResult = useSelector(
    (state: State) => state.getFollowingsUserResult
  )
  const followingsUser = getFollowingsUserResult?.response

  return (
    <div className="followCom">
      <div className="followCom-header">
        <Back className="followCom-button" onClick={() => setIsOpen(false)} />
        <div className="followCom-text">
          {following ? "Đang theo dõi" : "Người theo dõi"}
        </div>
      </div>
      {follow.map((followItem, ind) => (
        <div key={ind} className="follower">
          <div
            className="follower-left"
            onClick={() => {
              setIsOpen(false)
              navigate(`/${followItem.id}`)
            }}
          >
            <img
              src={followItem.avatarUrl}
              alt="asd"
              className="follower-img"
            ></img>
            <div className="follower-name">{followItem.displayName}</div>
          </div>
          <button
            className="follower-btn"
            onClick={() => {
              if (followingsUser) {
                if (
                  (followingsUser.following as Array<any>).some(
                    (user) => user.id === Number(followItem.id)
                  )
                ) {
                  dispatch(unFollowUser({ id: followItem.id }))
                } else {
                  dispatch(followUser({ id: followItem.id }))
                }
              }
            }}
            disabled={followItem.id === Number(localStorage.getItem("id"))}
          >
            {followItem.id === Number(localStorage.getItem("id"))
              ? "Chính là bạn!"
              : followingsUser &&
                (followingsUser.following as Array<any>).some(
                  (user) => user.id === Number(followItem.id)
                )
              ? "Đang theo dõi"
              : "Theo dõi"}
          </button>
        </div>
      ))}
    </div>
  )
}

export default Follow
