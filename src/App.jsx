import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import BestSellers from './components/BestSellers'
import About from './components/About'
import AllProducts from './components/AllProductsPage'
import ProductDetail from './components/ProductDetailPage'
import CartDrawer from './components/CartDrawer'
import Contact from './components/ContactPage'
import Lookbook from './components/Lookbook'
import Account from './components/Account'
import { CartProvider } from './components/CartContext'
import { ThemeProvider } from './components/ThemeContext'

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
      <ThemeProvider>
        <CartProvider>
          <ScrollToTop />
          <Navbar />
          <CartDrawer />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/shop" element={<AllProducts />} />
              <Route path="/all-products" element={<AllProducts />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/lookbook" element={<Lookbook />} />
              <Route path="/account" element={<Account />} />
              <Route path="/cart" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
          <Footer />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App