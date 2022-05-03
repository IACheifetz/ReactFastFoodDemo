import React from 'react';

export default function OrderNameInput(props) {
  return (
    <section>
      Who is ordering?
      <input onChange={(e) => props.setOrderName(e.target.value)} />
    </section>
  );
}