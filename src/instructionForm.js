import { useState } from 'react';

export default function InstructionForm(props) {
  const [instructionInput, setInstructionInput] = useState('');
    
  function handleSubmit(e) {
    e.preventDefault();
    props.setInstructions([...props.instructions, instructionInput]);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        Add your special instruction to the order!
        
        <input value={instructionInput} onChange={e => setInstructionInput(e.target.value)}/>
        <button>Submit</button>
      </form>
    </section>
  );
}
