import './PetDetails.css';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import dog from '../../img/dog.png'
import puppy from '../../img/puppy.png'
import catdog1 from '../../img/catdog1.png'
import catdog2 from '../../img/catdog2.png'

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

                const customerDetails = await Promise.all(data.map(async pet => {
                    const responseCust = await fetch(`http://localhost:8080/customer/${pet.customerId}`);
                    return responseCust.json();
                }));

                console.log(customerDetails);
                setCustomerDetailArray(customerDetails);
            } catch (error) {
                console.log("Error fetching medicine data:", error);
            }

            // if (pets != null) {
            //     console.log("came to if")
            //     for (let index = 0; index < pets.length; index++) {
            //         try {
            //             const responseCust = await fetch(`http://localhost:8080/customer/${pets[index].customerId}`);
            //             const dataCust = await responseCust.json();
            //             console.log(dataCust)

            //             setCustomer(dataCust);
            //             addCustomerDetail(slectedCustomer);
            //         } catch (error) {
            //             console.log("Error fetching customer data:", error);
            //         }
            //     } 
            // }

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
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='nav'>
                {/* <nav class="navbar navbar-dark bg-dark"> */}
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

                    <div className='container' >
                        <div className='row mb-4'>
                            <div className='col-lg-4'>
                                <div>
                                    {/* <img src={puppy} className="d-block puppy" alt="..." /> */}
                                    <img src={catdog1} className="d-block puppy" alt="..." />

                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div >
                                    <br /> <br />
                                    Hi Dr.Thushara
                                </div>
                                <div >
                                    <h2>GOOD MORNING !</h2>
                                    <h1 className='theme'>LET'S SEE PET DETAILS</h1>

                                </div>
                            </div>
                            <div className='col-lg-4'>
                                {/* <div class="input-group">
                                    <div class="form-outline" data-mdb-input-init>
                                        <input id="search-input" type="search" class="form-control" placeholder='search' />

                                    </div>
                                    <button id="search-button" type="button" class="btn btn-primary">
                                        <i class="bi bi-search"></i>
                                    </button>
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className='container' id='search1' >
                        <div className='row mb-3 '>
                            <div className='col-lg-12'>
                                <div class="input-group">
                                    <div class="form-outline" data-mdb-input-init>
                                        <input id="search-input" type="search" class="form-control" placeholder='search' />
                                    </div>
                                    <button id="search-button" type="button" class="btn btn-success">
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
                                        <th scope="col">Type</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Birthday</th>
                                        <th scope="col">Customer Id</th>
                                        <th scope="col">Owner's Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Option</th>
                                        {/* <th scope="col">Delete</th> */}

                                    </tr>
                                </thead>

                                <tbody>
                                    {pets && customerDetailArray && pets.length == customerDetailArray.length && pets.map((data, index) => (
                                        <tr>
                                            <td >{data.petId}</td>
                                            <td>{data.petName}</td>
                                            <td>{data.type}</td>
                                            <td>{data.genre}</td>
                                            <td>{data.birthday}</td>
                                            <td>{data.customerId}</td>
                                            <td>{customerDetailArray[index].firstName}</td>
                                            <td>{customerDetailArray[index].contact}</td>
                                            <td>{customerDetailArray[index].email}</td>
                                            <td><button type="button" data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                                class="btn btn-success ms-3"><i class="bi bi-pencil-square"></i></button>
                                                <button type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                    class="btn btn-danger ms-3"><i class="bi bi-trash3"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Deleted</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are you sure about that?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Deleted</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Update Here</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <label for="recipient-name" class="col-form-label">Pet Id:</label>
                                            <input type="text" value={{}} disabled class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Pet Name:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Type:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Genre:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Birthday:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Customer Id:</label>
                                            <input type="text" value={{}} disabled class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Customer Name:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Contact:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                            <label for="recipient-name" class="col-form-label">Email:</label>
                                            <input type="text"
                                                class="form-control" id="recipient-name" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                                            <button type="button" class="btn btn-success" data-bs-dismiss="modal">Updated</button>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        {/* <div className="col-lg-1"></div>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4">
                        </div>
                        <div className="col-lg-4"></div> */}
                    </div>



                </div>
            </div>

        </div >
    )
}