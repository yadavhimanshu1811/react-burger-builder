import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Aux from '../../HOC/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from '../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../HOC/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

const burgerBuilder = props => {
    const [purchasing, setPurchasing] = useState(false);

    useEffect(() => {
        props.onInitIngredients();
    }, []);

    const updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum, element) => {
                return sum + element;
            })
        return sum > 0;
    }

    const purchaseHandler = () => {    //What happens without fat arrow function???
        if (props.isAuth) {
            setPurchasing(true);
        } else {
            props.onSetAuthRedirectPath('/reactLiveWebsite/checkout');
            props.history.push('/reactLiveWebsite/auth');
        }
    }

    const purchaseCancelHandler = () => {
        setPurchasing(false);
        // alert('Order Cancelled');
    }

    const purchaseContinueHandler = () => {
        props.onInitPurchase();
        props.history.push('/reactLiveWebsite/checkout');
    }

    const disabledInfo = {
        ...props.ings
    };
    for (let key in disabledInfo) {
        disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;

    let burger = props.error ? <p>Ingredients can't be loaded</p> : <Spinner />;
    if (props.ings) {
        burger = (
            <Aux>
                <Burger ingredients={props.ings} />
                <BuildControls
                    ingredientAdded={props.onIngredientAdded}
                    ingredientRemoved={props.onIngredientRemoved}
                    disabled={disabledInfo}
                    price={props.price}
                    purchasable={updatePurchaseState(props.ings)}
                    ordered={purchaseHandler}
                    isAuth={props.isAuth}
                />
            </Aux>
        );
        orderSummary = <OrderSummary
            ingredients={props.ings}
            totalPrice={props.price}
            purchaseCancelHandler={purchaseCancelHandler}
            purchaseContinueHandler={purchaseContinueHandler}
        />;
    }

    return (
        <Aux>
            <Modal show={purchasing}
                modalClosed={purchaseCancelHandler}>
                {orderSummary}
            </Modal>
            {burger}
        </Aux>
    );
}
const mapStateToProps = state => {
    return {
        ings: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
        isAuth: state.auth.token !== null
    };
}
const mapDispatchToProps = dispatch => {
    return {
        onIngredientAdded: (ingName) =>
            dispatch(actions.addIngredient(ingName)),
        onIngredientRemoved: (ingName) =>
            dispatch(actions.removeIngredient(ingName)),
        onInitIngredients: () =>
            dispatch(actions.initIngredients()),
        onInitPurchase: () =>
            dispatch(actions.purchaseInit()),
        onSetAuthRedirectPath: (path) =>
            dispatch(actions.setAuthRedirectPath(path))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(burgerBuilder, axios));