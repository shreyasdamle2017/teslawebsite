import React from 'react';
import './ModelName.css';

const ModelName = () => {
    return(
        <div className='ModelNameContainer'>
            <div className = 'ModelNamePositionStyle'>
                <span className='ModelNameTextStyle'>Model S</span>
            </div>
            <div className = 'ModelSubNamePositionStyle'>
                <span className='ModelSubNameTextStyle'>Online For </span>
                <a className='DeliveryStyle' href='#'>Touchless Delivery</a>
            </div>
        </div>
    );
}

export default ModelName;
