import React, { useState } from 'react'
import Form from './Form'
import Result from './Result'
import "./App.css"


export default function App() {

  let [total, setTotal] = useState({
    type: "",
    interest: "",
    amount: ""
  })


  return (
    <div className='app'>
      <section>
        <Form></Form>
        <Result></Result>
      </section>
    </div>
  )
}
