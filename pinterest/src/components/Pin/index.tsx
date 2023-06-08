import React, { useEffect } from "react";
// import { Masonry } from "masonic";
// import { useViewport } from "hooks";
import Header from "components/Header";
import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "redux-saga/reducers";
import { getPin } from "./actions";
import { useParams } from "react-router-dom";
import { PinResult } from "components/Board";

export interface PinRequest {
  pinId: number;
}

const Pin = () => {
  const { pinId } = useParams();
  const dispatch = useDispatch();

  const getPinResult = useSelector((state: State) => state.getPinResult);
  const pin = getPinResult?.response as unknown as PinResult;

  useEffect(() => {
    if (pinId) {
      dispatch(getPin({ pinId: Number(pinId) } as PinRequest));
    }
  }, []);

  // const viewPort = useViewport();
  // const itemWidth =
  //   viewPort.width <= 600
  //     ? viewPort.width / 2
  //     : viewPort.width / Math.floor(viewPort.width / 200);

  return (
    <div className="pin">
      <Header inPin />
      {pin && <img src={pin.url} alt={pin.name} className="pin-image" />}
      <div className="img-attribute">
        <div className="img-name">{pin && pin.name}</div>
        {/* <div className="img-des">
          wsuehrftiuwedshnfbvkjusdhfiusehfgksjdnfbksjef
        </div> */}
      </div>
      <div className="user-attributes">
        <img
          src="https://i.pinimg.com/736x/36/41/76/36417642b0d5781e17cb52d61334aadb.jpg"
          alt="123"
          className="user-img"
        />
        <div className="user-attribute">
          <div className="user-name">LTNam</div>
          <div className="user-follower">123 Người theo dõi</div>
        </div>
        <button className="follow-btn">Theo dõi</button>
      </div>
      {/* <div className="other">Các ghi khác tương tự</div> */}
      {/* <Masonry
        items={data}
        columnGutter={8} // Set khoảng cách giữa các column
        columnWidth={itemWidth - 24} // Set chiều rộng tối thiểu
        overscanBy={5} // Giá trị để render trước khi scroll tới
        render={ImageCard} // Grid item của component
      /> */}
    </div>
  );
};

export default Pin;
