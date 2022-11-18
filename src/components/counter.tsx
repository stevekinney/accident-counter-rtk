import { useReducer } from 'react';
import {
  counterReducer,
  decrement,
  increment,
  reducer,
  reset,
} from '../features/counter-reducer';

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <section className="flex flex-col items-center w-2/3 gap-8 p-8 bg-white border-4 shadow-lg border-primary-500">
      <h1>Days Since the Last Accident</h1>
      <p className="text-6xl">{state.count}</p>
      <div className="flex gap-2">
        <button onClick={() => dispatch(decrement(1))}>➖ Decrement</button>
        <button onClick={() => dispatch(reset())}>🔁 Reset</button>
        <button onClick={() => dispatch(increment(1))}>➕ Increment</button>
      </div>
      <div>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="number" value={0} onChange={() => {}} />
          <button type="submit">Update Counter</button>
        </form>
      </div>
    </section>
  );
};

export default Counter;
