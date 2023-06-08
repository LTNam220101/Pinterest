import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "components/BottomNavigation";
import "./styles.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSelector } from "react-redux";
import { State } from "redux-saga/reducers";

const Home = () => {
  const toastResult = useSelector((state: State) => state.toastResult);
  console.log(toastResult);
  useEffect(() => {
    if (toastResult) {
      toast((toastResult as unknown as Record<string, string>).title, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  }, [toastResult]);
  return (
    <div className="Pinhome">
      <Outlet />
      <ToastContainer />
      <BottomNavigation />
    </div>
  );
};

export default Home;
