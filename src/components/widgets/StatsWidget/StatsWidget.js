import React from 'react';
import './StatsWidget.css';

function StatsWidget({stat, statName}){
    return(
        <div className='stats-widget'>
            <h3>{stat}</h3>
            <p>{statName}</p>
        </div>
    )
}

export default StatsWidget;