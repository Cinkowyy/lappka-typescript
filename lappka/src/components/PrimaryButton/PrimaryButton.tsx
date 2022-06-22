import React from "react";

const PrimaryButton: React.FC<{ text: string }> = ({ text }) => {
  return <button className="primary-btn">{text}</button>;
};

export default PrimaryButton;
