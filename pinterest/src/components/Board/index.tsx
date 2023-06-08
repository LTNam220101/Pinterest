import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Masonry, useInfiniteLoader } from "masonic";
import { useViewport } from "hooks";
import Header from "components/Header";
import ImageCard from "components/ImageCard";
import { State } from "redux-saga/reducers";
import { getPins } from "./actions";
import "./styles.scss";
import { useParams } from "react-router-dom";
import { GET_PINS_CLEAR } from "./reducers";

export interface BoardRequest {
  boardId: number;
  pageNum: number;
  pageSize: number;
}

export interface PinResult {
  id: number;
  url: string;
  filename: string;
  name: string;
  createdAt: string;
}

interface BoardData {
  id: number;
  name: string;
  visibility: number;
  description: string;
  pins: PinResult[];
}

interface BoardResponse {
  data: BoardData;
  pageIndex: number;
  pageSize: number;
  total: number;
}

const Board = () => {
  const dispatch = useDispatch();
  const { boardId } = useParams();
  const [pins, setPins] = useState<PinResult[]>([]);
  const [pageNum, setPageNum] = useState(1);
  const [conti, setConti] = useState(true);
  const getPinsResult = useSelector((state: State) => state.getPinsResult);

  useEffect(() => {
    return () => {
      dispatch({
        type: GET_PINS_CLEAR
      });
    };
  }, []);

  useEffect(() => {
    dispatch(
      getPins({
        boardId: boardId as unknown as number,
        pageNum: 1,
        pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      } as BoardRequest)
    );
  }, []);

  useEffect(() => {
    if (getPinsResult) {
      setPins([
        ...pins,
        ...(getPinsResult?.response as unknown as BoardResponse).data.pins
      ]);
      if (
        (getPinsResult?.response as unknown as BoardResponse).data.pins.length <
        parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
      ) {
        setConti(false);
      } else {
        setPageNum((pageNum) => pageNum + 1);
      }
    }
  }, [getPinsResult]);

  const fetchMoreItems = (startIndex: number, stopIndex: number) => {
    if (conti) {
      dispatch(
        getPins({
          boardId: boardId as unknown as number,
          pageNum: pageNum,
          pageSize: parseInt(`${process.env.REACT_APP_FETCH_COUNT || 10}`)
        } as BoardRequest)
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
      : Math.floor(viewPort.width / 200) - 1;

  return (
    <div className="board">
      <Header inBoard />
      <div className="board-name">
        {getPinsResult &&
          (getPinsResult?.response as unknown as BoardResponse).data.name}
      </div>
      {pins && (
        <Masonry
          style={{ paddingBottom: "72px" }}
          items={pins}
          columnGutter={8} // Set khoảng cách giữa các column
          columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu là 300px
          overscanBy={5} // Giá trị để render trước khi scroll tới
          render={ImageCard} // Grid item của component
          onRender={maybeLoadMore}
        />
      )}
    </div>
  );
};
export default Board;
