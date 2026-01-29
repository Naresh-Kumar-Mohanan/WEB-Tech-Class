import React from 'react'
import Form from './Form'
import Result from './Result'
import "./App.css"


export default function App() {
  return (
    <div className='app'>
      <section>
        <Form></Form>
        <Result></Result>
      </section>
    </div>
  )
}
