'use client';

import {useState} from 'react';

export default function Home() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Counter count={count} onCountChange={setCount} />
      <Counter count={count} onCountChange={setCount} />
    </main>
  );
}

function Counter({
  count,
  onCountChange
}: {
  count: number;
  onCountChange: (nextCount: number) => void;
}) {
  // Derived state
  const isOdd = count % 2 !== 0;

  function onIncrement() {
    const nextCount = count + 1;
    onCountChange(nextCount);
  }

  function onDecrement() {
    onCountChange(count - 1);
  }

  return (
    <div>
      <p>{count}</p>
      <p>Is odd: {String(isOdd)}</p>
      <button onClick={onIncrement} className="bg-slate-200 rounded-md p-1">
        Increment
      </button>
      <button onClick={onDecrement} className="bg-slate-200 rounded-md p-1">
        Decrement
      </button>
    </div>
  );
}
