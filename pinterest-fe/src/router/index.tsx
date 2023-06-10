import React, { useEffect } from "react"
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from "react-router-dom"
import { useDispatch } from "react-redux"
import Home from "screens/Home"
import Login from "screens/Login"
import Register from "screens/Register"
import Feed from "components/Feed"
import Profile from "components/Profile"
import Search from "components/Search"
import Board from "components/Board"
import CreateBoard from "./../components/CreateBoard/index"
import UpdateBoard from "./../components/UpdateBoard/index"
import Pin from "components/Pin"
import Noti from "components/Notification"
import UpdateProfile from "components/UpdateProfile"
import io from "socket.io-client"
import { Socket } from "interfaces"
import logo from "../assets/images/favicon.png"
import { getNoti } from "components/Notification/actions"

const socket = io(`${process.env.REACT_APP_REST_ENDPOINT}/api/user`, {
  transports: ["websocket"]
})

console.log(socket)

const ProtectedRoute = ({ user, redirectPath = "/login", children }: any) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />
  }

  return children ? children : <Outlet />
}

const Router = () => {
  const dispatch = useDispatch()
  const user = localStorage.getItem("refreshToken")
  const id = localStorage.getItem("id")

  const notify = (data: Socket) => {
    console.log(data)
    if (!("Notification" in window)) {
      // Check if the browser supports notifications
      alert("This browser does not support desktop notification")
    } else if (Notification.permission === "granted") {
      // Check whether notification permissions have already been granted;
      // if so, create a notification
      if (data.event === "follow") {
        const notification = new Notification("Pinterest", {
          body: `${data.data.displayName} đã bắt đầu theo dõi bạn`,
          icon: logo
        })
        notification.onclick = (event) => {
          event.preventDefault()
          window.open(`/${data.data.id}`, "_blank")
        }
      } else if (data.event === "comment") {
        const notification = new Notification("Pinterest", {
          body: `${data.data.displayName} đã thêm một nhận xét vào ảnh của bạn`,
          icon: logo
        })
        notification.onclick = (event) => {
          event.preventDefault()
          window.open(`/pin/${data.data.pinId}`, "_blank")
        }
      }
      dispatch(
        getNoti({
          pageNum: 1,
          pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
        })
      )
      // …
    } else if (Notification.permission !== "denied") {
      // We need to ask the user for permission
      Notification.requestPermission().then((permission) => {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
          if (data.event === "follow") {
            const notification = new Notification("Pinterest", {
              body: `${data.data.displayName} đã bắt đầu theo dõi bạn`,
              icon: logo
            })
            notification.onclick = (event) => {
              event.preventDefault()
              window.open(`/${data.data.id}`, "_blank")
            }
          } else if (data.event === "comment") {
            const notification = new Notification("Pinterest", {
              body: `${data.data.displayName} đã thêm một nhận xét vào ảnh của bạn`,
              icon: logo
            })
            notification.onclick = (event) => {
              event.preventDefault()
              window.open(`/pin/${data.data.pinId}`, "_blank")
            }
          }
          // …
        }
      })
    }

    // At last, if the user has denied notifications, and you
    // want to be respectful there is no need to bother them anymore.
  }

  useEffect(() => {
    if (id) {
      socket.on(`${id}`, (data) => {
        notify(data)
      })
    }

    return () => {
      socket.off(`${id}`)
    }
  }, [id])

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Feed />} />
          <Route path="search" element={<Search />} />
          <Route path="notifications" element={<Noti />} />
          <Route path="profile" element={<Profile />} />
          <Route path="settings/profile" element={<UpdateProfile />} />
          <Route path=":userId" element={<Profile />} />
          <Route path="profile/:boardId" element={<Board />} />
          <Route path=":userId/:boardId" element={<Board />} />
          <Route path="board/create" element={<CreateBoard />} />
          <Route path="board/update" element={<UpdateBoard />} />
          <Route path="board/:boardId/update" element={<UpdateBoard />} />
          <Route path="board/:boardId/edit" element={<CreateBoard edit />} />
          <Route path="pin/:pinId" element={<Pin />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
