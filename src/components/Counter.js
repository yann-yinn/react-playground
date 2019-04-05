import React, { useState } from "react"

function DisplayCounter({ count }) {
  return <h1>total : {count}</h1>
}

export default function Counter({ defaultCount = 0, onUpdate }) {
  const [count, setCount] = useState(defaultCount);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
      <DisplayCounter count={count} />
    </div>
  )
}