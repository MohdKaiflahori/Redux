import React from 'react';
import Count from './Count';
import Decrease from './Decrease';
import Increment from './Increment';

export default function Counter1() {
  return (
    <div>
      <h1>Counter</h1>
      <Count />
      <Increment />
      <Decrease />
    </div>
  );
}
