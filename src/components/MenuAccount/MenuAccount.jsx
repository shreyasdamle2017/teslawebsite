import React from 'react';
import './MenuAccount.css'

const MenuAccount = () => {
    return(
        <div className='MenuAccount'>
            <ol className='MenuAccountList'>
                <li className='MenuAccountItemPosition'>
                    <a className='MenuAccountName' href=''>
                        SHOP
                    </a>
                </li>
                <li className='MenuAccountItemPosition'>
                    <a className='MenuAccountName' href=''>
                        Tesla Account
                    </a>
                </li>
                <li className='MenuAccountItemPosition'>
                    <a className='MenuAccountName' href=''>
                        <div className='Hamburger'></div>
                        <div className='Hamburger'></div>
                        <div className='Hamburger'></div>
                    </a>
                </li>
            </ol>
        </div>
    );
}

export default MenuAccount;