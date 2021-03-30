import React from 'react';
import './CustomButton.css';

class CustomButton extends React.Component{
    constructor({customButtonPosition, customButtonText,customTextToDisplay, customURLToNavigate}){
        super();
        this.state={
            buttonPosition:customButtonPosition,
            buttonTextStyle:customButtonText,
            textToDisplay:customTextToDisplay,
            customURL:customURLToNavigate
        }
    }
    render(){
        const {buttonPosition, buttonTextStyle,textToDisplay, customURL} = this.state;
        return(
            <div>
                <a href={customURL}>                    
                    <button 
                    style={buttonPosition}
                    className='buttonContainer'>
                        <span  
                        style={buttonTextStyle}
                        className='buttonTextStyle'>
                            {textToDisplay}
                        </span>
                    </button>
                </a>
            </div>
        );
    }
}

export default CustomButton;