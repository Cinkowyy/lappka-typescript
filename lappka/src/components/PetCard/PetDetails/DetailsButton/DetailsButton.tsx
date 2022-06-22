import React from 'react';

import './DetailsButton.scss';
const DetailsButton:React.FC<{text:string}> = ({text}) =>{
    return (
        <button className='details-button'>{text}</button>
    );
}

export default DetailsButton;