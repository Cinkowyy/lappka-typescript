import { useState } from "react";
import { Outlet, Route, Routes } from "react-router";

import Sidebar from "../../components/Sidebar/Sidebar";
import Topbar from "../../components/Topbar/Topbar";
import Dashboard from "./Dashboard/Dashboard";
import Other from "../../components/Other/Other";

import profilePicture from "../../img/profile-img.svg";

const Panel = () => {
  const [title, setTitle] = useState("Dashboard");

  const handleSetTitle = (title: string) => {
    setTitle(title);
  };

  return (
    <div className="panel-container">
      <Sidebar setTitle={handleSetTitle} />
      <div className="panel-content-container">
        <Topbar
          title={title}
          profilePicture={profilePicture}
          username="Robert G."
          company="Nazwa Firmy"
        />
        <Outlet />
      </div>
    </div>
  );
};

export default Panel;
