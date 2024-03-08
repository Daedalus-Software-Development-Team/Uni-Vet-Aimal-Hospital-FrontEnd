import './PetDetails.css';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
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
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div class="spinner-border" id="spinner" role="status">
                    <span class="">Loading...</span>
                </div>
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
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
    )
}