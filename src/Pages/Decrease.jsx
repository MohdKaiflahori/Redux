import React from 'react';
import { useDispatch } from 'react-redux';
import { decrease } from '../action/action';

export default function Decrease() {
  const dispatch = useDispatch();
  console.log('decrease');
  return (
    <div>
      <button type="button" onClick={() => dispatch(decrease())}> Decrease </button>
    </div>
  );
}
