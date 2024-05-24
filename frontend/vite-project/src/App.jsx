// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Main from './layout/Main/Main'
import Home from './pages/HomePage/Home'
import WishList from './pages/WishListPage/WishList'
import Admin from './pages/AddPage/Admin'
import About from './pages/AboutPage/About'
import Basket from './pages/BasketPage/Basket'

function App() {

  return (
    <>
<Routes>
  <Route path='/' element={<Main/>} >
  <Route path='/Home' element={<Home/>} ></Route>
  <Route path='/Wishlist' element={<WishList/>} ></Route>
  <Route path='/admin' element={<Admin/>} ></Route>
  <Route path='/About' element={<About/>} ></Route>
  <Route path='/Basket' element={<Basket/>} >

  </Route>
  </Route>
</Routes>
    </>
  )
}

export default App
