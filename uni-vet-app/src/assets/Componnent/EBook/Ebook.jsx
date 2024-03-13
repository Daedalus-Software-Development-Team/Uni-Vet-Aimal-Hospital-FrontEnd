import NavBar from "../NavBar/NavBar";
import './EBook.css';
import ebook from '../../img/ebook.png'
import React, { useState, useEffect } from 'react';
import { Button } from "@mui/material";




export default function Ebook() {
    const [pets, setPets] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);

    const [slectedCustomer, setCustomer] = useState(null);

    const [vaccineDetails, setVaccineDetails] = useState(null);
    const [vaccineData, setVaccineData]=useState(null);

    const[presData,setPresData]=useState(null);
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

                try{
                    const responsePrescription=await fetch(`http://localhost:8080/ebook/prescriptions/${selectedPet.petId}`);
                    const respPresData=await responsePrescription.json();

                    setPresData(respPresData);
                    console.log(respPresData);


                }
                catch(error){

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
                            <div style={{display:"flex",flexDirection:'column',justifyContent:'center',justifyItems:'center'}}>
                                <h1 className='theme'>LET'S SEE E-Book HERE</h1>
                                <img src={ebook} className="d-block ebook" alt="..." />
                                <button type="button" class="btn btn-outline-primary mt-5" style={{width:'50%'}} onClick={()=>{}}>PRINT YOUR E-BOOK</button>
                                
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
                                    {vaccineDetails && vaccineData && vaccineDetails.length==vaccineData.length && vaccineDetails.map((data,index) => (
                                        <tr>
                                            <td >{data.vaccineId}</td>
                                            <td>{vaccineData[index].vaccineName}</td>
                                            <td>{data.given?'Given':'Not Given'}</td>
                                            <td>{data.date}</td>
                                            
                                            {/* <td><button type="button" onClick={() => { setUpdatePet(data) }} data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                                class="btn btn-success ms-3"><i class="bi bi-pencil-square"></i></button>
                                                <button type="button" onClick={() => { setDeletePet(data) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                    class="btn btn-danger ms-3"><i class="bi bi-trash3"></i></button>
                                            </td> */}
                                        </tr>
                                    ))}
                                </tbody>
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>




                        {/* <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Deleted</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are You Sure To Delete This?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" onClick={() => { setDeletePet(null) }} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" onClick={deletePet} class="btn btn-danger" data-bs-dismiss="modal">Deleted</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        {/* <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Update Pet Detail Here</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <label for="recipient-name" class="col-form-label">Pet Id:</label>
                                            <input type="text" value={updatePet && updatePet.petId} disabled class="form-control" id="updatePetId" />
                                            <label for="recipient-name" class="col-form-label">Pet Name:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.petName} id="updatePetName"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Type:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.type} id="updatePetType"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Genre:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.genre} id="updateGenre"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Birth Year:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.birthYear} id="updateBirthDay"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Customer Id:</label>
                                            <input type="text" value={updatePet && updatePet.customerId} disabled class="form-control" id="updateCustomerId" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                                            <button type="button" onClick={updatePetData}  data-bs-dismiss="modal" class="btn btn-success">Updated</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                    </div>
                    <div className="row" >
                        <div className="col-lg-4"></div>
                        <div className="col-lg-8">{presData && presData.map((value)=>(
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
                                        <td>{data.beforeMeal?'Before Meal':'After Meal'}</td>
                                        <td>{data.dailyQuantity}</td>
                                        <td>{data.days}</td>
                                        <td>{data.price}</td>
                                        
                                        {/* <td><button type="button" onClick={() => { setUpdatePet(data) }} data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                            class="btn btn-success ms-3"><i class="bi bi-pencil-square"></i></button>
                                            <button type="button" onClick={() => { setDeletePet(data) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                class="btn btn-danger ms-3"><i class="bi bi-trash3"></i></button>
                                        </td> */}
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

    )
}