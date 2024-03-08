import './PetDetails.css';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";

import React, { useState, useEffect } from 'react';


export default function PetDetails() {

    const [selectedPet, setSelectedPet] = useState(null);

    const [slectedCustomer, setCustomer] = useState(null);

    const selectedDoctor = {
        doctorId: 1,
        name: "Thushara",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000,

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* <img src={dog} className="d-block" alt="..." /> */}
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
                            <button type="button" class="btn btn-secondary btn-sm">Login</button>
                        </form>
                    </div>
                </div>
            </nav>






            <div className="container-fluid g-0 ">
                <div className="row g-0 m-0">
                    <div class="spinner-border" id="spinner" role="status">
                        <span class="">Loading...</span>
                    </div>
                    <div className="col-lg-12 bg-warning g-0  ">
                        
                    </div>
                    <div className="col-lg-3">
                        <div className="m-2">
                            {
                                slectedCustomer && selectedPet && (
                                    <PetCard pet={selectedPet} customer={slectedCustomer} />
                                )
                            }
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex align-items-center">
                        <div className="container ">
                            <div className="row ">
                                <div >
                                    Hi Dr.Thushara
                                </div>
                                <div >
                                    <h1>GOOD MORNING !</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 ">
                        <div className="m-2">
                            {
                                selectedDoctor &&
                                (<DoctorCard doctor={selectedDoctor} />)
                            }
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <table class="table table-bordered ">
                                <thead className="table-warning text-center">
                                    <tr >
                                        <th scope="col">Pet Id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">type</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Age</th>
                                        <th scope="col">Owner's Name</th>
                                        <th scope="col">Contact</th>
                                        <th scope="col">Email</th>
                                    </tr>
                                </thead>
                                {/* <tbody>


                                {prescriptionDetailArray && prescriptionDetailArray.map((data) => (

                                    <tr>
                                        <td >{(data.medicineId && data.medicineId) || (!data.medicineId && "New")}</td>
                                        <td >{data.medicineName}</td>
                                        <td>{data.dosage}</td>
                                        <td>{(data.beforeMeal == true && "Before Meal") || (data.beforeMeal == false && "After Meal") || ("Not Specified")}</td>
                                        <td>{data.dailyQuantity}</td>
                                        <td>{data.days}</td>
                                        <td>
                                            {data.available == true && parseFloat(data.price)}

                                            {(data.available == true &&
                                                (<input class="btn btn-default active mb-1" type="checkbox" checked="checked" onClick={() => { data.available = false; setReloadTable(!reladTable); calculateTotal(prescriptionDetailArray); console.log(prescriptionDetailArray); setReloadTable(!reladTable) }} />))
                                                || (<input class="btn btn-default active mb-1" type="checkbox" onClick={() => { data.available = true; setReloadTable(!reladTable); calculateTotal(prescriptionDetailArray); console.log(prescriptionDetailArray) }} />)
                                            }</td>
                                        <td className='d-flex justify-content-center'>
                                            <div >
                                                <button onClick={() => { setDetailToUpdate(data) }} className="btn btn-light  p-2 me-2">
                                                    <i className="bi bi-arrow-up-square"></i>
                                                </button>
                                                <button onClick={() => { deleteMedicineDetail(data) }} className="btn btn-light p-2 ">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </div>

                                        </td>

                                    </tr>
                                ))}
                            </tbody> */}
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