import React, { useState, useEffect } from "react";
import Header from "components/Header";
import "./styles.scss";
import { useViewport } from "hooks";
import BoardCard from "components/BoardCard";
import Modal from "components/Modal";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux-saga/reducers";
import { getBoards, getProfile } from "./actions";

export interface Profile {
  id: number;
  username: string;
  displayName: string;
  avatarUrl: string;
  createdAt: string;
  updatedAt: string;
}

export interface BoardResponse {
  id: number;
  name: string;
  description: string;
  visibility: number;
  createdAt: string;
  updateAt: string;
  thumbnail: string | null;
}

export interface BoardsResponse {
  data: BoardResponse[];
  pageIndex: number;
  pageSize: number;
  total: number;
}

export interface BoardsRequest {
  userId: number;
}

const Profile = () => {
  const dispatch = useDispatch();

  const getProfileResult = useSelector(
    (state: State) => state.getProfileResult
  );
  const profile = getProfileResult?.response as unknown as Profile;

  const getBoardsResult = useSelector((state: State) => state.getBoardsResult);
  const boards = getBoardsResult?.response as unknown as BoardsResponse;

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (profile) dispatch(getBoards({ userId: profile.id } as BoardsRequest));
  }, [profile]);

  const [active, setActive] = useState(1);
  const [open, setOpen] = useState(false);

  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 900 ? viewPort.width / 2 : viewPort.width / 3;

  return (
    <div className="profile">
      <Header setIsOpen={setOpen} />
      {open && <Modal setIsOpen={setOpen} inProfile />}
      {profile && (
        <>
          <img
            src={profile.avatarUrl}
            className="avatar"
            alt={profile.username}
          ></img>
          <div className="user-name">{profile.displayName}</div>
          <div className="email">{profile.username}</div>
          <div className="rela">0 người theo dõi · 0 người đang theo dõi</div>
        </>
      )}
      <div className="share">Chia sẻ</div>
      <div className="boards">
        <div
          className={`board ${active === 0 ? "active" : ""}`}
          onClick={() => setActive(0)}
        >
          Đã tạo
        </div>
        <div
          className={`board ${active === 1 ? "active" : ""}`}
          onClick={() => setActive(1)}
        >
          Đã lưu
        </div>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", paddingBottom: "72px" }}>
        {boards &&
          boards.data &&
          boards.data.map((board) => (
            <BoardCard
              style={{ width: itemWidth }}
              key={board.id}
              props={board}
            />
          ))}
      </div>
    </div>
  );
};

export default Profile;
