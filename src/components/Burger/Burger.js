import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let defaultText = '';
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        defaultText = "Please add some ingredients...";
    }

    return (
        <div className={classes.Burger}>

            <BurgerIngredient type='bread-top'></BurgerIngredient>
            {defaultText}
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'></BurgerIngredient>

        </div>
    );
};
export default burger;