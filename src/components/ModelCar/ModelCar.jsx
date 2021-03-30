import React from 'react';
import ModelName from '../ModelName/ModelName';
import OrderButton from '../OrderButtons/OrderButtons';
import './ModelCar.css';

class ModelCar extends React.Component{
    render(){
        return(
            <div className='ModelCar'>
                <div className='ModelNamePosition'>
                   <ModelName />
                </div>
                <div className='OrderButtonPosition'>
                    <OrderButton />
                </div>
            </div>
        );
    }
}

export default ModelCar;