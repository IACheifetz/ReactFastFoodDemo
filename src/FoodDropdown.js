import React from 'react';

export default function foodDropdown(props) {
  return (
    <div>
      Select an Entree
      <select onChange={e => props.setFood(e.target.value)}>
        <option value="1">Gordita</option>
        <option value="2">Chicken</option>
        <option value="3">Smash Burger</option>
      </select>
    </div>
  );
}