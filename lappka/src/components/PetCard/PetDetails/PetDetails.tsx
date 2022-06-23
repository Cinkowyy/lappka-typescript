import React from "react";

import Detail from "./Detail/Detail";
import Button from "../../Button/Button";

import { cardProps } from "interfaces";

const PetDetails: React.FC<cardProps> = (props) => {
  return (
    <div className="pet-details">
      <div className="basic">
        <div className="group">
          <p className="pet-name">{props.name}</p>
          <p className="pet-breed">{props.breed}</p>
        </div>
        <img src={props.genderIcon} alt="Piesek" />
      </div>

      <div className="specific">
        {props.details.map((detail) => {
          return <Detail detailName={detail.detailName} value={detail.value} />;
        })}
      </div>
      <div className="btn-wrapper">
        <Button text="Edytuj" type="details" />
      </div>
    </div>
  );
};

export default PetDetails;
