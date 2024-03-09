import React, { useState, useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";
import NavBar from "../NavBar/NavBar";
import './AddPet.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddPet() {

    const { handleSubmit,register,reset, formState: { errors } } = useForm();
    const [updateMode, setUpdateMode] = useState(false);

        const pet = {

            petName:null,
            type:null,
            genre:null,
            age:null,
            customerId:null,
        }

    const selectedDoctor = {
        doctorId: 1,
        name: "Dewmi",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000
    }


    const submit = (pet) => {

        pet.petName = document.getElementById('pName').value;
        pet.type = document.getElementById('petType').value;
        pet.genre = document.getElementById('genrez').value;
        pet.age = document.getElementById('ages').value;
        pet.customerId = document.getElementById('oNo').value;
        console.log(pet);
        console.log("hello");
        postData(pet);
        resetForm();

    }

    function postData(pet) {
        Swal.fire('Please wait')
        Swal.showLoading();
        console.log(pet); 
        axios.post('http://localhost:8080/pet', pet)
            .then(function (response) {
                Swal.fire({
                    title: "Sucess!",
                    text: "Pet Add Sucessfully!",
                    icon: "success"
                  });
                Swal.hideLoading();
                console.log(response);
                reSetToInitil();
              
            })
    }

    const resetForm = () => {
        reset(); // Reset react-hook-form fields
        document.getElementById('oNo').value = null;
        document.getElementById('pName').value = null;
        document.getElementById('petType').value = null;
        document.getElementById('genrez').value = null;
        document.getElementById('ages').value = null;
        setUpdateMode(false);
    }

    return (
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
                </div>
                <div className="headerb">
                    <div className="row">
                        <div className="col-lg-8 bg-light g-0 mt-2  ">
                            <h5>Hi Dr.Dewmi</h5>
                            <h2 style={{ fontWeight: 'bolder' }}>LETS'S CHOOSE/ADD NEXT PET</h2>
                        </div>
                        <div className="col-lg-4 bg-light g-0  ">
                            <div className="">
                                {
                                    selectedDoctor &&
                                    (<DoctorCard doctor={selectedDoctor} />)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-4"></div>
                <div className="col-lg-4 bg-light">
                    <div className="search bg-warning mb-2">
                        <input type="text" class="ms-5 mt-3 mx-5 mb-3" placeholder="&#128269;Search Pet by Id" />
                    </div>
                    <form class="row g-3 mb-4 form1">

                        <h5 class="ms-3 deco">Pet Owner Details</h5>

                        <div class=" col-md-12">
                            <label for="inputEmail4" class="form-label">Owner's Reg.no</label>
                            <input {...register("customerId")} type="text" class="form-control borderColor" id="oNo" />
                        </div>
                        {/* <div class="email col-md-6">
                            <label for="inputAddress" class="form-label">Email Address</label>
                            <input {...register("Email")} type="text" class="form-control borderColor" id="email" />
                        </div>
                        <div class="cont col-md-6">
                            <label for="inputAddress2" class="form-label">Contact Num</label>
                            <input {...register("Contact")} type="text" class="form-control borderColor" id="cont" />
                        </div> */}

                        <h5 class="mt-2 ms-3 deco">Pet Details</h5>

                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Name</label>
                            <input {...register("petName")} type="text" class="form-control borderColor" id="pName" />
                        </div>
                        <div class="col-md-4 ">
                            <label for="inputState" class="form-label">Pet Type</label>
                    
                                <input type="text" id="petType" {...register("type")} class="form-control borderColor rounded"  aria-label="Amount (to the nearest dollar)" />
                            
                        </div>
                        <div className="col-md-2 mt-5">
                            <div class="btn-group col-1 ">

                                <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">

                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Dog" }} className='btn btn-light w-100'>Dog</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Cat" }} className='btn btn-light w-100'>Cat</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Cow" }} className='btn btn-light w-100'>Cow</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Bird" }} className='btn btn-light w-100'>Bird</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Rabbit" }} className='btn btn-light w-100'>Rabbit</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Fish" }} className='btn btn-light w-100'>Fish</button>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Family</label>
                            <input {...register("genre")} type="text" class="form-control borderColor" id="genrez" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Age</label>
                            <input {...register("age")} type="number" class="form-control borderColor" id="ages" />
                        </div>

                        <div class="butt col-12 mb-3">

                            <button type="submit" onClick={handleSubmit(submit)} class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>

    )
}