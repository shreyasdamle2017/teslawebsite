import React from 'react';
import './ModelMenu.css';

class ModelMenu extends React.Component{
    constructor(){
        super();
        const CAR_DATA = [
            {
                id:1,
                carModelName: 'Model S',
                carModelURL: 'https://www.tesla.com/models',
                carModelImage: ''
            },
            {
                id:2,
                carModelName: 'Model 3',
                carModelURL: 'https://www.tesla.com/model3',
                carModelImage: ''
            },
            {
                id:3,
                carModelName: 'Model X',
                carModelURL: 'https://www.tesla.com/modelx',
                carModelImage: ''
            },
            {
                id:4,
                carModelName: 'Model Y',
                carModelURL: 'https://www.tesla.com/modely',
                carModelImage: ''
            },
            {
                id:5,
                carModelName: 'Solar Roof',
                carModelURL: 'https://www.tesla.com/solarroof',
                carModelImage: ''
            },
            {
                id:6,
                carModelName: 'Solar Panels',
                carModelURL: 'https://www.tesla.com/solarpanels',
                carModelImage: ''
            },
        ];
        this.state = {
            cardata : CAR_DATA 
        }
    }
    render(){
        const {cardata} = this.state;
        return(
            <div className='ModelMenu'>
                <ol className = 'ModelMenuNameList'>
                    {
                    cardata.map((car) => (
                        <li className='ModelMenuNamePosition' key={car.id}>
                            <a className='ModelMenuName' href={car.carModelURL}>
                                {car.carModelName}
                            </a>
                        </li>
                    ))
                    }
                </ol>
                {/* {cardata.map((car) => (
                    <div>
                        <a href={car.carModelURL}>
                            {car.carModelName.toUpperCase()}
                        </a>
                    </div>
                ))
                } */}
            </div>
        );
    }
}

export default ModelMenu;