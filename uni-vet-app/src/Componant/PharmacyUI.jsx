import React from "react";
import { Card, Button,Table,Row, Col, Form } from "react-bootstrap";

function PharmacyUI () {
  return (
   
    <div className="pharmacy-ui mt-5 container">
      <div style={{margin: "10px"}}>
      <Row className="mb-5 " >
              <Col>
               
                <Form.Select style={{borderRadius:"30px"}}>
                  <option>Select type</option>
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Syrup</option>
                  <option>Injection</option>
                </Form.Select>
              </Col>
              <Col>
             
                <Form.Select style={{borderRadius:"30px"}}>
                  <option>Select type</option>
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Syrup</option>
                  <option>Injection</option>
                </Form.Select>
              </Col>
              <Col>
             
                <Form.Select style={{borderRadius:"30px"}}>
                  <option>Select type</option>
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Syrup</option>
                  <option>Injection</option>
                </Form.Select>
              </Col>
              <Col>
             
                <Form.Select style={{borderRadius:"30px"}}>
                  <option>Select type</option>
                  <option>Tablet</option>
                  <option>Capsule</option>
                  <option>Syrup</option>
                  <option>Injection</option>
                </Form.Select>
              </Col>
              
            </Row>
      </div>
      <Card>
        <Card.Header>
          <div className="search-bar">
            <input type="text" placeholder="Medicine pool" />
            <select name="dosage">
              {/* Options for dosage */}
            </select>
            <select name="quantity">
              {/* Options for quantity */}
            </select>
            <input type="number" placeholder="Days" />
            <button className="plus-icon">+</button>
            <button className="cross-icon">x</button>
          </div>
        </Card.Header>
        <Card.Body>
        <Table striped bordered hover style={{border:"10px #BDAB72",boxShadow: "0px 0px 5px 2px grey" }}>
              <thead>
                <tr>
                  <th style={{backgroundColor:'#BDAB72',textAlign:'center'}}>Medicine Id</th>
                  <th style={{backgroundColor:'#BDAB72',textAlign:'center'}}>Description</th>
                  <th style={{backgroundColor:'#BDAB72',textAlign:'center'}}>Dosage</th>
                  <th style={{backgroundColor:'#BDAB72',textAlign:'center'}}>Quantity per Day</th>
                  <th style={{backgroundColor:'#BDAB72',textAlign:'center'}}>TDays</th>
                  <th style={{backgroundColor:'#BDAB72',textAlign:'center'}}>Option</th>
                  
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
                </tr>
              </tbody>
            </Table>
        </Card.Body>
      </Card>
      <div style={{margin:"10px",textAlign:"center"}} className="total-price">Total Rs.1890.00</div>
      <div className="buttons">
        <div class="text-center" style={{margin:"10px" }}><button type="button" class="btn btn-primary" style={{boxShadow: "0px 0px 5px 2px grey",borderRadius:"15px" }}>PRINT SECURELY</button></div>
        <div class="text-center" style={{margin:"10px" }}><button type="button" class="btn btn-primary" style={{boxShadow: "0px 0px 5px 2px grey",borderRadius:"15px",backgroundColor:"#2B3235" }}>SEND TO PHARMACY</button></div>
        <div class="text-center" style={{margin:"10px" }}><button type="button" class="btn btn-primary" style={{boxShadow: "0px 0px 5px 2px grey" ,borderRadius:"15px",backgroundColor:"#E9ECEF",color:"#2B3235"}}>ADD TO PATIENT BAG</button></div>
      </div>
      
    </div>
  );
};

export default PharmacyUI;
