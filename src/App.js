import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'

import Navbar from './Components/Navbar'
import Shop from './Components/Shop/Shop'
import Cart from './Components/Cart/Cart'
import ShopContextProvider from './Components/Context/ShopContext'

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  )
}

export default App