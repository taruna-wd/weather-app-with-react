import { useState } from 'react'
import './App.css'

import WeatherApp from './wheatherapp/WeatherApp'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=" flex place-content-center flex-col">
     <WeatherApp/>
      

      </div>
    </>
  )
}

export default App
