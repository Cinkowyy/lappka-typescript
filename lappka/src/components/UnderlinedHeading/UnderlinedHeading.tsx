import React from "react";

const UnderlinedHeading: React.FC<{ text: string }> = ({ text }) => {
  return <h1 className="underlined">{text}</h1>;
};

export default UnderlinedHeading;
