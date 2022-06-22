import React from 'react';

import Detail from "./Detail/Detail";
import './PetDetails.scss';
import DetailsButton from "./DetailsButton/DetailsButton";

interface detailsProps {
    image: string, //PNG Image Url
    name: string,
    breed: string,
    genderIcon: string, //SVG Image Url
    age: string,
    color: string,
    weight: string,
    sterilization: string
}

const PetDetails:React.FC<detailsProps> = (props) => {
    return (
        <div className='pet-details'>
            <div className='basic'>
                <div className='group'>
                    <p className='pet-name'>{props.name}</p>
                    <p className='pet-breed'>{props.breed}</p>
                </div>
                <img src={props.genderIcon} alt="Piesek"/>
            </div>

            <div className='specific'>
                <Detail value={props.age} name='Wiek'/>
                <Detail value={props.color} name='Kolor'/>
                <Detail value={props.weight} name='Waga'/>
                <Detail value={props.sterilization} name='Sterylizacja'/>
            </div>
            <div className='btn-wrapper'>
                <DetailsButton text='Edytuj'/>
            </div>
        </div>
    );
}

export default PetDetails;