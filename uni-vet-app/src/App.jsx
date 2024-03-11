import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Prescription from './assets/Componnent/Prescription/Prescription'
import AddPet from './assets/Componnent/AddPet/AddPet'
import PetDetails from './assets/Componnent/PetDetails/PetDetails'
import Home from './assets/Componnent/Home/Home'

import Appoinment from './assets/Componnent/Appoinment/Appoinment'

import Vacination from './assets/Componnent/Vacination/Vacination'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    //  <Prescription></Prescription>
    // <AddPet></AddPet>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/prescription' element={<Prescription />}></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App