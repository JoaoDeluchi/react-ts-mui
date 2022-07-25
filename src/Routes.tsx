import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Order from './pages/order'
import Home from './pages/home'

export const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route element={<Order />} path='/order' />
            <Route element={<Home />} path='/' />
        </Routes>
  </BrowserRouter>
  )
}
