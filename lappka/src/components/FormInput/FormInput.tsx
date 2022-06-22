import React, {useState} from 'react';
import './FormInput.scss';

interface inputProps {
    icon: string, //SVG Image Path
    type: string,
    placeholder: string
}

const FormInput:React.FC<inputProps> = ({icon, type, placeholder}) => {

    const [isFocused, setIsFocused] = useState(false);


    return (
        <div className={`input-wrapper ${isFocused?'focused':''}`}>
            <img src={icon} alt={placeholder}/>
            <input type={type} placeholder={placeholder} onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
        </div>
    );
}

export default FormInput;