import React from 'react';

export default function DrinkDropdown(props) {
  return (
    <div>
      Select a Drink
      <select onChange={e => props.setDrink(e.target.value)}>
        <option value="1">W I D E Baja Blast</option>
        <option value="2">W I D E  Cherry Coke</option>
        <option value="3">W I D E  Cream Soda</option>
      </select>
    </div>
  );
}