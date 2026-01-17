import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prescription from './assets/Componnent/Prescription/Prescription'
import AddPet from './assets/Componnent/AddPet/AddPet'
import PetDetails from './assets/Componnent/PetDetails/PetDetails'
import Home from './assets/Componnent/Home/Home'

import Appoinment from './assets/Componnent/Appoinment/Appoinment'
import Customersignup from './assets/Componnent/Customersignup/Customersignup'
import Customerlogin from './assets/Componnent/Customerlogin/Customerlogin'

import Vacination from './assets/Componnent/Vacination/Vacination'

import NavBar from './assets/Componnent/NavBar/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Ebook from './assets/Componnent/EBook/Ebook'
import Staff from './assets/Componnent/Staff/Staff'


function App() {

  return (


    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:positionwithid' element={<Home/>}></Route>
        <Route path='/prescription' element={<Prescription/>}></Route>
        <Route path='/apointment' element={<Appoinment/>}></Route>
        <Route path='/addPet' element={<AddPet/>}></Route>
        <Route path='/addPetDetails' element={<PetDetails/>}></Route>
        <Route path='/customerLogin' element={<Customerlogin/>}></Route>
        <Route path='/customerSignUp' element={<Customersignup/>}></Route>
        <Route path='/vaccination' element={<Vacination/>}></Route>
        <Route path='/eBook' element={<Ebook />}></Route>
        <Route path='/staff' element={<Staff />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App