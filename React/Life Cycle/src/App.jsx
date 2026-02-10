import React, { useState } from 'react'
import Life from "./Life"

const App = () => {
  let [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }


  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}> Add</button>

      {count > 5 && count < 10 && <Life></Life>}


    </div>
  )
}

export default App