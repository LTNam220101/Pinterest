import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as Back } from "assets/svg/back.svg";
import { State } from "redux-saga/reducers";
import { createBoard, deleteBoard, editingBoard } from "./actions";
import "./styles.scss";
import { createToastSuccess } from "./../../screens/Home/actions";
import {
  CREATE_BOARD_CLEAR,
  DELETE_BOARD_CLEAR,
  EDIT_BOARD_CLEAR
} from "./reducers";

export interface CreateBoard {
  name: string;
  description: string;
  visibility: number;
  invisibility: number;
}

export interface DeleteBoard {
  boardId: number;
}

export interface EditingBoard extends CreateBoard, DeleteBoard {}

interface EditBoard {
  name: string;
  description: string;
  visibility: number;
  invisibility: number;
  thumbnail: string;
}

interface CreateBoardProps {
  edit?: boolean;
  editBoard?: EditBoard;
}

const CreateBoard = ({ edit, editBoard }: CreateBoardProps) => {
  const { boardId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const createBoardResult = useSelector(
    (state: State) => state.createBoardResult
  );
  const editBoardResult = useSelector((state: State) => state.editBoardResult);
  const deleteBoardResult = useSelector(
    (state: State) => state.deleteBoardResult
  );

  useEffect(() => {
    return () => {
      dispatch({
        type: CREATE_BOARD_CLEAR
      });
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: EDIT_BOARD_CLEAR
      });
    };
  }, []);

  useEffect(() => {
    return () => {
      dispatch({
        type: DELETE_BOARD_CLEAR
      });
    };
  }, []);

  useEffect(() => {
    if (createBoardResult) {
      if (createBoardResult.success) {
        dispatch(createToastSuccess({ title: "Create board succeed!" }));
      } else if (createBoardResult.error) {
        dispatch(createToastSuccess({ title: "Create board failed!" }));
      }
      navigate("/profile");
    }
  }, [createBoardResult]);

  useEffect(() => {
    if (editBoardResult) {
      if (editBoardResult.success) {
        dispatch(createToastSuccess({ title: "Edit board succeed!" }));
      } else if (editBoardResult.error) {
        dispatch(createToastSuccess({ title: "Edit board failed!" }));
      }
      navigate("/profile");
    }
  }, [editBoardResult]);

  useEffect(() => {
    if (deleteBoardResult) {
      if (deleteBoardResult.success) {
        dispatch(createToastSuccess({ title: "Delete board succeed!" }));
      } else if (deleteBoardResult.error) {
        dispatch(createToastSuccess({ title: "Delete board failed!" }));
      }
      navigate("/profile");
    }
  }, [deleteBoardResult]);

  const initialValues: CreateBoard = {
    name: "",
    description: "",
    visibility: 1,
    invisibility: 0
  };
  const [params, setParams] = useState(initialValues);
  const handleCreate = () => {
    if (edit) {
      const newParams: EditingBoard = {
        ...params,
        boardId: boardId as unknown as number
      };
      dispatch(editingBoard(newParams));
    } else {
      dispatch(createBoard(params));
    }
  };

  const handleDelete = () => {
    dispatch(
      deleteBoard({ boardId: boardId as unknown as number } as DeleteBoard)
    );
  };
  return (
    <div>
      <div className="create-header">
        <Back className="back-icon" onClick={() => navigate(-1)} />
        <div className="create-name">
          {edit ? "Chỉnh sửa bảng" : "Tạo bảng"}
        </div>
        <button
          className="create-button"
          disabled={!params.name}
          onClick={handleCreate}
        >
          {edit ? "Chỉnh sửa" : "Tạo"}
        </button>
      </div>
      <form className="create-content">
        <div>Tên bảng *</div>
        <input
          type="text"
          placeholder="Thêm"
          className="create-input"
          value={params.name}
          onChange={(value) =>
            setParams({ ...params, name: value.target.value })
          }
        />
        <div>Mô tả bảng *</div>
        <input
          type="text"
          placeholder="Thêm mô tả"
          className="create-input des"
          value={params.description}
          onChange={(value) =>
            setParams({ ...params, description: value.target.value })
          }
        />
        <div className="visi">
          <div>Giữ bí mật bảng</div>
          <div className={`checkbox ${params.invisibility ? "" : "hidden"}`}>
            <input
              type="checkbox"
              className="checkbox-bg"
              value={params.visibility}
              onChange={() => {
                setParams({
                  ...params,
                  visibility: params.invisibility === 1 ? 1 : 0,
                  invisibility: params.invisibility === 1 ? 0 : 1
                });
              }}
            />
            <div className="checkbox-btn"></div>
          </div>
        </div>
      </form>
      {edit && (
        <>
          <button className="create-button" onClick={handleDelete}>
            Chỉnh sửa
          </button>
          <div>
            Xóa bảng này và tất cả các Ghim trên đó mãi mãi. Bạn không thể hoàn
            tác!
          </div>
        </>
      )}
    </div>
  );
};

export default CreateBoard;
