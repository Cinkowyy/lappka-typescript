import React from "react";
import PetDetails from "./PetDetails/PetDetails";
import { cardProps } from "interfaces";

const PetCard: React.FC<cardProps> = (props) => {
  return (
    <div className="pet-container">
      <div className="pet-image-container">
        <img src={props.image} alt={props.name} />
      </div>
      <PetDetails {...props} />
    </div>
  );
};

export default PetCard;
