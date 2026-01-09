import { useState } from "react"
import Theme from "./Theme";

let App = () => {
  let [state, setState] = useState(0)
  console.log(state);

  function handleClick() {
    setState(state + 1)
  }

  function decreaseClick() {
    setState(state - 1)
  }

  // return <div>
  //   <Theme></Theme>
  // </div>

  return <div>
    <h1>{state}</h1>
    <button onClick={handleClick}>Increase</button>

    <button onClick={decreaseClick}>Decrease</button>
  </div>

}
export default App