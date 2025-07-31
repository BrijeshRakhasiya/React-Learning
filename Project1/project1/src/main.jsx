import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './Home.jsx'
import EventDemo from './EventDemo.jsx'
import Counter from './Counter.jsx'
import Sumdemo from './Sumdemo.jsx'
import Counter2 from './Counter2.jsx'
import Sum2 from './Sum2.jsx'
import Hookdemo from './Hookdemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Hookdemo/>
  </StrictMode>,
)