import React from 'react';
import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {



    return (
        <div className={classes.BuildControls}>
            {/* {labels} */}
            <p>Current Price of burger: ₹<strong>{props.price}</strong></p>
            {
                controls.map(val => {
                    return <BuildControl
                        label={val.label}
                        key={val.type}
                        disabled={props.disabled[val.type]}
                        added={() => props.ingredientAdded(val.type)}
                        removed={() => props.ingredientRemoved(val.type)}
                    />
                })
            }
            <button
                onClick={props.ordered}
                className={classes.OrderButton}
                disabled={!props.purchasable}
            >
                {props.isAuth?"ORDER NOW":"SIGNUP TO ORDER"}
            </button>
        </div>
    );
}

export default buildControls;