import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addvalue = () => {
    setCounter(counter + 1)
  }
  const removevalue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Vite First Project</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={removevalue}>Remove Value</button>
    </>
  )
}

export default App
