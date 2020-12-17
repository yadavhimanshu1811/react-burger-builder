import React from 'react';
import Aux from '../../../HOC/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{  textTransform: 'capitalize', fontWeight: '900' }}>
                        {igKey}: {props.ingredients[igKey]}
                    </span>
                </li>
            )
        })
    return (
        <Aux>
            <h3>Your order</h3>
            
            <p><strong>The price of burger is: {props.totalPrice.toFixed(2)} $</strong></p>
            <p>A delicious order with following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout ?</p>
            <Button>Continue</Button>
            <Button>Cancel</Button>
        </Aux>
    );

};

export default orderSummary;