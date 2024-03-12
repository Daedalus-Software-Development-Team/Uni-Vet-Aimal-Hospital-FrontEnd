import React, { useState, useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
import './Vacination.css'
import addImage from '../../img/add.png'
import refreshImage from '../../img/refresh.png'
import printerImage from '../../img/printer.png'
import phamacyImage from '../../img/phamacy.png'
import updateImage from '../../img/update.png'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Vacination() {
    const [pets, setPets] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);

    const [slectedCustomer, setCustomer] = useState(null);


    const [updateMode, setUpdateMode] = useState(false);

    const [medicines,setMedicines]=useState(false);

   

    const selectedDoctor = {
        doctorId: 1,
        name: "Thushara",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000,

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
            }

           


        };
        fetchData();

    }, [selectedPet]);



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

            </div>
            <hr className="m-0"></hr>
            <div className="row">
                <div className="col-lg-5  m-2 "></div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div class="input-group mt-2 mb-3 ">

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
                <div className="col-lg-1 m-2"></div>
                <div className="col-lg-3 m-2">

                    <div class="input-group ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="medName" class="form-control bg-white  borderColor rounded" placeholder="Vaccine Name" aria-label="Amount (to the nearest dollar)" />

                            {/* <input type="text" id="medName" {...register("medicineName")} onFocus={() => { setSelectedMedicine(null) }} class="form-control bg-white  borderColor rounded" placeholder="Medicine Name" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && selectedMedicine.medicineName) || (!selectedMedicine && null)} /> */}
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            {/* <ul class="dropdown-menu">
                                {medicines && medicines.map((medicine) => (
                                    <button onClick={() => { setSelectedMedicine(medicine) }} className='btn btn-light w-100'>{medicine.medicineId} - {medicine.medicineName} </button>
                                ))}
                            </ul> */}
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 m-2">

                    <div class="input-group ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="medName" class="form-control bg-white  borderColor rounded" placeholder="Price" aria-label="Amount (to the nearest dollar)" />

                            {/* <input type="text" id="medName" {...register("medicineName")} onFocus={() => { setSelectedMedicine(null) }} class="form-control bg-white  borderColor rounded" placeholder="Medicine Name" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && selectedMedicine.medicineName) || (!selectedMedicine && null)} /> */}
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            {/* <ul class="dropdown-menu">
                                    {medicines && medicines.map((medicine) => (
                                        <button onClick={() => { setSelectedMedicine(medicine) }} className='btn btn-light w-100'>{medicine.medicineId} - {medicine.medicineName} </button>
                                    ))}
                                </ul> */}
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 m-2">

                    <div class="input-group ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="medName" class="form-control bg-white  borderColor rounded" placeholder="Dosage" aria-label="Amount (to the nearest dollar)" />

                            {/* <input type="text" id="medName" {...register("medicineName")} onFocus={() => { setSelectedMedicine(null) }} class="form-control bg-white  borderColor rounded" placeholder="Medicine Name" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && selectedMedicine.medicineName) || (!selectedMedicine && null)} /> */}
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            {/* <ul class="dropdown-menu">
                                    {medicines && medicines.map((medicine) => (
                                        <button onClick={() => { setSelectedMedicine(medicine) }} className='btn btn-light w-100'>{medicine.medicineId} - {medicine.medicineName} </button>
                                    ))}
                                </ul> */}
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 m-2">

                    <div class="input-group ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="medName" class="form-control bg-white  borderColor rounded" placeholder="Date" aria-label="Amount (to the nearest dollar)" />

                            {/* <input type="text" id="medName" {...register("medicineName")} onFocus={() => { setSelectedMedicine(null) }} class="form-control bg-white  borderColor rounded" placeholder="Medicine Name" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && selectedMedicine.medicineName) || (!selectedMedicine && null)} /> */}
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            {/* <ul class="dropdown-menu">
                                    {medicines && medicines.map((medicine) => (
                                        <button onClick={() => { setSelectedMedicine(medicine) }} className='btn btn-light w-100'>{medicine.medicineId} - {medicine.medicineName} </button>
                                    ))}
                                </ul> */}
                        </div>

                    </div>
                </div>
                <div className='col-lg-1'></div>
                <div className='col-lg-1 m-2'></div>
                <div className="col-lg-3 d-flex align-items-center m-2">
                    <div class="form-check">
                        <input class="form-check-input" onClick={() => { setAvailable(!avalable) }} type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Given
                        </label>
                    </div>
                </div>
                <div className="col-lg-1">
                    <div className="container d-flex align-items-center m-2">
                        <div className="row ">
                            <div className="col-6  ">
                                {updateMode && (
                                    <button  className="btn btn-light p-0 m-0 g-0">
                                        <img height="40px" src={updateImage}></img>
                                    </button>
                                )

                                    || !updateMode && (
                                        <button  className="btn btn-light p-0 m-0 g-0">
                                            <img height="40px" src={addImage}></img>
                                        </button>
                                    )}

                            </div>
                            <div className="col-6">
                                <button  className="btn btn-light p-0 m-0 g-0">
                                    <img height="40px" src={refreshImage}></img>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
                {/* 

                <div className="col-lg-2 m-2">


                    <div class="input-group  ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="dos" {...register("dosage")} class="form-control borderColor bg-white rounded" placeholder="Dosage" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">

                                <button onClick={() => { document.getElementById('dos').value = "1 pill" }} className='btn btn-light w-100'>1 pill</button>
                                <button onClick={() => { document.getElementById('dos').value = "2 pill" }} className='btn btn-light w-100'>2 pill</button>
                                <button onClick={() => { document.getElementById('dos').value = "3 pill" }} className='btn btn-light w-100'>3 pill</button>
                                <button onClick={() => { document.getElementById('dos').value = "2.5 ml" }} className='btn btn-light w-100'>2.5 ml</button>
                                <button onClick={() => { document.getElementById('dos').value = "5 ml" }} className='btn btn-light w-100'>5 ml</button>
                                <button onClick={() => { document.getElementById('dos').value = "7.5 ml" }} className='btn btn-light w-100'>7.5 ml</button>


                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 m-2">


                    <div class="input-group ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="number" id="qty" {...register("dailyQuantity")} class="form-control bg-white  borderColor rounded" placeholder="Quantity per day" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <button onClick={() => { document.getElementById('qty').value = 1 }} className='btn btn-light w-100'>1 </button>
                                <button onClick={() => { document.getElementById('qty').value = 2 }} className='btn btn-light w-100'>2 </button>
                                <button onClick={() => { document.getElementById('qty').value = 3 }} className='btn btn-light w-100'>3 </button>
                                <button onClick={() => { document.getElementById('qty').value = 4 }} className='btn btn-light w-100'>4 </button>
                                <button onClick={() => { document.getElementById('qty').value = 5 }} className='btn btn-light w-100'>5 </button>
                                <button onClick={() => { document.getElementById('qty').value = 6 }} className='btn btn-light w-100'>6 </button>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-1 m-2">


                    <div class="input-group ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="number" id="days" {...register("days")} class="form-control bg-white  borderColor rounded" placeholder="days" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <button onClick={() => { document.getElementById('days').value = 1 }} className='btn btn-light w-100'>1 </button>
                                <button onClick={() => { document.getElementById('days').value = 2 }} className='btn btn-light w-100'>2 </button>
                                <button onClick={() => { document.getElementById('days').value = 3 }} className='btn btn-light w-100'>3 </button>
                                <button onClick={() => { document.getElementById('days').value = 4 }} className='btn btn-light w-100'>4</button>
                                <button onClick={() => { document.getElementById('days').value = 5 }} className='btn btn-light w-100'>5 </button>
                                <button onClick={() => { document.getElementById('days').value = 6 }} className='btn btn-light w-100'>6</button>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-1">
                    <div className="container d-flex align-items-center m-2">
                        <div className="row ">
                            <div className="col-6  ">
                                {updateMode && (
                                    <button onClick={handleSubmit(submit)} className="btn btn-light p-0 m-0 g-0">
                                        <img height="40px" src={updateImage}></img>
                                    </button>
                                )

                                    || !updateMode && (
                                        <button onClick={handleSubmit(submit)} className="btn btn-light p-0 m-0 g-0">
                                            <img height="40px" src={addImage}></img>
                                        </button>
                                    )}

                            </div>
                            <div className="col-6">
                                <button onClick={resetForm} className="btn btn-light p-0 m-0 g-0">
                                    <img height="40px" src={refreshImage}></img>
                                </button>
                            </div>
                        </div>
                    </div>



                </div>
                <div className="col-lg-2 m-2 mb-3">
                    <div className="className  shadow-lg makeRoundedContainer col-11">
                        <input type="number" id="price" {...register("price")} onFocus={() => { setSelectedMedicine(null) }} class="form-control bg-white  borderColor rounded" placeholder="Price" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && parseFloat(selectedMedicine.price)) || (!selectedMedicine && null)} />
                    </div>
                </div>
                <div className="col-lg-3 d-flex align-items-center mb-2">
                    <div class="form-check">
                        <input class="form-check-input" onClick={() => { setAvailable(!avalable) }} type="checkbox" value="" id="defaultCheck1" />
                        <label class="form-check-label" for="defaultCheck1">
                            Available
                        </label>
                    </div>
                </div>
                <div className="col-lg-2  mb-3">
                    <div className="comtainer">
                        <div className="row">
                            <div className="col-1">

                            </div>
                            <div className="col-10">
                                <div class="form-check form-check-inline">
                                    <input {...register("beforeMeal")} class="form-check-input" type="radio" onClick={() => { setMeal(true) }} name="inlineRadioOptions" id="bMeal" />
                                    <label class="form-check-label" for="inlineRadio1">Before meals</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input {...register("beforeMeal")} class="form-check-input" type="radio" onClick={() => { setMeal(false) }} name="inlineRadioOptions" id="aMeal" />

                                    <label class="form-check-label" for="inlineRadio2">After meals</label>
                                </div>
                            </div>

                        </div>
                    </div>

                </div> */}


            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <table class="table table-bordered ">
                        <thead className="table-warning text-center">
                            <tr >
                                <th scope="col">Vaccine Id</th>
                                <th scope="col">Name</th>
                                <th scope="col">Dosage</th>
                                <th scope="col">Price</th>
                                <th scope="col">Date</th>
                                <th scope="col">Given</th>
                              

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
                {/* <div className="col-lg-1"></div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12"><hr></hr>  </div>
                            <div className="col-lg-8">Channeling fee</div>
                            <div className="col-lg-4">{selectedDoctor.channelingFee}</div>
                            <div className="col-lg-12"><hr className='brokenRuler'></hr>  </div>
                            <div className="col-lg-8">Total</div>
                            <div className="col-lg-4">{total}</div>

                            <div className="col-lg-12"><hr ></hr> </div>
                            <div className="col-lg-12">
                                <button onClick={createPrescription} className="btn btn-primary rounded-pill btn-lg m-2 w-100">
                                    <img height="30px" src={printerImage}></img> PRINT SECURELY
                                </button>
                            </div>
                            <div className="col-lg-12">
                                <button className="btn btn-dark rounded-pill btn-lg m-2 w-100">
                                    <img height="30px" src={phamacyImage}></img> SEND TO PHARMACY
                                </button>
                            </div>
                            <div className="col-lg-12">
                                <button height="10px" className="btn btnColor rounded-pill btn-lg m-2 w-100">
                                    ADD TO PATIENT BAG
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-lg-4"></div> */}
            </div>
            <div className="row m-5"></div>



        </div>
    )
}