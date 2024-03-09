import './PetDetails.css';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import dog from '../../img/dog.png'
import puppy from '../../img/puppy.png'

import React, { useState, useEffect } from 'react';


export default function PetDetails() {

    const [selectedPet, setSelectedPet] = useState(null);
    const [customerDetailArray, setCustomerDetailArray] = useState([]);

    const [slectedCustomer, setCustomer] = useState(null);

    const selectedDoctor = {
        doctorId: 1,
        name: "Thushara",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000,

    }


    const [pets, setPets] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:8080/pet");
                const data = await response.json();
                console.log(data) 
                setPets(data)              
            } catch (error) {
                console.log("Error fetching medicine data:", error);
            }
            
            if (pets != null) {
                console.log("came to if")
                for (let index = 0; index < pets.length; index++) {
                    try {
                        const responseCust = await fetch(`http://localhost:8080/customer/${pets[index].customerId}`);
                        const dataCust = await responseCust.json();
                        console.log(dataCust)
                        
                        setCustomer(dataCust);
                        addCustomerDetail(slectedCustomer);
                    } catch (error) {
                        console.log("Error fetching customer data:", error);
                    }
                } 
            }

        };
        fetchData();
    }, []);


    function addCustomerDetail(customerDetail) {
        let newDetail = true;
        if (newDetail) {
            const updatedCustomerDetailArray = [...customerDetailArray, customerDetail];
            setCustomerDetailArray(updatedCustomerDetailArray);
            console.log("hello");
            console.log(customerDetailArray);
          
        } 
    }



    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <img src={dog} className="d-block" alt="..." />
                    <a className="navbar-brand " id='txt1' href="#">Uni-Vet Care <br />
                        <span className="txt2">Animal Hospital</span></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Pharmacy</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Appoinment</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">FAQ</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <button className="btn btn-outline-secondary" type="submit">Login</button> */}
                            <button type="button" class="btn btn-secondary " id='loginBtn'>Login</button>
                        </form>
                    </div>
                </div>
            </nav>

            {/* NavBar Okay */}

            <div className="container-fluid g-0 ">
                <div className="row g-0 m-0">
                    <div class="spinner-border" id="spinner" role="status">
                        <span class="">Loading...</span>
                    </div>
                    <div className="col-lg-12 bg-warning g-0  ">

                    </div>
                    
                    

                    {/* <Container>
                        <Row>
                            <Col><div>
                                <img src={puppy} className="d-block puppy" alt="..." />
                            </div></Col>
                            <Col> <div >
                                <br /> <br />
                                Hi Dr.Thushara
                            </div>
                                <div >
                                    <h1>GOOD MORNING !</h1>
                                    <br />
                                </div></Col>
                            <Col><div class="input-group">
                                <div class="form-outline" data-mdb-input-init>
                                    <input id="search-input" type="search" class="form-control" />
                                    <label class="form-label" for="form1">Search</label>
                                </div>
                                <button id="search-button" type="button" class="btn btn-primary">
                                    <i class="fas fa-search"></i>
                                </button>
                            </div></Col>
                        </Row>
                    </Container> */}

                    <div className='container' >
                        <div className='row mb-4'>
                            <div className='col-lg-4'>
                                <div>
                                    <img src={puppy} className="d-block puppy" alt="..." />
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div >
                                    <br /> <br />
                                    Hi Dr.Thushara
                                </div>
                                <div >
                                    <h1>GOOD MORNING !</h1>
                                    <br/> 
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div class="input-group">
                                    <div class="form-outline" data-mdb-input-init>
                                        <input id="search-input" type="search" class="form-control" placeholder='search' />
                                        
                                    </div>
                                    <button id="search-button" type="button" class="btn btn-primary">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                

                    <div className="row" >
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <table class="table table-bordered ">
                                <thead className="table-warning text-center">
                                    <tr >
                                        <th scope="col">Pet Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Gender</th>
                                        <th scope="col">Type</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">Genre</th>                                        
                                        <th scope="col">Owner's Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>

                                <tbody>
                                {pets && pets.map((data) => (
                                    <tr>
                                        <td >{data.petId}</td>
                                        <td>{data.petName}</td>
                                        <td>{data.type}</td>
                                        <td>{data.genre}</td>
                                        <td>{data.birthday}</td>
                                        <td>{data.customerId}</td>
                                                                               
                                    </tr>
                                ))}
                            </tbody>

                            
                            </table>
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">




                        </div>
                        <div className="col-lg-4"></div>
                    </div>



                </div>
            </div>
        </div>
    )
}