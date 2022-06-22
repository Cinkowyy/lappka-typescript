import React from 'react';
import './UnderlinedHeading.scss';

const UnderlinedHeading:React.FC<{text:string}> = ({text}) => {
    return (
        <h1 className="underlined">{text}</h1>
    );
}

export default UnderlinedHeading;