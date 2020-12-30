import * as React from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {

    componentDidMount() {
        // console.log('beforefetch');
        this.props.OnFetchOrders();
        // console.log('afterfetch');
    }

    render() {
        let orders = <Spinner />
        // console.log('render');
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
                // console.log('testing', order)
                return (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={order.price}
                        customerData={order.orderData}
                        btnClick={() => this.props.deleteOrder(order.id)}
                    />
                );
            })
        }
        return (
            <div>
                {orders}
            </div>
        );
    };
};
const mapDispatchToProps = dispatch => {
    return {
        OnFetchOrders: () => dispatch(actions.fetchOrders()),
        deleteOrder: (id) => dispatch(actions.deleteOrder(id))
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));