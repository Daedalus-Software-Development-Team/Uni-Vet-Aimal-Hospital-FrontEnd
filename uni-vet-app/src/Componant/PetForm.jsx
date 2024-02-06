import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import './PetForm.css';
function PetForm() {
  return (
    <div className="mt-5">
    <div className="col-5 mx-auto ">
      <Row className="border border-secondary rounded p-3">
    <Form>
      <Form.Group className="search-bar">

       <Form.Control
          type="text"
          placeholder="Search Pet By ID"
          className="search-bar" style={{textAlign:"center"}} 
        />
        
        {/*  */}
      </Form.Group>
      <Row className="mt-5" >
      <h5 className="text-center">Pet Owner Detail</h5>
      <hr></hr>
        <Col>
        
          <Form.Group  controlId="formOwnerFirstName">
            <Form.Label className="">First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter first name" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group  controlId="formOwnerLastName">
            <Form.Label className="fw-5">Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter last name" />
          </Form.Group>
        </Col>
      </Row >
      <Row className="mt-5" >
        <Col>
          <Form.Group  controlId="formOwnerEmail">
            <Form.Label className="">Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group  controlId="formOwnerContact">
            <Form.Label className="">Contact Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter contact number" />
          </Form.Group>
        </Col>
      </Row>
      <Row className="mt-5" >
      <h5 className="text-center">Pet Detail</h5>
      <hr></hr>
        <Col>
          <Form.Group className="mb-4" controlId="formPetName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter pet name" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-4" controlId="formPetType">
            <Form.Label>Pet Type</Form.Label>
            <Form.Select>
              <option>Select pet type</option>
              <option>Dog</option>
              <option>Cat</option>
              <option>Bird</option>
              <option>Other</option>
            </Form.Select>
          </Form.Group>
        </Col>
      </Row>
      <Row >
        <Col>
          <Form.Group className="mb-4" controlId="formPetFamily">
            <Form.Label>Family</Form.Label>
            <Form.Control type="text" placeholder="Enter pet family" />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-4" controlId="formPetAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter pet age" />
          </Form.Group>
        </Col>
      </Row>
      <Button  variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Row>
    </div>
    </div>
  );
}

export default PetForm;
