import { useState } from "react";


const App = () => {

  let count = 0;
  console.log(useState(0));
  let [state, setState] = useState();

  function abc() {
    setState(state + 1);
  }
  return <div>
    <h1>{state}</h1>
    <button onClick={abc}>Add</button>
  </div>
}

export default App