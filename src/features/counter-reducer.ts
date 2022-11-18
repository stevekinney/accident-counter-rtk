import { createAction } from '@reduxjs/toolkit';

type CounterState = { count: number };
type CounterAction =
  | { type: 'INCREMENT' | 'DECREMENT'; payload: number }
  | { type: 'RESET' };

export const reducer = (state: CounterState, action: CounterAction) => {
  if (action.type === 'INCREMENT') {
    return { count: state.count + action.payload };
  }

  if (action.type === 'DECREMENT') {
    return { count: state.count - action.payload };
  }

  if (action.type === 'RESET') {
    return { count: 0 };
  }

  return state;
};
