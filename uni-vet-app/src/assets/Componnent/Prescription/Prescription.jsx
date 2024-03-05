import React, { useState, useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
import './Prescription.css'
import addImage from '../../img/add.png'
import refreshImage from '../../img/refresh.png'
import printerImage from '../../img/printer.png'
import phamacyImage from '../../img/phamacy.png'
import updateImage from '../../img/update.png'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import Swal from 'sweetalert2'

export default function Prescription() {
    const [pets, setPets] = useState(null);
    const [selectedPet, setSelectedPet] = useState(null);

    const [slectedCustomer, setCustomer] = useState(null);

    const [medicines, setMedicines] = useState(null);
    const [selectedMedicine, setSelectedMedicine] = useState(null);

    const [prescriptionDetailArray, setPrescriptionDetailArray] = useState([]);
    const [meal, setMeal] = useState(null);

    const [avalable, setAvailable] = useState(false);

    const [reladTable, setReloadTable] = useState(true);

    const { handleSubmit, register, reset, formState: { errors } } = useForm();

    const [newId, setNewId] = useState(0);

    const [updateMode, setUpdateMode] = useState(false);

    const precription = {
        customerId: null,
        doctorId: null,
        petId: null,
        description: null,
        total: null,
        prescriptionDetailArray: null
    }


    const submit = (data) => {
        data.beforeMeal = meal;
        data.available = avalable;
        if (selectedMedicine != null) {
            data.medicineName = selectedMedicine.medicineName;
            data.medicineId = selectedMedicine.medicineId;
            data.price = parseFloat(selectedMedicine.price);
        } else {
            data.medicineId = "New" + "(" + newId + ")";
            setNewId(newId + 1);
        }
        data.dosage = document.getElementById('dos').value;
        data.dailyQuantity = document.getElementById('qty').value;
        data.days = document.getElementById('days').value;


        console.log(meal);
        console.log(data);

        addPrescriptionDetail(data);
        resetForm();

    }

    const resetForm = () => {
        setSelectedMedicine(null);
        setMeal(null);
        setAvailable(false);
        reset(); // Reset react-hook-form fields
        document.getElementById('medName').value = null;
        document.getElementById('dos').value = null;
        document.getElementById('qty').value = null;
        document.getElementById('days').value = null;
        document.getElementById('price').value = null;
        document.getElementById('defaultCheck1').checked = false;
        document.getElementById('bMeal').checked = null;
        document.getElementById('aMeal').checked = null;

        setUpdateMode(false);
    }

    const selectedDoctor = {
        doctorId: 1,
        name: "Thushara",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000,

    }

    const [total, setTotal] = useState(selectedDoctor.channelingFee);

    function addPrescriptionDetail(perscriptionDetail) {

        let newDetail = true;


        if (newDetail) {
            const updatedPrescriptionDetailArray = [...prescriptionDetailArray, perscriptionDetail];
            setPrescriptionDetailArray(updatedPrescriptionDetailArray);
            console.log("hello");
            console.log(prescriptionDetailArray);
            // console.log(updatedPrescriptionDetailArray);
            calculateTotal(updatedPrescriptionDetailArray);

        } else {
            setReloadTable(!reladTable);
            setUpdateMode(false);
            calculateTotal(prescriptionDetailArray);
        }

    }


    function deleteMedicineDetail(data) {
        for (let i = 0; i < prescriptionDetailArray.length; i++) {
            if (prescriptionDetailArray[i].medicineId === data.medicineId) {
                let spliced = prescriptionDetailArray.splice(i, 1);
                console.log("Removed element: " + spliced);
                console.log(prescriptionDetailArray);
            }
        }
        setReloadTable(!reladTable);
        calculateTotal(prescriptionDetailArray);
    }

    function setDetailToUpdate(data) {
        setSelectedMedicine({
            medicineId: data.medicineId,
            medicineName: data.medicineName,
            price: parseFloat(data.price)
        });
        reset();

        document.getElementById('medName').value = data.medicineName;
        document.getElementById('dos').value = data.dosage;
        document.getElementById('qty').value = data.dailyQuantity;
        document.getElementById('days').value = data.days;
        document.getElementById('price').value = parseFloat(data.price);
        document.getElementById('defaultCheck1').checked = data.available;
        if (data.beforeMeal != null) {
            document.getElementById('bMeal').checked = data.beforeMeal;
            document.getElementById('aMeal').checked = !data.beforeMeal;
        } else {
            document.getElementById('bMeal').checked = null;
            document.getElementById('aMeal').checked = null;
        }
        setUpdateMode(true);

    }

    function calculateTotal(array) {

        console.log("hi")
        console.log(array);
        let tot = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].available) {
                tot += parseFloat(array[i].price);
            }
        }
        tot = tot + selectedDoctor.channelingFee;
        setTotal(tot);
        console.log(tot);

    }

    function createPrescription() {

        for (let i = 0; i < prescriptionDetailArray.length; i++) {
            if ((prescriptionDetailArray[i].medicineId + "").charAt(0) == 'N') {
                prescriptionDetailArray[i].medicineId = null;
            }
        }

        precription.customerId = slectedCustomer.customerId;
        precription.doctorId = selectedDoctor.doctorId;
        precription.petId = selectedPet.petId;
        precription.description = document.getElementById('descriptionArea').value;
        precription.total = total;
        precription.prescriptionDetailArray = prescriptionDetailArray

        console.log(precription);
        postData();

    }

    function postData() {
        Swal.fire('Please wait')
        Swal.showLoading();
        axios.post('http://localhost:8080/prescription', precription)
            .then(function (response) {
                Swal.fire({
                    title: "Sucess!",
                    text: "Prescription Generated Sucessfully!",
                    icon: "success"
                  });
                Swal.hideLoading();
                console.log(response);
                reSetToInitil();
              
            })
    }
    function reSetToInitil() {

        document.getElementById('descriptionArea').value = "";
        document.getElementById('pet').value = "";

        setPrescriptionDetailArray([]);
        setSelectedPet(null);
        setCustomer(null);
        setSelectedMedicine(null);
        setMeal(null)
        setAvailable(false);
        setReloadTable(true);
        setNewId(0);
        setUpdateMode(false);
        setTotal(selectedDoctor.channelingFee);
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

            try {
                const response = await fetch("http://localhost:8080/medicine");
                const data = await response.json();
                console.log(data)

                setMedicines(data);

            } catch (error) {

                console.log("Error fetching medicine data:", error);
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
                <div className="col-lg-5  m-2 ">
                    <div className="makeRoundedContainer shadow-lg">
                        <textarea className="form-control  borderColor" id="descriptionArea" rows="3" placeholder="Reason for veterinary help"></textarea>
                    </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div class="input-group mt-2 mb-3 ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" id='pet' onFocus={() => { setSelectedPet(null) }} class="form-control borderColor rounded" placeholder="Selcet Pet" aria-label="Amount (to the nearest dollar)" value={(selectedPet && selectedPet.petId + "-" + selectedPet.petName) || (!selectedPet && null)}></input>
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
                <div className="col-lg-5 m-2">


                    <div class="input-group ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="medName" {...register("medicineName")} onFocus={() => { setSelectedMedicine(null) }} class="form-control borderColor rounded" placeholder="Medicine Name" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && selectedMedicine.medicineName) || (!selectedMedicine && null)} />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                {medicines && medicines.map((medicine) => (
                                    <button onClick={() => { setSelectedMedicine(medicine) }} className='btn btn-light w-100'>{medicine.medicineId} - {medicine.medicineName} </button>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>


                <div className="col-lg-2 m-2">


                    <div class="input-group  ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="text" id="dos" {...register("dosage")} class="form-control borderColor rounded" placeholder="Dosage" aria-label="Amount (to the nearest dollar)" />
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
                            <input type="number" id="qty" {...register("dailyQuantity")} class="form-control borderColor rounded" placeholder="Quantity per day" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <button onClick={() => { document.getElementById('qty').value = 1 }} className='btn btn-light w-100'>1 </button>
                                <button onClick={() => { document.getElementById('qty').value = 2 }} className='btn btn-light w-100'>2 </button>
                                <button onClick={() => { document.getElementById('qty').value = 3 }} className='btn btn-light w-100'>3 </button>
                                <button onClick={() => { document.getElementById('qty').value = 4 }} className='btn btn-light w-100'>4</button>
                                <button onClick={() => { document.getElementById('qty').value = 5 }} className='btn btn-light w-100'>5 </button>
                                <button onClick={() => { document.getElementById('qty').value = 6 }} className='btn btn-light w-100'>6</button>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-1 m-2">


                    <div class="input-group ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="number" id="days" {...register("days")} class="form-control borderColor rounded" placeholder="days" aria-label="Amount (to the nearest dollar)" />
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
                        <input type="number" id="price" {...register("price")} onFocus={() => { setSelectedMedicine(null) }} class="form-control borderColor rounded" placeholder="Price" aria-label="Amount (to the nearest dollar)" value={(selectedMedicine && parseFloat(selectedMedicine.price)) || (!selectedMedicine && null)} />
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

                </div>


            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
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



                        </tbody>
                    </table>
                </div>
                <div className="col-lg-1"></div>
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
                <div className="col-lg-4"></div>
            </div>
            <div className="row m-5"></div>



        </div>
    )
}