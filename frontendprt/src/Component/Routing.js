import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Registration from './Registration'

function Routing() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Registration />}/>
     
          
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
