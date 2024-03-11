import React, { useState, useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";
import NavBar from "../NavBar/NavBar";
import './AddPet.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'

export default function AddPet() {

    const { handleSubmit, register, reset, formState: { errors } } = useForm();;
    const [inputValue, setInputValue] = useState('');


    const pet = {

        petName: null,
        type: null,
        genre: null,
        birthYear: null,
        customerId: null,
        gender: null,
        weight: null,

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
        pet.birthYear = document.getElementById('ages').value;
        pet.customerId = document.getElementById('oNo').value;
        pet.gender = document.getElementById('Gender').value;
        pet.weight = document.getElementById('Weight').value;
        console.log(pet);
        console.log("hello");
        postData(pet);
        resetForm();

    }

    const handleSubmit2 = (event) => {
        event.preventDefault();
        submit2(inputValue);
    };

    const submit2 = (no) => {
        console.log(no);

        if (no.match(/(?:\+94|0)(?:7\d|77|78|79)\d{7}/)) {

            Swal.fire('Please wait')
            Swal.showLoading();

            let dataArray = [];

            axios.get('http://localhost:8080/customer')
                .then(function (response) {
                    // Assuming response.data is an array
                    dataArray = response.data;


                    // console.log(dataArray[3].contact); // Now dataArray contains the response data
                    for (let index = 0; index < dataArray.length; index++) {
                        // console.log(dataArray[3].contact);

                        const element = dataArray[index].contact;
                        if (element === no) {
                            submit3(index);
                        }
                    }
                })
        } else {
            Swal.fire({
                title: "Error!",
                text: "Contact No is Invalid try again",
                icon: "error"
            });
            resetForm();
        }
    };

    function submit3(index) {
        console.log(index);
        axios.get(`http://localhost:8080/customer/${index + 1}`, index)
            .then(function (response) {
                Swal.fire({
                    title: "Sucess!",
                    text: "Pet Add Sucessfully!",
                    icon: "success"
                });
                Swal.hideLoading();
                console.log(response.data);
                setCustomers(response.data)

            })
    };

    function setCustomers(dataCust) {
        document.getElementById('Name').value = dataCust.firstName + " " + dataCust.lastName;
        document.getElementById('Email').value = dataCust.email;
        document.getElementById('nic').value = dataCust.nic;
        document.getElementById('oNo').value = dataCust.customerId;

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
        }
    });

    function postData(pet) {
        Swal.fire('Please wait')
        Swal.showLoading();

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
        document.getElementById('Gender').value = null;
        document.getElementById('Weight').value = null;
        setInputValue(null);
    }

    return (
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="greet col-lg-8 bg-light g-0 mt-2">
                            <h5 className='ms-2'>Hi Dr.Dewmi</h5>
                            <h2 className='ms-2' style={{ fontWeight: 'bolder' }}>LETS'S CHOOSE/ADD NEXT PET</h2>
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
                        <input type="text" class="ms-3 mt-3 mx-2 mb-3" placeholder="&#128269;Search Pet by Id" />
                        <button className='button2 '><svg xmlns="http://www.w3.org/2000/svg" color='black' fill="currentColor" class="bi bi-search icon" viewBox="0 0 16 16 ">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg></button>
                    </div>
                    <form class="row g-3 form1">

                        <h5 class="ms-3 deco">Pet Owner Details</h5>

                        <div class=" col-md-12">
                            <label for="inputEmail4" class="form-label">Owner's Mobile Number</label>
                            <div class="input-group">
                                <input type="text" value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)} class="form-control" placeholder="Enter your Mobile Number to Continue ex:-(07 / +94)" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                <button onClick={handleSubmit2} class="btn btn-outline-secondary" type="button" id="button-addon2"><i class="bi bi-check2"></i></button>
                            </div>
                            {errors.customerId && <span>Mobile Number Not Provided</span>}
                        </div>

                        <div class=" col-md-6">
                            <label for="inputEmail4" class="form-label">Owner's No</label>
                            <input type="text" class="form-control borderColor" id="oNo" />
                        </div>

                        <div class=" col-md-6">
                            <label for="inputEmail4" class="form-label">Owner's Name</label>
                            <input type="text" class="form-control borderColor" id="Name" />
                        </div>

                        <div class="email col-md-6">
                            <label for="inputAddress" class="form-label">Email Address</label>
                            <input type="text" class="form-control borderColor" id="Email" />
                        </div>

                        <div class="cont col-md-6">
                            <label for="inputAddress2" class="form-label">Nic</label>
                            <input type="text" class="form-control borderColor" id="nic" />
                        </div>

                        <h5 class="mt-2 ms-3 deco">Pet Details</h5>

                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Pet Name</label>
                            <input type="text" id="pName" {...register("petName", { required: true, pattern: /^[a-zA-Z ]+$/ })} class="form-control borderColor rounded" aria-label="Amount (to the nearest dollar)" />
                            {errors.petName && <span>Pet Name Not Provided</span>}
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Pet Type</label>
                            <div class="input-group mb-3">
                                <input {...register("type")} type="text" id='petType' class="form-control  borderColor rounded" aria-label="Text input with dropdown button" />
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Dog" }} className='btn btn-light w-100'>Dog</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Cat" }} className='btn btn-light w-100'>Cat</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Rabbit" }} className='btn btn-light w-100'>Rabbit</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Cow" }} className='btn btn-light w-100'>Cow</button>
                                    <button type='button' onClick={() => { document.getElementById('petType').value = "Bird" }} className='btn btn-light w-100'>Bird</button>
                                   
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Breed</label>
                            <input {...register("genre", { required: true, pattern: /^[a-zA-Z ]+$/ })} type="text" class="form-control borderColor" id="genrez" />
                            {errors.genre && <span>Breed Not Provided</span>}
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Birth Year</label>
                            <input {...register("birthYear", { required: true, pattern: /^(199\d|200\d|2024)$/ })} type="text" class="form-control borderColor" id="ages" />
                            {errors.birthYear && <span>Birth Year Not Provided</span>}
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Gender</label>
                            <div class="input-group mb-3">
                                <input {...register("gender")} type="text" id='Gender' class="form-control  borderColor rounded" aria-label="Text input with dropdown button" />
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <button type='button' onClick={() => { document.getElementById('Gender').value = "Female" }} className='btn btn-light w-100'>Female</button>
                                    <button type='button' onClick={() => { document.getElementById('Gender').value = "Male" }} className='btn btn-light w-100'>Male</button>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Weight</label>
                            <input {...register("weight", { required: true, pattern: /[0-9]*\.[0-9]+/ })} type="text" class="form-control borderColor" id="Weight" />
                            {errors.weight && <span>Weight Not Provided</span>}
                        </div>

                        <div class="butt col-12 mb-3">

                            <button type="submit" onClick={handleSubmit(submit)} class="btn btn-primary">Enter</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}