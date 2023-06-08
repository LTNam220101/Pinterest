import React, { useState, useEffect } from "react"
// import { ReactComponent as Profile } from "assets/svg/profile.svg"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { State } from "redux-saga/reducers"
import { ReactComponent as Home } from "assets/svg/home.svg"
import { ReactComponent as Search } from "assets/svg/search.svg"
import { ReactComponent as Comment } from "assets/svg/comment.svg"
import { ReactComponent as ProfileIcon } from "assets/svg/profile.svg"
import { ProfileInterface } from "components/Profile"
import { getProfile } from "components/Profile/actions"
import "./styles.scss"

export enum Tabs {
  Home = "",
  Search = "search",
  Noti = "notifications",
  Profile = "profile"
}

const Profile = ({ className, onClick }: any) => {
  const { userId } = useParams()
  const dispatch = useDispatch()
  const getProfileResult = useSelector((state: State) => state.getProfileResult)
  const profile = getProfileResult?.response as unknown as ProfileInterface

  useEffect(() => {
    dispatch(getProfile({ userId: userId }))
  }, [userId])

  return profile ? (
    <div className={`${className} avatar`} onClick={onClick}>
      <img
        src={profile.avatarUrl}
        className="avatar-bottom"
        alt={profile.username}
      ></img>
    </div>
  ) : (
    <ProfileIcon className={`${className} avatar`} onClick={onClick} />
  )
}

const tabs = [
  {
    component: Home,
    path: Tabs.Home
  },
  {
    component: Search,
    path: Tabs.Search
  },
  {
    component: Comment,
    path: Tabs.Noti
  },
  {
    component: Profile,
    path: Tabs.Profile
  }
]

const BottomNavigation = () => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [state, setState] = useState(0)

  useEffect(() => {
    pathname === "/"
      ? setState(0)
      : pathname === "/search"
      ? setState(1)
      : pathname === "/notifications"
      ? setState(2)
      : pathname === "/profile"
      ? setState(3)
      : void 0
  }, [pathname])

  return (
    <div className="bottom">
      {tabs.map((tab, i) => {
        return (
          <tab.component
            key={i}
            className={state === i ? "active" : "inactive"}
            onClick={() => {
              setState(i)
              navigate(tab.path)
            }}
          />
        )
      })}
    </div>
  )
}

export default BottomNavigation
