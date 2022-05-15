import React from 'react';
import './BioInfo.css';

function BioInfo({icon,info}){
    return(
        <p>
            <i className={icon}></i> <span>{info}</span>
        </p>
    )
}

export default BioInfo;