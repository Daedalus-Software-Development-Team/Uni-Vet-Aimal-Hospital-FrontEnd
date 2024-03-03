import { useState } from 'react'
import './App.css'
import Customerlogin from './Componnent/Customerlogin/Customerlogin'
import Profilecard from './Componnent/profileCard/Profilecard'
import NavBar from './Componnent/NavBar/NavBar'
import Homecards from './Componnent/Homecards'
import Homecarddata from './Componnent/Homecarddata'


function App() {
  

  return (
    <>
    {/* <Customerlogin/> */}
    <NavBar/>
    {Homecarddata.map((value)=>{
      return <Homecards {...value}/>
    })}
    
    </>
  )
}

export default App
