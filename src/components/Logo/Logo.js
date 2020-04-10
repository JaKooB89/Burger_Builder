import React from 'react';
import burgerLogo from '../../assets/images/logo.png'

const Logo = (props) => {
    return (
        <div className="LogoWrapper">
            <img src={burgerLogo} alt="Burger Builder"/>
        </div>
    );
};

export default Logo;