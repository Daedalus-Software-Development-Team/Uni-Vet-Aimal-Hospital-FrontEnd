import Button from 'react-bootstrap/Button';
import React from 'react'
import './StaffAdd.css';



export default function StaffAdd() {
  return (
  <div>
    <div class="container">
    <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
      <div class="col-md-3 mb-2 mb-md-0">
        <a href="/" class="d-inline-flex link-body-emphasis text-decoration-none">
          <svg class="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"/></svg>
        </a>
      </div>

      <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li><a href="Navbar.jsx" class="nav-link px-2 link-secondary">Home</a></li>
        <li><a href="#about us" class="nav-link px-2">About Us</a></li>
        <li><a href="#our service" class="nav-link px-2">Our Service</a></li>
        <li><a href="#pharmacy" class="nav-link px-2">Pharmacy</a></li>
        <li><a href="#contact" class="nav-link px-2">Contact</a></li>
        <li><a href="#appointment" class="nav-link px-2">Appointment</a></li>
        <li><a href="#faq" class="nav-link px-2">FAQ</a></li>
        </ul>

      <div class="col-md-3 text-end">
        <button type="button" class="btn btn-outline-primary me-2">Login</button>
      </div>
    </header>
  </div>
    <h1>Staff Management</h1>

    <div class="col-lg-6 col-xxl-2 my-5 mx-auto">
  <div class="d-grid gap-4">
    <button class="btn btn-outline-secondary" type="button">Add New Member</button>
    <button class="btn btn-outline-secondary" type="button">Update Member</button>
    <button class="btn btn-outline-secondary" type="button">Remove Member</button>
  
    
    </div>
</div></div>
  )
}

