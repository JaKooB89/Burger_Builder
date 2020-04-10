import React, {Component, Fragment} from 'react';
import './OrderSummary.sass'

class OrderSummary extends Component {
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     console.log('did update')
    // }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey => {
            return <li key={igKey}>{igKey}: {this.props.ingredients[igKey]}</li>;
        });
        return (
            <Fragment>
                <h2>Your Order</h2>
                <p>A delicious burger with:</p>
                <ul className="OrderList">
                    {ingredientSummary}
                </ul>
                <p>Total Price: <strong>£{this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>
                <button className="Button Danger" onClick={this.props.purchaseCanceled}>Cancel</button>
                <button className="Button Success"  onClick={this.props.purchaseContinued}>Continue</button>
            </Fragment>
        );
    }
}

export default OrderSummary;