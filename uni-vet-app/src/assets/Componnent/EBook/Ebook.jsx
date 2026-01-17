import NavBar from "../NavBar/NavBar";
import './EBook.css';
import ebook from '../../img/ebook.png'
import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";
import Swal from 'sweetalert2'



export default function Ebook() {
    const [pets, setPets] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);

    const [slectedCustomer, setCustomer] = useState(null);

    const [vaccineDetails, setVaccineDetails] = useState(null);
    const [vaccineData, setVaccineData] = useState(null);

    const [presData, setPresData] = useState(null);

    function printEbook() {
        const printBook = async () => {
            if (selectedPet != null) {

                try {
                    Swal.fire('Please wait')
                    Swal.showLoading();
                    const responseCust = await fetch(`http://localhost:8080/ebook/print/${selectedPet.petId}`);
                    const dataCust = await responseCust.json();
                    console.log(dataCust)

                    Swal.fire({
                        title: "Sucess!",
                        text: "Ebook Delivered Sucessfully!",
                        icon: "success"
                    });
                    Swal.hideLoading();
                    console.log(response);



                } catch (error) {

                    console.log("Error fetching customer data:", error);
                }
            }

        };
        printBook();
    }
    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch("http://localhost:8080/pet");
                const data = await response.json();
                console.log(data)

                setPets(data);

            } catch (error) {

                console.log("Error fetching pet data:", error);
            }

            if (selectedPet != null) {
                try {
                    const responseCust = await fetch(`http://localhost:8080/customer/${selectedPet.customerId}`);
                    const dataCust = await responseCust.json();
                    console.log(dataCust)

                    setCustomer(dataCust);

                } catch (error) {

                    console.log("Error fetching customer data:", error);
                }

                try {
                    const responseCust = await fetch(`http://localhost:8080/ebook/petDetails/${selectedPet.petId}`);
                    const dataVac = await responseCust.json();
                    console.log(dataVac)

                    setVaccineDetails(dataVac);
                    const vacData = await Promise.all(dataVac.map(async vac => {
                        const responseCust = await fetch(`http://localhost:8080/vaccine/${vac.vaccineId}`);
                        return responseCust.json();
                    }));

                    console.log(vacData);
                    setVaccineData(vacData);


                } catch (error) {

                    console.log("Error fetching customer data:", error);
                }

                try {
                    const responsePrescription = await fetch(`http://localhost:8080/ebook/prescriptions/${selectedPet.petId}`);
                    const respPresData = await responsePrescription.json();

                    setPresData(respPresData);
                    console.log(respPresData);


                }
                catch (error) {

                }
            }




        };
        fetchData();

    }, [selectedPet]);
    return (
        <div className="container-fluid">
            <NavBar position='doctor'></NavBar>
            <div className="row g-0 m-0">
                <div class="spinner-border" id="spinner" role="status">
                    <span class="">Loading...</span>
                </div>
                <div className="col-lg-12 bg-warning g-0  ">

                </div>

                <div className='container' >
                    <div className='row mb-4'>
                        <div className='col-lg-4'>
                            <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', justifyItems: 'center' }}>
                                <h1 className='theme'>LET'S SEE E-Book HERE</h1>
                                <img src={ebook} className="d-block ebook" alt="..." />
                                <button type="button" class="btn btn-outline-primary mt-5" style={{ width: '50%' }} onClick={() => { printEbook() }}>PRINT YOUR E-BOOK</button>

                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div >
                                <div className='container' id='search1' >
                                    <div className='row mb-3 '>
                                        <div className='col-lg-3'>
                                            <div class="input-group">
                                                <div class="input-group mt-2 mb-3 ">
                                                    <label><h5>Select Pet</h5></label>
                                                    <div className="className  shadow-lg makeRoundedContainer col-11">
                                                        <input type="text" id='pet' onFocus={() => { setSelectedPet(null) }} class="form-control bg-white  borderColor rounded" placeholder="Selcet Pet" aria-label="Amount (to the nearest dollar)" value={(selectedPet && selectedPet.petId + "-" + selectedPet.petName) || (!selectedPet && null)}></input>
                                                    </div>

                                                    <div class="btn-group col-1 ">

                                                        <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <span class="visually-hidden">Toggle Dropdown</span>
                                                        </button>
                                                        <ul class="dropdown-menu">
                                                            {pets && pets.map((pet) => (
                                                                <button onClick={() => { setSelectedPet(pet) }} className='btn btn-light w-100'>{pet.petId} - {pet.petName} </button>
                                                            ))}

                                                        </ul>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" >
                                    <div className="col-lg-12">
                                        <h3>Vaccines</h3>
                                        <table class="table table-bordered ">
                                            <thead className="table-warning text-center">
                                                <tr >
                                                    <th scope="col">Vaccine Id</th>
                                                    <th scope="col">Vaccine Name</th>
                                                    <th scope="col">Given</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Option</th>

                                                </tr>

                                            </thead>

                                            <tbody>
                                                {vaccineDetails && vaccineData && vaccineDetails.length == vaccineData.length && vaccineDetails.map((data, index) => (
                                                    <tr>
                                                        <td >{data.vaccineId}</td>
                                                        <td>{vaccineData[index].vaccineName}</td>
                                                        <td>{data.given ? 'Given' : 'Not Given'}</td>
                                                        <td>{data.date}</td>


                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                                <div className="row" >
                                    <h3>{presData && "Prescriptions"}</h3>
                                    <div className="col-lg-12">{presData && presData.map((value) => (

                                        <table class="table table-bordered ">
                                            <thead className="table-warning text-center">
                                                <tr >
                                                    <th scope="col">Medicine Id</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Dosage</th>
                                                    <th scope="col">Timing</th>
                                                    <th scope="col">Daily Quantity</th>
                                                    <th scope="col">Days</th>
                                                    <th scope="col">Price</th>
                                                    <th scope="col">Option</th>

                                                </tr>
                                            </thead>

                                            <tbody>
                                                {value.prescriptionDetailArray.map((data, index) => (
                                                    <tr>
                                                        <td >{data.medicineId}</td>
                                                        <td>{data.medicineName}</td>
                                                        <td>{data.dosage}</td>
                                                        <td>{data.beforeMeal ? 'Before Meal' : 'After Meal'}</td>
                                                        <td>{data.dailyQuantity}</td>
                                                        <td>{data.days}</td>
                                                        <td>{data.price}</td>


                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    ))}

                                    </div>

                                </div>

                            </div>
                        </div>







                    </div>


                </div>
            </div>
        </div>

    )
}