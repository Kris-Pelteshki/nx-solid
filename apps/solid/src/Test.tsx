import { createSignal } from 'solid-js';

export function MyComponent() {
  const [state, setState] = createSignal(0);

  const increment = () => setState(state() + 1);
  const decrement = () => setState(state() - 1);

  return (
    <div class="bg-slate-500 p-3 px-10 rounded-md">
      <div>
        <h1 class="text-2xl font-bold">SolidJS</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <span>{state()}</span>
      </div>
    </div>
  );
}
