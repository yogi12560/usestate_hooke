import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  const initial = 1;
  const [state, setState] = useState(initial);

  const Addition = () => {
      setState(state+1);
  };

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={Addition}> ADD </button>

      <p> {state} </p>
    </div>
  );
}
