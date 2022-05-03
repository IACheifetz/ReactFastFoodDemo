import React from 'react';

export default function SideDropdown(props) {
  return (
    <div>
      Select a Side
      <select onChange={e => props.setSide(e.target.value)}>
        <option value="1">Nacho Fries</option>
        <option value="2">Onion Rings</option>
        <option value="3">Tater Tots</option>
      </select>
    </div>
  );
}