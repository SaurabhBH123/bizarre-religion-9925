import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Entertainment from '../Pages/Entertainment'
import Home from '../Pages/Home'
import Sports from '../Pages/Sports'
import Subscribe from '../Pages/Subscribe'
import Business from '../Pages/Business'
import Health from '../Pages/Health'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sports' element={<Sports />}></Route>
            <Route path='/subscribe' element={<Subscribe />}></Route>
            <Route path='/business' element={<Business />}></Route>
            <Route path='/entertainment' element={<Entertainment />}></Route>
            <Route path='/health' element={<Health />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes