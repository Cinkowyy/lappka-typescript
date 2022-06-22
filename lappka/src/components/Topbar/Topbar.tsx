import React from "react";

interface topbarProps {
  title: string;
  profilePicture: string; //SVG IMage Url
  username: string;
  company: string;
}

const Topbar: React.FC<topbarProps> = ({
  title,
  profilePicture,
  username,
  company,
}) => {
  return (
    <div className="top-bar">
      <p className="top-bar-title">{title}</p>
      <div className="user">
        <img src={profilePicture} alt="Zdjęcie profilowe" />
        <div className="user-info">
          <p className="username">{username}</p>
          <p className="company-name">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
