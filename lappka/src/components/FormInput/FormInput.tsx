import React, { useState } from "react";

interface inputProps {
  icon: string; //SVG Image Path
  type: string;
  placeholder: string;
}

const FormInput: React.FC<inputProps> = ({ icon, type, placeholder }) => {
  return (
    <div className={"input-wrapper"}>
      <img src={icon} alt={placeholder} />
      <input type={type} placeholder={placeholder} />
    </div>
  );
};

export default FormInput;
