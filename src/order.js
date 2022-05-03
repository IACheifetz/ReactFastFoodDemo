import React from 'react';

export default function Order(props) {
  return (
    <div className="order">
      <img src={`/food-${props.foodId}.jpg`}/>
      <img src={`/drink-${props.drinkId}.jpg`}/>
      <img src={`/side-${props.sideId}.jpg`}/>
    </div>
  );
}