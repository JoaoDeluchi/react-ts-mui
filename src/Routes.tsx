import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Order from './pages/order'
import Home from './pages/home'
import Products from './pages/products'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Home />} path='/' />
            <Route element={<Order />} path='/order' />
            <Route element={<Products />} path='/products' />
        </Routes>
  </BrowserRouter>
  )
}
