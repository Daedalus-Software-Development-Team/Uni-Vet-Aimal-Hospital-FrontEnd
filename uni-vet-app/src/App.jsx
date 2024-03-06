

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar/navbar'
import AppAbout from './components/About/About'
import AppBanner from './components/Banner/Banner'
import Homecards from './components/profileCard/Homecards'
import Homecarddata from './components/profileCard/Homecarddata'



function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
        <Navbar/>
        {Homecarddata.map((data)=>{
            return <Homecards {...data}/> 
        })}
        <Homecards/>
        <AppBanner/>
        <AppAbout/>
    </div>
    
  )
}



export default App
