import React, { useState } from 'react';

const Counter = () => {
  // Sử dụng useState để quản lý giá trị bộ đếm
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount(count + 1);
  };

  const decrementCounter = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCounter}>Up</button>
      <button onClick={decrementCounter}>Down</button>
    </div>
  );
}

export default Counter;
    