import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import About from './components/About'
import AllProducts from './components/AllProductsPage'
import ProductDetail from './components/ProductDetailPage'

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
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/all-products" element={<AllProducts />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App