import React from "react";
import logo from "../Offline/logo.png";
import "./styles.scss";

const Offline = ({ inLogin }: { inLogin?: boolean }) => {
  return (
    <div className="offline-wr">
      {!inLogin ? (
        <div className="offline">
          <svg
            className="gUZ R19 U9O kVc"
            height="16"
            width="16"
            viewBox="0 0 24 24"
            aria-label="trực tuyến"
            role="img"
          >
            <path d="M19.1 7.5c-.2-.7-.6-1.3-1-1.8l2.7-2.8-1.5-1.5L16.7 4c-1.4-1.1-3-1.6-4.7-1.6-3.3 0-6.2 2-7.2 5.2-2.9.7-4.8 3.1-4.8 6 0 2 1 3.9 2.5 5L.1 21.1l1.6 1.5 2.9-3c.3.1.7.2 1 .2H18.3c3.2-.2 5.7-2.9 5.7-6.2.1-3-2-5.5-4.9-6.1zm-2.6-.2c.2.4.4.7.5 1.1l.4 1.2 1.2.2c1.9.3 3.3 1.9 3.3 3.9s-1.5 3.8-3.6 4H6.6l9.9-10.4zM2.3 13.6c0-1.8 1.4-3.5 3.1-3.9l1.1-.2.3-1.1c.7-2.3 2.8-3.8 5.1-3.8 1.2 0 2.2.4 3.2 1.1L4.1 17c-1.1-.8-1.8-2-1.8-3.4z"></path>
          </svg>{" "}
          Bạn đang ngoại tuyến! Kiểm tra kết nối Internet của bạn.
        </div>
      ) : (
        <div className="offline-login">
          <img src={logo} alt="logo" className="logo-off" />
          <div>Không có intenet</div>
        </div>
      )}
    </div>
  );
};

export default Offline;
