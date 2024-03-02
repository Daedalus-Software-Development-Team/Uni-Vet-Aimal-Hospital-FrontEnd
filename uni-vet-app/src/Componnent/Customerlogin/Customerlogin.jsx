import axios from 'axios';

import React, { useState, } from 'react';

function Customerlogin() {

    const customer = {
        firstName: null,
        lastName: null,
        email: null,
        nicNum: null
    }

    const [firstNameC, setFirstName] = useState("");
    const [lastNameC, setLastName] = useState("");
    const [emailC, setEmail] = useState("");
    const [nicNumC, setNic] = useState("");

    function handleFirstName(event) {
        setFirstName(event.target.value);
    }

    function handleLastName(event) {
        setLastName(event.target.value);
    }

    function handleEmail(event) {
        setEmail(event.target.value);
    }

    function handleNic(event) {
        setNic(event.target.value);
    }

    const cleanForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setNic("");
    }

    const handlePostRequest = async () => {
        try {

            const apiUrl = "http://localhost:8080/customer";

            const responce = await axios.post(apiUrl, customer);

            console.log("Succefull", responce);

            cleanForm();



        } catch (error) {
            console.log(error);
        }
    }

    function submitOnHandle() {


        customer.firstName = firstNameC;
        customer.lastName = lastNameC;
        customer.email = emailC;
        customer.nicNum = nicNumC;


        console.log(customer);
        handlePostRequest();
    }







    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 logFrame">
                <div className="customerLog">
                    <div className="customer-login-name mt-2">
                        <h3 className="customer-login">Customer Login</h3>
                        <hr />
                    </div>
                    <label class="form-label student-label">First Name</label>
                    <input value={firstNameC} onChange={handleFirstName} type="text" id="firstName" class="form-control input-Field mb-2" />
                    <label class="form-label student-label">Last Name</label>
                    <input value={lastNameC} onChange={handleLastName} type="text" id="lastName" class="form-control input-Field mb-2" />
                    <label class="form-label student-label">Email</label>
                    <input value={emailC} onChange={handleEmail} type="text" id="email" class="form-control input-Field mb-2" />
                    <label class="form-label student-label">NIC Number</label>
                    <input value={nicNumC} onChange={handleNic} type="number" id="nic" class="form-control input-Field" />
                    <div className="buttonFrame">
                        <button onClick={submitOnHandle} type="submit" class="btn btn-primary mt-3 submit-button">Submit</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Customerlogin;