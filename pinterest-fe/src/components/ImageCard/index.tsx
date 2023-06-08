import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Dot } from "assets/svg/dot.svg";
import Modal from "components/Modal";
import { PinResult } from "components/Board";
import "./styles.scss";

interface DataCard {
  index: number;
  width: number;
  data: PinResult;
}

const ImageCard = (data: DataCard) => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="card">
      {isOpen && <Modal setIsOpen={setIsOpen} pinId={data.data.id} src={data.data.url}/>}
      <img
        className="img"
        src={data.data.url}
        alt={data.data.filename}
        onClick={() => navigate(`/pin/${data.data.id}`)}
      />
      <div className="title-wrapper">
        <div className="title" onClick={() => navigate(`/pin/${data.data.id}`)}>
          {data.data.name}
        </div>
        <Dot onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
};

export default ImageCard;
