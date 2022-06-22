import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../img/logo.svg";
import OptionLink from "./OptionLink";
import DashboardIcon from "../../img/SvgComponents/DashboardIcon";
import MessageIcon from "../../img/SvgComponents/MessageIcon";
import PetsIcon from "../../img/SvgComponents/PetsIcon";
import LoveIcon from "../../img/SvgComponents/LoveIcon";
import LogoutIcon from "../../img/SvgComponents/LogoutIcon";

interface sidebarProps {
  setTitle: (title: string) => void;
}

const Sidebar: React.FC<sidebarProps> = ({ setTitle }) => {
  const navigate = useNavigate();

  const navigateToLoginPage = () => {
    navigate("/");
  };

  return (
    <div className="sidebar">
      <img src={logo} alt="Łappka" className="logo" />
      <nav>
        <NavLink to="/panel/dashboard" onClick={() => setTitle("Dashboard")}>
          <OptionLink icon={<DashboardIcon />} text={"Dashboard"} />
        </NavLink>
        <NavLink to="/panel/wiadomosci" onClick={() => setTitle("Wiadomości")}>
          <OptionLink icon={<MessageIcon />} text={"Wiadomości"} />
        </NavLink>
        <NavLink to="/panel/karty" onClick={() => setTitle("Karty zwierząt")}>
          <OptionLink icon={<PetsIcon />} text={"Karty zwierząt"} />
        </NavLink>
        <NavLink
          to="/panel/wolontariat"
          onClick={() => setTitle("Wolontariat")}
        >
          <OptionLink icon={<LoveIcon />} text={"Wolontariat"} />
        </NavLink>
      </nav>
      <OptionLink
        onClick={navigateToLoginPage}
        icon={<LogoutIcon />}
        text={"Wyloguj się"}
      />
    </div>
  );
};

export default Sidebar;
