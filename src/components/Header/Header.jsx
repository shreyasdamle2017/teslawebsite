import React from 'react';
import Logo from '../Logo/Logo';
import MenuAccount from '../MenuAccount/MenuAccount';
import ModelMenu from '../ModelMenu/ModelMenu';
import './Header.css';

class Header extends React.Component{
    render(){
        return(
            <div className='Header'>
                <div className='LogoPosition'>
                    <Logo />
                </div>
                <div className='ModelMenuPosition'>
                    <ModelMenu />
                </div>
                <div className='MenuAccountPosition'>
                    <MenuAccount />
                </div>
            </div>
        );
    }
}

export default Header;