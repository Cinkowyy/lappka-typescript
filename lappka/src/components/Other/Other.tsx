import React from 'react';

import './Other.scss';

const Other:React.FC<{text:string}> = ({text}) => {
    return (
        <div className='other-container'>
            <p>Tutaj kiedyś będ{text}</p>
        </div>
    );
}

export default Other;