import React, { useState, useEffect } from 'react'
import Spinner from './Spinner'
import MainPage from './MainPage'


const App = () => {
  let [data, setData] = useState(null)

  useEffect(() => {
    async function xyz() {
      let response = await fetch('http://fakestoreapi.com/products')

      let dataFromServer = await response.json();
      setData(dataFromServer)

    }
  }, [])

  return (
    <div>
      {data ? <MainPage data={data} /> : <Spinner />}
    </div>
  )
}

export default App