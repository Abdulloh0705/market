import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeLayout from './Layout/HomeLayout'
import Home from './Components/link/Home'
import Header from './Components/header/Header'
import Sign from './Components/link/Sign'
import './assets/sass/main.scss'
import Product from './Components/section/product/Product';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
        <Route path="/" element={<Header />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="/signup" element={<Sign/>}/>
          <Route path="/product/:id" element={<Product/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
