import axios from 'axios';

import React, { useState, } from 'react';

const Customerlogin = () => {
    const[customer,setCustomer]=useState({
        email:'',
        password:''
    })

    const handlePostRequest = async () => {
        try {

            const apiUrl = "http://localhost:8080/customer";

            const responce = await axios.post(apiUrl, customer);

            console.log("Succefull", responce);




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

    const emailHandler=(e)=>{
    setCustomer((pre)=>(
      {
        ...pre,
        email:e.target.value
      }  
    ))
    }

    const passwordHandler=(e)=>{
        setCustomer((pre)=>({
            ...pre,
            password:e.target.value
        }))
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
                    <label class="form-label student-label">Email</label>
                    <input value={customer.email} onChange={emailHandler}  type="text" id="userEmail" class="form-control input-Field mb-2" />
                    <label class="form-label student-label">Password</label>
                    <input value={customer.password}  onChange={passwordHandler} type="password" id="userPassword" class="form-control input-Field mb-2" />
                    
                    <div className="buttonFrame">
                        <button type="submit" class="btn btn-primary mt-3 submit-button">Log-in</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Customerlogin