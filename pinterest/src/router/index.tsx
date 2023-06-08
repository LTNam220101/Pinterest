import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes
} from "react-router-dom";
import Home from "screens/Home";
import Login from "screens/Login";
import Register from "screens/Register";
import Feed from "components/Feed";
import Profile from "components/Profile";
import Search from "components/Search";
import Board from "components/Board";
import CreateBoard from "./../components/CreateBoard/index";
import UpdateBoard from "./../components/UpdateBoard/index";
import Pin from "components/Pin";

const ProtectedRoute = ({ user, redirectPath = "/login", children }: any) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

function Router() {
  const user = localStorage.getItem("refreshToken");
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <ProtectedRoute user={user}>
              <Home />
            </ProtectedRoute>
          }
        >
          <Route path="" element={<Feed />} />
          <Route path="search" element={<Search />} />
          <Route path="notification" element={<Search />} />
          <Route path="profile" element={<Profile />} />
          <Route path="profile/:boardId" element={<Board />} />
          <Route path="board/create" element={<CreateBoard />} />
          <Route path="board/update" element={<UpdateBoard />} />
          <Route path="board/:boardId/update" element={<UpdateBoard />} />
          <Route path="board/:boardId/edit" element={<CreateBoard edit />} />
          <Route path="pin/:pinId" element={<Pin />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
