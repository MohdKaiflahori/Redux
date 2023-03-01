import React from 'react';
import { useDispatch } from 'react-redux';
import { increase } from '../action/action';

export default function Increment() {
  const dispatch = useDispatch();
  console.log('increase');
  return (
    <div>
      <button type="button" onClick={() => dispatch(increase())}>Increase</button>
    </div>
  );
}
