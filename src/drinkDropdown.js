import React from 'react';

export default function drinkDropdown(props) {
  return (
    <div>
      Select a Drink
      <select onChange={e => props.setDrink(e.target.value)}>
        <option value="1">Baja Blast</option>
        <option value="2">Cherry Coke</option>
        <option value="3">Cream Soda</option>
      </select>
    </div>
  );
}