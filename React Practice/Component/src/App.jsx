import React from 'react'
import { NavBar } from './NavBar'  //Without Default Export 
// import NavBar from './NavBar'  //With Default Export
import Course from './Course'
import Footer from './Footer'


export default function App() {
  return (
    <>
      <NavBar />
      <Course />
      <Footer />
    </>
  )
}
