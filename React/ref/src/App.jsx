
import React, { useRef } from 'react'

export default function App() {

  let btnRef = useRef()
  let headRef = useRef()

  let h22 = useRef()

  function handleClick() {

    btnRef.current.style.backgroundColor = "Orange"
    btnRef.current.style.color = "red"


    if (headRef.current.innerHTML == "Naresh Kumar") {
      headRef.current.innerHTML = "Naren"
    } else {
      headRef.current.innerHTML = "Naresh Kumar"
    }
  }

  function changeColor() {
    if (h22.current.style.color == "black") {
      h22.current.style.color = "violet"
    } else {
      h22.current.style.color = "black"
    }
  }


  return (
    <div>
      <h1 ref={headRef} >Naresh Kumar</h1>
      <button ref={btnRef} onClick={handleClick} >Change</button>

      <h2 ref={h22}>NK</h2>
      <button onClick={changeColor}>Change Color</button>
    </div>
  )
}