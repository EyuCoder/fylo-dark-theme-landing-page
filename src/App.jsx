import { useState } from 'react'
import EarlyAccess from './components/EarlyAccess'
import Features from './components/Features'
import Header from './components/Header'
import Hero from './components/Hero'
import Productive from './components/Productive'
import Testimonials from './components/Testimonials'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-darkBlue dark:text-white font-opensans'>
      <Header />
      <Hero />
      <Features />
      <Productive />
      <Testimonials />
      <EarlyAccess />

    </div>
  )
}

export default App
