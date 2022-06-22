import React from "react";

const Other: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="other-container">
      <p>Tutaj kiedyś będ{text}</p>
    </div>
  );
};

export default Other;
