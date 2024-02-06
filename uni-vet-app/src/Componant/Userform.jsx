import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React from 'react';

function Userform() {
  return (
    <Form className='row col-4 mx-auto mt-5 'style={{border:"1px solid",padding:"4px"}}>
          
           <h5 style={{textAlign:"center"}} > Pet Owner Detail</h5>
           <div className='mx-auto'>
        <div className='row '>
         
        <div className='col'>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Frist Name</Form.Label>
        <Form.Control type="Frist Name" placeholder="Frist Name" />
       
      </Form.Group>
      
      </div>
      <div className='col'>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="Last Name" placeholder="Last Name" />
      </Form.Group>
      </div>
      </div>

      <div className='row'>
        <div className='col'>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
      
      </div>
      <div className='col'>
      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label>Contact Number</Form.Label>
        <Form.Control type="password" placeholder="Contact Number" />
      </Form.Group>
      </div>
      </div>
<h5 style={{textAlign:"center"}} > Pet Owner Detail</h5>
      <div className='row'>
        <div className='col'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Pet Name</Form.Label>
        <Form.Control type="email" placeholder="Pet Name" />
       
      </Form.Group>
      
      
      </div>
      <div className='col'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Pet type</Form.Label>
        <Form.Control type="password" placeholder="Pet type" />
      </Form.Group>
      </div>
      </div>


      <div className='row'>
        <div className='col'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Family</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
       
      </Form.Group>
      
      </div>
      <div className='col'>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      </div>
      </div>
    
     
      </div>   
  
    
    </Form>
  );
}

export default Userform;