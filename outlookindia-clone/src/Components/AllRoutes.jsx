import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Sports from '../Pages/Sports'
import Subscribe from '../Pages/Subscribe'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/sports' element={<Sports />}></Route>
            <Route path='/subscribe' element={<Subscribe />}></Route>
        </Routes>
    </div>
  )
}

export default AllRoutes