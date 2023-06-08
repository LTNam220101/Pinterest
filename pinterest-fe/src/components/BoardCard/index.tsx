import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { BoardResponse } from "components/Profile";
import { BoardHasPin } from "components/Pin";
import "./styles.scss";

const BoardCard = ({
  style,
  props,
  boardInPin
}: {
  style: CSSProperties;
  props?: BoardResponse;
  boardInPin?: BoardHasPin;
}) => {
  const navigate = useNavigate();

  const handleWatchProfile = (id?: number) => {
    if (id) navigate(`/${id}`);
  };
  return props ? (
    <div
      style={style}
      className="board"
      onClick={() => {
        navigate(`${props.id}`);
      }}
    >
      <img
        src={
          props.thumbnail
            ? props.thumbnail
            : "https://i.pinimg.com/236x/83/44/79/8344799ccad771b0a1b227ff2e76586f.jpg"
        }
        alt=""
        className="img"
      />
      <div className="name">{props.name}</div>
      <div className="count">{props.description}</div>
    </div>
  ) : (
    <div style={style} className="board">
      <img
        src={
          boardInPin?.thumbnail
        }
        alt=""
        className="img"
        onClick={() => {
          navigate(`/${boardInPin?.user?.id}/${boardInPin?.id}`);
        }}
      />
      <div
        className="name"
        onClick={() => {
          navigate(`/${boardInPin?.user?.id}/${boardInPin?.id}`);
        }}
      >
        {boardInPin?.name}
      </div>
      <div
        className="user-attributes"
        onClick={() => handleWatchProfile(boardInPin?.user?.id)}
      >
        <img src={boardInPin?.user?.avatarUrl} alt="123" className="user-img" />
        <div className="user-attribute">
          <div className="user-name">{boardInPin?.user?.displayName}</div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;
