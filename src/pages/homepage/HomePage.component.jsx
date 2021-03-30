import React from 'react';
import './HomePage.styles.css';

import Header from '../../components/Header/Header';
import ModelCar from '../../components/ModelCar/ModelCar';

class HomePage extends React.Component{
    render() {
        return(
            <div className='HomePage' style={{backgroundImage:`url('./BackgroundImage.jpg')`, backgroundSize:'cover'}}>
                <div className='HeaderPosition'>
                    <Header />
                </div>
                <div className='ModelCarPosition'>
                    <ModelCar />
                </div>
            </div>
        );
    }
}

export default HomePage;