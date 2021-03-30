import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import './OrderButtons.css';

const OrderButton = () => {
    return(
        <div className='OrderButton'>
            <div className='ButtonOneStyle'>
                <CustomButton 
                customButtonPosition = {style.ButtonOneContainer}
                customURLToNavigate='#'
                customTextToDisplay = 'Custom Order' 
                />
            </div>
            <div className='ButtonTwoStyle'>
                <CustomButton customButtonPosition = {style.ButtonTwoContainer}
                customButtonText = {style.ButtonTwoText}
                customURLToNavigate='#'
                customTextToDisplay = 'Existing Inventory'
                />
            </div>
        </div>
    );
}

const style= {
    ButtonTwoContainer:{
        backgroundColor:'white',
        textTransform:'uppercase'
    },
    ButtonTwoText:{
        color:'black'
    },
    ButtonOneContainer:{
        textTransform:'uppercase'
    },
}

export default OrderButton;