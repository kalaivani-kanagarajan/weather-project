import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Weatherapp from './components/Weather/Weather'




function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
      <Weatherapp />
      </div>

 )
}

export default App
