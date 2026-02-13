import React, { useState } from 'react'

export default function App() {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1);
  }

  function handleDecrease() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleDecrease}>-</button>
      <span>{count}</span>
      <button onClick={handleClick}>+</button>
    </>
  )
}
