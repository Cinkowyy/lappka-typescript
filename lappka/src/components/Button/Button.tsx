import React from "react";

interface buttonProps {
  text: string;
  type: string;
}

const PrimaryButton: React.FC<buttonProps> = ({ text, type }) => {
  return <button className={`btn ${type}`}>{text}</button>;
};

export default PrimaryButton;
