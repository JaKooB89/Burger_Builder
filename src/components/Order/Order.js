import React from 'react';
import './Order.sass'

const Order = (props) => {
    const ingredients = [];
    for (let ingredientName in props.ingredients) {
        ingredients.push({name: ingredientName, amount: props.ingredients[ingredientName]})
    }
    const ingredientOutput = ingredients.map(ig => {
        return <span key={ig.name}>{ig.name} <span>{ig.amount}</span></span>;
    })
    console.log(props.client);
    return (
        <div className="Order">
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong>£{props.price.toFixed(2)}</strong></p>
        </div>
    );
};

export default Order;