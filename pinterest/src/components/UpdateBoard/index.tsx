import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { ReactComponent as Add } from "assets/svg/add.svg";
import { BoardsResponse } from "components/Profile";
import { State } from "redux-saga/reducers";
import { updateBoard } from "./actions";
import { createToastSuccess } from "screens/Home/actions";
import "./styles.scss";
import { UPDATE_BOARD_CLEAR } from "./reducers";

const UpdateBoard = () => {
  const location = useLocation();
  const { boardId } = useParams();

  const dispatch = useDispatch();

  const updateBoardResult = useSelector(
    (state: State) => state.updateBoardResult
  );

  const getBoardsResult = useSelector((state: State) => state.getBoardsResult);
  const boards = getBoardsResult?.response as unknown as BoardsResponse;

  const navigate = useNavigate();

  const [name, setName] = useState("");

  const handleUpdate = (id: number) => {
    dispatch(
      updateBoard({ boardId: id, image: location.state.img, name: name })
    );
  };

  useEffect(() => {
    if (updateBoardResult) {
      if (updateBoardResult.success) {
        dispatch(createToastSuccess({ title: "Upload image succeed!" }));
      } else if (updateBoardResult.error) {
        dispatch(createToastSuccess({ title: "Upload image failed!" }));
      }
      navigate(-1);
    }
    return () => {
      dispatch({
        type: UPDATE_BOARD_CLEAR
      });
    };
  }, [updateBoardResult]);

  return (
    <div>
      <div className="update-header">
        <Back className="back-icon" onClick={() => navigate(-1)} />
        <div className="update-name">Lưu vào bảng</div>
      </div>
      <input
        type="text"
        placeholder="Tên ảnh"
        className="update-input"
        value={name}
        onChange={(value) => setName(value.target.value)}
      />
      <div className={`update-content ${boardId && "save-btn-wr"}`}>
        {!boardId &&
          boards &&
          boards.data.map((board) => {
            return (
              <div
                className="board-item"
                key={board.id}
                onClick={() => handleUpdate(board.id)}
              >
                <img
                  src={
                    board.thumbnail ||
                    "https://i.pinimg.com/236x/6a/71/ef/6a71efd53f8304a47e555404f6758054.jpg"
                  }
                  className="board-img"
                  alt={board.name}
                />
                {board.name}
              </div>
            );
          })}
        {boardId && (
          <button
            className="save-btn"
            onClick={() => handleUpdate(Number(boardId))}
          >
            Lưu
          </button>
        )}
        <div className="create-board" onClick={() => navigate("/board/create")}>
          <Add className="create-icon" />
          <div className="create-icon-text">Tạo bảng</div>
        </div>
      </div>
    </div>
  );
};

export default UpdateBoard;
