import axios from 'axios';

import React, { useEffect, useState, } from 'react';

const Customerlogin = () => {
    const[customer,setCustomer]=useState({
        email:'',
        password:''
    })

    const[num,setNum]=useState(1);

    useEffect(()=>{
        console.log(customer);

        const handlePostRequest = async () => {
            try {
    
                const apiUrl = "http://localhost:8080/login";
    
                const responce = await axios.post(apiUrl, customer);
    
                console.log("Succefull", responce);
                console.log("Succefull", responce.data);
                
    
    
    
            } catch (error) {
                console.log(error);
            }
        }

        handlePostRequest();
    },[num])



    

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
            <div className="col-3"></div>
            <div className="col-6 logFrame">
                <div className="customerLog" style={{
                    boxShadow:"10px 10px 8px 10px #888888",
                    marginTop:'150px',
                    overflowX:'hidden'
                }}>
                    <div className="customer-login-name mt-2">
                        <h3 className="customer-login mx-3">Customer Login</h3>
                        <hr />
                    </div>
                    <label class="form-label student-label mx-3">Email</label>
                    <input value={customer.email} onChange={emailHandler}  type="text" id="userEmail" class="form-control input-Field mb-2 mx-3" />
                    <label class="form-label student-label mx-3">Password</label>
                    <input value={customer.password}  onChange={passwordHandler} type="password" id="userPassword" class="form-control input-Field mb-2 mx-3" />
                    
                    <div className="buttonFrame m-1">
                        <button type="submit" onClick={(e)=>{
                            setNum((pre)=>{
                                return pre==1?0:1;
                            })
                        }} class="btn btn-primary mt-3 submit-button">Log-in</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Customerlogin