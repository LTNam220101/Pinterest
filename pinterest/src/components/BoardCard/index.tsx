import React, { CSSProperties } from "react";
import { useNavigate } from "react-router-dom";
import { BoardResponse } from "components/Profile";
import "./styles.scss";

const BoardCard = ({
  style,
  props
}: {
  style: CSSProperties;
  props: BoardResponse;
}) => {
  const navigate = useNavigate();
  return (
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
  );
};

export default BoardCard;
