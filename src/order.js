import React from 'react';

export default function Order(props) {
  return (
    <div className="order">
      <img src={`/food-${props.foodId}.jpeg`}/>
      <img src={`/drink-${props.drinkId}.jpeg`}/>
      <img src={`/side-${props.sideId}.jpeg`}/>
    </div>
  );
}