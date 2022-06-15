import React from 'react'
import { Route, Routes } from 'react-router'
import Cart from '../cart/Cart'
import Checkout from '../Checkout/Checkout'
import Contactus from '../contactus/contactus'
import Home from '../home/Home'
import Roboticvacuum from '../homeappliance/Roboticvacuum'
import Login from '../Login/Login'
import Moto from '../Mobile&tablets/Motog/Moto'
import Navbar from '../Navbar/Navbar'
import Inchtv from '../Tv&audio/32Inchtv'

const Allcomponents = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/moto' element={<Moto/>}></Route>
        <Route path='/inchtv' element={<Inchtv/>}></Route>
        <Route path='/robotic' element={<Roboticvacuum/>}></Route> 
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/contact' element={<Contactus/>}></Route>
      </Routes>

    </div>
  )
}

export default Allcomponents
