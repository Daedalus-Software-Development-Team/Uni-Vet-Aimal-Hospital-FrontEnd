import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@mui/material'
import StaffAdd from './components/Staff/StaffAdd.jsx';
import Add from './components/Staff/Add.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:  <StaffAdd/>,
  },
  {
    path: "/Add",
    element:  <Add/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
   {/* <StaffAdd/> */}
    {/* <Add/> */}
    <Add/>
  </React.StrictMode>
)
