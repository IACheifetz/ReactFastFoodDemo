import { useState } from 'react';
import './App.css';

import foodDropdown from './foodDropdown.js';
import drinkDropdown from './drinkDropdown.js';
import sideDropdown from './sideDropdown.js';
import instructionList from './instructionList.js';
import instructionForm from './instructionForm.js';
import orderNameInput from './orderNameInput.js';
import order from './order.js';

export default function App() {
  const [foodId, setFood] = useState(1);
  const [drinkId, setDrink] = useState(1);
  const [sideId, setSide] = useState(1);
  const [orderName, setOrderName] = useState('Jeb');
  const [instructions, setInstructions] = useState(['Hold the pickles']);
}