import React from 'react';
import './BuildControls.sass';
import BuildControl from "./BuildControl/BuildControl";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'},
];

const BuildControls = (props) => {
    return (
        <div className="BuildControls">
            <p>Current Price: <strong>£{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl => (
                <BuildControl key={ctrl.label} label={ctrl.label} added={() => props.ingredientAdded(ctrl.type)} removed={() => props.ingredientRemoved(ctrl.type)} disabled={props.disabled[ctrl.type]} />
            ))}
            <button className="OrderButton" disabled={!props.purchasable} onClick={props.ordered}>Order Now</button>
        </div>
    );
};

export default BuildControls;