import React from "react";

import Detail from "./Detail/Detail";
import Button from "../../Button/Button";

interface detailProps {
  detailName: string;
  value: string;
}

interface petDataProps {
  image: string; //PNG Image Url
  name: string;
  breed: string;
  genderIcon: string; //SVG Image Url
  details: detailProps[];
}

const PetDetails: React.FC<petDataProps> = (props) => {
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
        <Button text="Edytuj" variant="details" />
      </div>
    </div>
  );
};

export default PetDetails;
