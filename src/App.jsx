import { useState } from 'react'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar />
      <Hero />
      <BestSellers />
      <Footer />

    </>
  )
}

export default App
