import * as React from 'react';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';

class Orders extends React.Component {

    state = {
        orders: [],
        loading: true
    }

    componentDidMount() {
        axios.get('https://my-react-burger-1811-default-rtdb.firebaseio.com/orders.json')
            .then(res => {
                // console.log('Data fetched');
                const fetchedOrders = [];
                for (let key in res.data) {
                    fetchedOrders.push({
                        ...res.data[key],
                        id: key
                    });
                }
                this.setState({ loading: false, orders: fetchedOrders });
            })
            .catch(err => {
                this.setState({ loading: false });
            });
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => {
                    return (
                        <Order
                            key={order.id}
                            ingredients={order.ingredients}
                            price={order.price}
                        />
                    );
                })}
            </div>
        );
    };
};

export default withErrorHandler(Orders, axios);