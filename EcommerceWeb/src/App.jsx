import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import './App.css'
import Home from './Home'
import About from './About'
import Products from './Products'
import Cart from './Cart'
import Contact from './Contact'
import SingleProduct from './SingleProduct'
import ErrorPage from './ErrorPage'
import Header from './components/Header'
import Login from './Login'
import ParentComponent from './ParentComponent'
import FilterContextProvider from './FilterContext'


function App() {


  return (
    <>

      <ParentComponent>
        <FilterContextProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/singleproduct/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Router>
        </FilterContextProvider>
      </ParentComponent>
    </>
  )
}

export default App
