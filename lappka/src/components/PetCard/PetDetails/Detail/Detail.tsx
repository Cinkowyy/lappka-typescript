import React from 'react';

import './Detail.scss';

interface detailProps {
    value: string,
    name: string
}

const Detail:React.FC<detailProps> = ({value, name}) => {
    return (
        <div className='detail'>
            <p className='detail-value'>{value}</p>
            <p className='detail-name'>{name}</p>
        </div>
    );
}

export default Detail;