import React from 'react';
import Burger from "../../Burger/Burger";

const CheckoutSummary = (props) => {
    return (
        <div className="CheckoutSummary">
            <h1>We hope it tastes well!</h1>
            <div>
                <Burger ingredients={props.ingredients} />
            </div>
            <button className="Button Danger" onClick={props.checkoutCanceled}>Cancel</button>
            <button className="Button Success" onClick={props.checkoutContinued}>Continue</button>
        </div>
    );
};

export default CheckoutSummary;