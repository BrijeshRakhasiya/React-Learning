import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import EventDemo from './EventDemo'
import Counter from './Counter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       {/* <Home/> */}
       {/* <EventDemo/> */}
       <Counter/>
    </>
  )
}

export default App
