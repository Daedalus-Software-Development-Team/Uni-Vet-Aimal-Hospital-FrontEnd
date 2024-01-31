function Customerlogin() {

    const customer={
        firstName:null,
        lastName:null,
        email:null,
        nicNum:null
    }

    function submitOnHandle(){
        customer.firstName=firstName.value;
        customer.lastName=lastName.value;
        customer.email=email.value;
        customer.nicNum=nic.value;

        console.log(customer);
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
                    <input type="text" id="firstName" class="form-control mb-2"/>
                    <label class="form-label student-label">Last Name</label>
                    <input type="text" id="lastName" class="form-control mb-2"/>
                    <label class="form-label student-label">Email</label>
                    <input type="text" id="email" class="form-control mb-2"/>
                    <label class="form-label student-label">NIC Number</label>
                    <input type="number" id="nic" class="form-control"/>
                    <div className="buttonFrame">
                    <button onClick={submitOnHandle} type="submit" class="btn btn-primary mt-3 submit-button">Submit</button>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Customerlogin;