import React from 'react';
import './NavigationItems.sass'
import {NavLink} from "react-router-dom";

const NavigationItems = (props) => {
    return (
        <div>
            <ul className="NavigationItems">
                <li><NavLink to="/" exact>Burger Builder</NavLink></li>
                <li><NavLink to="/orders">Checkout</NavLink></li>
            </ul>
        </div>
    );
};

export default NavigationItems;