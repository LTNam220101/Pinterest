import React, { useState, useEffect } from "react";
import { ReactComponent as Home } from "assets/svg/home.svg";
import { ReactComponent as Search } from "assets/svg/search.svg";
import { ReactComponent as Comment } from "assets/svg/comment.svg";
import { ReactComponent as Profile } from "assets/svg/profile.svg";
import "./styles.scss";
import { useNavigate } from "react-router-dom";

export enum Tabs {
  Home = "",
  Search = "search",
  Noti = "notifications",
  Profile = "profile"
}

const tabs = [
  {
    component: Home,
    path: Tabs.Home
  },
  {
    component: Search,
    path: Tabs.Search
  },
  {
    component: Comment,
    path: Tabs.Noti
  },
  {
    component: Profile,
    path: Tabs.Profile
  }
];

const BottomNavigation = () => {
  const navigate = useNavigate();
  const [state, setState] = useState(0);

  return (
    <div className="bottom">
      {tabs.map((tab, i) => {
        return (
          <tab.component
            key={i}
            className={state === i ? "active" : "inactive"}
            onClick={() => {
              setState(i);
              navigate(tab.path);
            }}
          />
        );
      })}
    </div>
  );
};

export default BottomNavigation;
