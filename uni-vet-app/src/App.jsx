import { useState } from 'react'
import './App.css'
import Customerlogin from './Componnent/Customerlogin/Customerlogin'
import Profilecard from './Componnent/profileCard/Profilecard'
import NavBar from './Componnent/NavBar/NavBar'
import Homecards from './Componnent/Homecards'
import Homecarddata from './Componnent/Homecarddata'
import Home from './Componnent/Home'


function App() {
  const[com,setCom]=useState(<Home/>)

  return (
    <div className='container'>
      <div className="row">
        <div className="col-12">
        <NavBar />
        </div>
        <div className="col-12">
          {com}
        </div>
      </div>
    {/* <Customerlogin/>  */}
    
    {/* {Homecarddata.map((value)=>{
      return <Homecards {...value}/>
    })} */}
    
    </div>
  )
}

export default App
