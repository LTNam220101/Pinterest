import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { State } from "redux-saga/reducers"
import { useNavigate } from "react-router-dom"
import { formatDistanceToNow } from "date-fns"
import { GET_NOTI_CLEAR } from "./reducers"
import { getNoti } from "./actions"
import "./styles.scss"

const NotiItem = ({ noti }: any) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(`/${noti.data.id}`)
  }

  return (
    <div className="noti-item" onClick={handleClick}>
      <img className="noti-item-img" src={noti.data.avatarUrl} alt="asd" />
      <div className="noti-item-text">
        <b>{noti.data.displayName}</b> Đã theo dõi bạn
      </div>
      <div className="noti-item-time">
        {formatDistanceToNow(new Date(noti.createdAt).getTime())}
      </div>
    </div>
  )
}

const Notification = () => {
  const dispatch = useDispatch()
  const [notis, setNotis] = useState<any[]>([])
  const [pageNum, setPageNum] = useState(1)
  //   const [conti, setConti] = useState(true)

  const getNotiResult = useSelector((state: State) => state.getNotiResult)

  useEffect(() => {
    dispatch(
      getNoti({
        pageNum: pageNum,
        pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      })
    )
  }, [])

  useEffect(() => {
    return () => {
      setNotis([])
      dispatch({
        type: GET_NOTI_CLEAR
      })
    }
  }, [])

  useEffect(() => {
    if (getNotiResult) {
      setNotis([...(getNotiResult?.response?.data as unknown as any[])])
    }
  }, [getNotiResult])

  return (
    <div>
      <div className="noti">Cập nhật</div>
      {notis &&
        notis
          .reverse()
          .map((noti, indx) => <NotiItem noti={noti} key={indx} />)}
    </div>
  )
}

export default Notification
