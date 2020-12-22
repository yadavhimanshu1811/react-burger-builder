import React from 'react';
import classes from './Order.css';

const order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      }
    );
  }

  const ingredientOutput = ingredients.map(ig => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform:'capitalize',
          display:'inline-block',
          margin:'0 8px',
          padding: '5px',
          border:'1px solid #ccc'
          }}>
        {ig.name} : {ig.amount} 
      </span>
    );
  })

  const customerinformation = [];
  for (let customerKey in props.customerData) {
    customerinformation.push(
      {
        name: customerKey,
        amount: props.customerData[customerKey]
      }
    );
  }

  const customerOutput = customerinformation.map(cus => {
    if(cus.amount==='')return null;
    return (
      <span
        key={cus.name}
        style={{
          textTransform:'capitalize',
          display:'inline-block',
          margin:'0 8px',
          padding: '5px',
          border:'1px solid #ccc'
          }}>
        {cus.name} : {cus.amount} 
      </span>
    );
  })


  return (
    <div className={classes.Order}>
      <p>Ingredients : {ingredientOutput}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
      <p>Customer Details : {customerOutput}</p>
    </div>
  );
}

export default order;