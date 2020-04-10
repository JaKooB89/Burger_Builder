import React from 'react';
import './NavigationItems.sass'

const NavigationItems = (props) => {
    return (
        <div>
            <ul className="NavigationItems">
                <li><a href="/" className="active">Burger Builder</a></li>
                <li><a href="/">Checkout</a></li>
            </ul>
        </div>
    );
};

export default NavigationItems;