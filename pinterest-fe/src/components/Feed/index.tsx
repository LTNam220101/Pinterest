import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Masonry, useInfiniteLoader } from "masonic";
import { useViewport } from "hooks";
import ImageCard from "components/ImageCard";
import { State } from "redux-saga/reducers";
import { PinResult } from "components/Board";
import "./styles.scss";
import { getAllPins } from "./actions";
import { GET_ALL_PINS_CLEAR } from "./reducers";

const Feed = () => {
  const dispatch = useDispatch();
  const [pins, setPins] = useState<PinResult[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [conti, setConti] = useState(true);

  const getAllPinsResult = useSelector(
    (state: State) => state.getAllPinsResult
  );

  useEffect(() => {
    return () => {
      setPins([]);
      dispatch({
        type: GET_ALL_PINS_CLEAR
      });
    };
  }, []);

  useEffect(() => {
    dispatch(
      getAllPins({
        text: "",
        pageNum: pageNum,
        pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      })
    );
  }, []);

  useEffect(() => {
    if (getAllPinsResult) {
      setPins([
        ...pins,
        ...(getAllPinsResult?.response?.data as unknown as PinResult[])
      ]);
      if (
        (getAllPinsResult?.response?.data as unknown as PinResult[]).length <
        parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      ) {
        setConti(false);
      } else {
        setPageNum((pageNum) => pageNum + 1);
      }
    }
  }, [getAllPinsResult]);

  const fetchMoreItems = (startIndex: number, stopIndex: number) => {
    if (conti) {
      dispatch(
        getAllPins({
          text: "",
          pageNum: pageNum,
          pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
        })
      );
    }
  };

  const maybeLoadMore = useInfiniteLoader(fetchMoreItems, {
    isItemLoaded: (index, items) => !!items[index],
    minimumBatchSize: 32,
    threshold: 3
  });

  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : viewPort.width / Math.floor(viewPort.width / 200);

  return (
    <div className="masonic">
      <Masonry
        items={pins}
        columnGutter={8} // Set khoảng cách giữa các column
        columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu
        overscanBy={5} // Giá trị để render trước khi scroll tới
        render={ImageCard} // Grid item của component
        onRender={maybeLoadMore}
      />
    </div>
  );
};

export default Feed;
