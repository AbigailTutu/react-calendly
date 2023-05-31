/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home'
import Individual from '../Pages/Individual'
import Team from '../Pages/Team'
import Enterprise from '../Pages/Enterprise'

const Routing = () => {
  return (
    
   <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/individual' element ={<Individual/>}/>
      <Route exact path='/enterprise' element = {<Enterprise/>}/>
      <Route exact path='/team' element = {<Team/>}/>
   </Routes>
    
  )
}

export default Routing
