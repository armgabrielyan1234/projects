import React, { useState } from 'react';

function Counter() {
  // Используем хук useState для создания состояния "count" и функции "setCount"
  const [count, setCount] = useState(0);

  // Функция для увеличения значения "count" на 1
  const increment = () => {
    setCount(count + 1);
  };

  // Функция для уменьшения значения "count" на 1
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Счетчик</h1>
      <p>Текущее значение: {count}</p>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
}
console.log(Counter);
export default Counter;
``