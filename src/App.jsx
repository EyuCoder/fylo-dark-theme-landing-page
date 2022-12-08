import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='dark:bg-darkBlue dark:text-white font-opensans'>
      <Header />
      <Hero />

    </div>
  )
}

export default App
