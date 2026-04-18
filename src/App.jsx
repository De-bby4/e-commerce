import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import About from './components/About'

function Home() {
  return (
    <>
      <Hero />
      <BestSellers />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  )
}

export default App