import * as React from 'react';
import { connect } from 'react-redux';

import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends React.Component {

    componentDidMount() {
        this.props.OnFetchOrders(this.props.token, this.props.userId);
    }

    render() {
        let orders = <Spinner />
        if (!this.props.loading) {
            orders = this.props.orders.map(order => {
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
        OnFetchOrders: (token,userId) => dispatch(actions.fetchOrders(token,userId)),
        deleteOrder: (id) => dispatch(actions.deleteOrder(id))
    }
}

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token,
        userId:state.auth.userId
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));