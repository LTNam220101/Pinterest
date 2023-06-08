import React from "react";
import ImageCard from "components/ImageCard";
import { useViewport } from "hooks";
import { Masonry } from "masonic";
import "./styles.scss";

const Feed = () => {
  const viewPort = useViewport();
  const itemWidth =
    viewPort.width <= 600
      ? viewPort.width / 2
      : viewPort.width / (Math.floor(viewPort.width / 200));
  return (
    <div className="masonic">
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

export default Feed;
