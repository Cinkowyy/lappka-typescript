import React, { ReactNode } from "react";

interface linkProps {
  onClick?: () => void;
  icon: ReactNode; //SVG Image Component
  text: string;
}

const OptionLink: React.FC<linkProps> = ({ onClick, icon, text }) => {
  return (
    <div className="link" onClick={onClick}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default OptionLink;
