import React from 'react';
import Instruction from './instruction.js';

export default function instructionList(props) {
  return (
    <section>
      <h2>Your special order instructions:</h2>
      {props.instructions.map((instruction) => <Instruction key={instruction} instruction={instruction} />)}
    </section>
  );
}
