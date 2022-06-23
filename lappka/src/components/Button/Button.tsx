import React from "react";

interface buttonProps {
  text: string;
  variant: "primary" | "details";
}

const PrimaryButton: React.FC<buttonProps> = ({ text, variant }) => {
  return <button className={`btn btn-${variant}`}>{text}</button>;
};

export default PrimaryButton;
