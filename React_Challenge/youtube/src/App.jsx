import React, { useState } from "react"
import "./App.css"
import data from "./data.json"
import SideBar from "./SideBar"


const App = () => {
  let [state, setState] = useState(0)

  console.log(state);


  return (
    <div className="app">
      <main>
        <video poster={data[state].imgUrl} muted autoPlay loop controls src={data[state].videoUrl}></video>
        <h1>{data[state].title}</h1>
      </main>

      <aside>
        {data.map((e, i, arr) => {
          return <SideBar element={e} index={i} setState={setState} />
        })}
      </aside>

      {/* <aside>
        {data.map((e, i, arr) => {
          return <div>
            <img src={e.imgUrl} alt="" onClick={() => {
              setState(i);
            }} />
          </div>
        })}
      </aside> */}

    </div>
  )
}

export default App