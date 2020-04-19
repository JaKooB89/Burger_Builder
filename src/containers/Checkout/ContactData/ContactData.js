import React, {Component} from 'react';
import './ContactData.sass';
import axios from "../../../axios";
import Spinner from "../../../components/UI/Spinner/Spinner";

class ContactData extends Component {
    state = {
        name: '',
        address: {
            street: '',
            postCode: ''
        },
        email: '',
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            costumer: {
                name: 'Jacob',
                address: {
                    street: 'Main Road',
                    postCode: 'ML14DH',
                    country: 'UK'
                },
                delivery: 'Priority'
            }
        };
        axios
            .post('orders.json', order)
            .then(
                r => {
                    this.setState({loading: false});
                    this.props.history.push('/');
                })
            .catch(
                e => this.setState({loading: false})
            );
    }

    render() {
        let form = (
            <form action="">
                <input type="text" name="name" placeholder="Your Name"/>
                <input type="email" name="email" placeholder="Your Email"/>
                <input type="text" name="street" placeholder="Your Address"/>
                <input type="text" name="postCode" placeholder="Your Postcode"/>
                <button className="Button Success" onClick={this.orderHandler}>Order</button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner/>;
        }
        return (
            <div className="ContactData">
                <h4>Enter your contact details.</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;