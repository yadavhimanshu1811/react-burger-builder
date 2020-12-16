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

    // Alternate method.
    // let labels = Object.keys(props.ingredients)
    //     .map((val, i) => {
    //         return <BuildControl label={val} ingredients={props.ingredients} key={val + i} />
    //     })
   
    return (
        <div className={classes.BuildControls}>
            {/* {labels} */}
            <p>Current Price of burger: <strong>{props.price.toFixed(2)}</strong> $</p>
            {
                controls.map(val => {
                    return <BuildControl
                        label={val.label}
                        key={val.type}
                        disabled={props.disabled[val.type]}
                        added={()=>props.ingredientAdded(val.type)}
                        removed={()=>props.ingredientRemoved(val.type)}
                    />
                })
            }
            <button onClick={props.ordered} className={classes.OrderButton} disabled={props.notPurchasable}>ORDER NOW</button>
        </div>
    );
}

export default buildControls;