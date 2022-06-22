import React from 'react';
import './PrimaryButton.scss';

const PrimaryButton:React.FC<{text:string}> = ({text}) => {
    return (
        <button className='primary-btn'>{text}</button>
    );
}

export default PrimaryButton;