import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, Row, Col, Table } from "react-bootstrap";


function PhamacyForm() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={10}>
          <Form className="mt-4">
            
            <h3 className="text-center fw-bold text-dark mb-4">Update Medicine </h3>
            <Row className="mb-3">
              <Col>
                <Form.Label>Medicine ID</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col>
                <Form.Label>Brand name</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col>
                <Form.Label>Product name</Form.Label>
                <Form.Control type="text" />
              </Col>
              <Col>
                <Form.Label>Expired Date</Form.Label>
                <Form.Control type="date" />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Type</Form.Label>
                <Form.Select>
                  <option>Select type</option>
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Syrup</option>
                  <option>Injection</option>
                </Form.Select>
              </Col>
              <Col>
                <Form.Label>Quantity</Form.Label>
                <Form.Control type="number" />
              </Col>
              <Col>
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" />
              </Col>
              <Col className="d-flex align-items-end">
                <Button variant="primary" className="me-2">
                  Edit
                </Button>
                <Button variant="danger">Delete</Button>
              </Col>
            </Row>
            <Table striped bordered hover style={{border:"10px gray"}}>
              <thead>
                <tr>
                  <th>Medicine Id</th>
                  <th>Brand name</th>
                  <th>Product Name</th>
                  <th>Expired Date</th>
                  <th>Type</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
                
              </thead>
              <tbody>
              <tr>
                  <td style={{height:"300px"}}>

                  </td>
                  <td style={{height:"300px"}}>

                  </td>
                  <td style={{height:"300px"}}>

                  </td>
                  <td style={{height:"300px"}}>

                  </td>
                  <td style={{height:"300px"}}>

                  </td><td style={{height:"300px"}}>

                  </td>
                  <td style={{height:"300px"}}>

                  </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="warning" type="submit" className="w-100">
              Save
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    )
}

export default PhamacyForm;
