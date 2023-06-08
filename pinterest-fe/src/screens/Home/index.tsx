import React, { useEffect, useState } from "react"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"
import { ToastContainer, toast } from "react-toastify"
import BottomNavigation from "components/BottomNavigation"
import Offline from "components/Offline"
import { State } from "redux-saga/reducers"
import "react-toastify/dist/ReactToastify.css"
import "./styles.scss"

const Home = () => {
  const toastResult = useSelector((state: State) => state.toastResult)
  const [isOnline, setIsOnline] = useState(navigator.onLine)

  useEffect(() => {
    // Update network status
    const handleStatusChange = () => {
      setIsOnline(navigator.onLine)
    }

    // Listen to the online status
    window.addEventListener("online", handleStatusChange)

    // Listen to the offline status
    window.addEventListener("offline", handleStatusChange)

    // Specify how to clean up after this effect for performance improvment
    return () => {
      window.removeEventListener("online", handleStatusChange)
      window.removeEventListener("offline", handleStatusChange)
    }
  }, [isOnline])

  useEffect(() => {
    if (toastResult) {
      toast((toastResult as unknown as Record<string, string>).title, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      })
    }
  }, [toastResult])

  return (
    <div className="Pinhome">
      {!isOnline && <Offline />}
      <Outlet />
      <ToastContainer />
      <BottomNavigation />
    </div>
  )
}

export default Home
