import { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./Panel.scss";

import profilePicture from "../../img/profile-img.svg";
import Topbar from "../../components/Topbar/Topbar";
import Dashboard from "./Dashboard/Dashboard";
import Other from "../../components/Other/Other";
import { Route, Routes } from "react-router";

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
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/wiadomosci" element={<Other text={"ą wiadomości"} />} />
          <Route path="/karty" element={<Other text={"ą karty zwierząt"} />} />
          <Route
            path="/wolontariat"
            element={<Other text={"zie wolontariat"} />}
          />
        </Routes>
      </div>
    </div>
  );
};

export default Panel;
