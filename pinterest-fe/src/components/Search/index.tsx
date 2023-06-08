import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import Header from "components/Header"
import { State } from "redux-saga/reducers"
import { searchByTag } from "./actions"
import { PinResult } from "components/Board"
import { Masonry, useInfiniteLoader } from "masonic"
import { useViewport } from "hooks"
import ImageCard from "components/ImageCard"
import { SEARCH_BY_TAG_CLEAR } from "./reducers"

const Search = () => {
  const dispatch = useDispatch()
  const [pins, setPins] = useState<PinResult[]>([])
  const [text, setText] = useState("")
  const [pageNum, setPageNum] = useState(1)
  const [conti, setConti] = useState(true)

  const searchByTagResult = useSelector(
    (state: State) => state.searchByTagResult
  )

  const handleSearch = () => {
    // setPins([]);
    if (text) {
      setConti(true)
      setPageNum(1)
      // dispatch({
      //   type: SEARCH_BY_TAG_CLEAR
      // })
      dispatch(
        searchByTag({
          text: text,
          pageNum: pageNum,
          pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
        })
      )
    }
  }

  useEffect(() => {
    return () => {
      setPins([])
      dispatch({
        type: SEARCH_BY_TAG_CLEAR
      })
    }
  }, [])

  useEffect(() => {
    if (searchByTagResult) {
      if (pageNum === 1) {
        setPins(searchByTagResult?.response?.data as unknown as PinResult[])
      } else
        setPins([
          ...pins,
          ...(searchByTagResult?.response?.data as unknown as PinResult[])
        ])
      if (
        (searchByTagResult?.response?.data as unknown as PinResult[]).length <
        parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      ) {
        setConti(false)
      } else {
        setPageNum((pageNum) => pageNum + 1)
      }
    }
  }, [searchByTagResult])

  const fetchMoreItems = (startIndex: number, stopIndex: number) => {
    if (conti) {
      dispatch(
        searchByTag({
          text: text,
          pageNum: pageNum,
          pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
        })
      )
    }
  }

  const maybeLoadMore = useInfiniteLoader(fetchMoreItems, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: 32,
    threshold: 3
  })

  const viewPort = useViewport()
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : viewPort.width / Math.floor(viewPort.width / 200)

  return (
    <div className="search">
      <Header
        inSearch
        text={text}
        setText={setText}
        handleSearch={handleSearch}
      />
      <Masonry
        style={{ marginTop: "24px" }}
        items={pins}
        key={text}
        columnGutter={8} // Set khoảng cách giữa các column
        columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu là 300px
        overscanBy={5} // Giá trị để render trước khi scroll tới
        render={ImageCard} // Grid item của component
        onRender={maybeLoadMore}
      />
    </div>
  )
}

export default Search
