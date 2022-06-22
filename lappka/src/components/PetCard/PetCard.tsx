import React from 'react';
import PetDetails from "./PetDetails/PetDetails";

import './PetCard.scss';

interface cardProps {
    image: string, //PNG Image Url
    name: string,
    breed: string,
    genderIcon: string, //SVG Image Url
    age: string,
    color: string,
    weight: string,
    sterilization: string
}

const PetCard:React.FC<cardProps> = (props) => {
    return (
        <div className='pet-container'>
            <div className='pet-image-container'>
                <img src={props.image} alt={props.name}/>
            </div>
            <PetDetails {...props}/>
        </div>
    );
}

export default PetCard;