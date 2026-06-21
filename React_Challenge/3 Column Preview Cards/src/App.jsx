import React from 'react'

import "./App.css"

import sedans from "/icon-sedans.svg"
import luxury from "/icon-luxury.svg"
import suvs from "/icon-suvs.svg"

const App = () => {
  return (
    <div className='cards'>

      <div className='card' id='a'>
        <img src={sedans} alt="" />
        <h1>Sedans</h1>
        <p>Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city
          or on your next road trip.</p>
        <button>Learn More</button>
      </div>

      <div className='card' id='b'>
        <img src={suvs} alt="" />
        <h1>Suvs</h1>
        <p>Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation
          and off-road adventures.</p>
        <button>Learn More</button>
      </div>

      <div className='card' id='c'>
        <img src={luxury} alt="" />
        <h1>Luxury</h1>
        <p>Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury
          rental and arrive in style.</p>
        <button>Learn More</button>
      </div>

    </div>
  )
}

export default App