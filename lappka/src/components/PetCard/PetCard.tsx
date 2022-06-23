import React from "react";
import PetDetails from "./PetDetails/PetDetails";

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

const PetCard: React.FC<petDataProps> = (props) => {
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
