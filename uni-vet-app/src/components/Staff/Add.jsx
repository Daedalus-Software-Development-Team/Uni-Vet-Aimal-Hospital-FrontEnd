import React from 'react'

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Add() {
  return (
    <div class='container '>
<Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="name">
         <Form.Control type="name" placeholder="Enter your name" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="Address">
        <Form.Control placeholder="Enter Your Address" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="contact">
        <Form.Control placeholder="Enter Your Moblie Number" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="Email">
        <Form.Control placeholder="Enter Your Email Address" />
      </Form.Group>

      
      <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridState">
       <Form.Control placeholder="Enter Your Age" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
        <Form.Control placeholder="Enter Your NIC number" />
        </Form.Group>
      </Row>


         <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridState">
          <Form.Label>Education </Form.Label>
          <Form.Select defaultValue="Choose">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Job Role</Form.Label>
          <Form.Select defaultValue="Choose">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit" >
        Submit
      </Button>
    </Form>
    </div>
    
  );
}

export default Add;
