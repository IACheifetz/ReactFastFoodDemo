import { useState } from 'react';
import './App.css';

import FoodDropdown from './FoodDropdown.js';
import DrinkDropdown from './drinkDropdown.js';
import SideDropdown from './SideDropdown.js';
import InstructionList from './instructionList.js';
import InstructionForm from './instructionForm.js';
import OrderNameInput from './orderNameInput.js';
import Order from './order.js';

function App() {
  const [foodId, setFood] = useState(1);
  const [drinkId, setDrink] = useState(1);
  const [sideId, setSide] = useState(1);
  const [orderName, setOrderName] = useState('Jeb');
  const [instructions, setInstructions] = useState(['Hold the pickles']);
  
  return (
    <div className="App">
      <Order foodId={foodId} drinkId={drinkId} sideId={sideId} />
      <h1>
        Prepping the order for {orderName}
      </h1>
      <div className='bottom'>
        <OrderNameInput setOrderName={setOrderName} />
        <section className='drop-downs'>
          <FoodDropdown setFood={setFood} />
          <DrinkDropdown setDrink={setDrink}/>
          <SideDropdown setSide={setSide} />
        </section>
        <InstructionForm setInstructions={setInstructions} instructions={instructions} />
        <InstructionList instructions={instructions} />

      </div>
    </div>
  );
}

export default App;
