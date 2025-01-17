import React, {Component} from 'react';
import Order from "../../components/Order/Order";
import axios from "../../axios";
import WithErrorHandling from "../../hoc/WithErrorHandling/WithErrorHandling";

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('orders.json').then(r => {
            const fetchedOrders = [];
            for (let key in r.data) {
                fetchedOrders.push({
                    ...r.data[key],
                    id: key
                });
            }
            this.setState({loading: false, orders: fetchedOrders});
        }).catch(e => {
            this.setState({loading: false});
        })
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                ))}
            </div>
        );
    }
}

export default WithErrorHandling(Orders, axios);