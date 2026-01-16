import NavBar from "../NavBar/NavBar"
import React, { useState, useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";

import './Staff.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import Swal from 'sweetalert2'


function addCustomerDetail(customerDetail) {
    let newDetail = true;
    if (newDetail) {
        const updatedCustomerDetailArray = [...customerDetailArray, customerDetail];
        setCustomerDetailArray(updatedCustomerDetailArray);
        console.log("hello");
        console.log(customerDetailArray);

    }
}
function deletePet() {
    Swal.fire('Please wait')
    Swal.showLoading();
    axios.delete(`http://localhost:8080/pet/${delPet.petId}`)
        .then(response => {
            console.log('Resource deleted successfully:', response.data);
            Swal.fire({
                title: "Sucess!",
                text: "Pet Deleted Sucessfully!",
                icon: "success"
            });
            Swal.hideLoading();
            console.log(response);
            setReloadTable(!reloadTable);
        })
        .catch(error => {
            console.error('Error deleting resource:', error);
        });

}
function updatePetData() {
    setPetData();
    console.log(pet.petId);
    console.log(pet.petName);
    console.log(pet.type);
    console.log(pet.genre);
    console.log(pet.birthYear);
    console.log(pet.customerId);
    Swal.fire('Please wait')
    Swal.showLoading();
    axios.post('http://localhost:8080/pet', pet)
        .then(function (response) {
            Swal.fire({
                title: "Sucess!",
                text: "Pet Updated Sucessfully!",
                icon: "success"
              });
            Swal.hideLoading();
            console.log(response.data);
            setReloadTable(!reloadTable);
          
        })
}
function setPetData(){
    pet.petId=document.getElementById('updatePetId').value;
    pet.petName=document.getElementById('updatePetName').value;
    pet.type=document.getElementById('updatePetType').value;
    pet.genre=document.getElementById('updateGenre').value;
    pet.birthYear=document.getElementById('updateBirthDay').value;
    pet.customerId=document.getElementById('updateCustomerId').value;

}




 
export default function Staff(){
    
       
    const { handleSubmit, register, reset, formState: { errors } } = useForm();;
    const [inputValue, setInputValue] = useState('');


    const pet = {
        StaffName: null,
        type: null,
        genre: null,
        

    }

    const selectedDoctor = {

        doctorId: 1,
        name: "Dewmi",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000

    }

    const submit = (pet) => {

        pet.StaffName = document.getElementById('pName').value;
        pet.type = document.getElementById('StaffType').value;
        pet.genre = document.getElementById('genrez').value;
        // pet.birthYear = document.getElementById('ages').value;
        // pet.customerId = document.getElementById('oNo').value;
        // pet.gender = document.getElementById('Gender').value;
        // pet.weight = document.getElementById('Weight').value;
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
                    text: "Sucessfully!",
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
        document.getElementById('StaffType').value = null;
        document.getElementById('genrez').value = null;
        // document.getElementById('ages').value = null;
        // document.getElementById('Gender').value = null;
        // document.getElementById('Weight').value = null;
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
                            <h2 className='ms-2' style={{ fontWeight: 'bolder' }}>ADD NEW STAFF MEMBER</h2>
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
            <div className="row mt-3">
                <div className="col-lg-10">

                <div className="col-lg-4 bg-light">
                     <h5 class="ms-3 deco">Staff Member's Details</h5>
                    <form class="row g-30  form1">
                        
                         <div class=" col-md-10">
                            <label for="inputEmail4" class="form-label">Staff's No</label>
                            <input type="text" class="form-control borderColor" id="oNo" />
                        
                            <label for="inputEmail4" class="form-label"> Name</label>
                            <input type="text" class="form-control borderColor" id="Name" />
                       
                            <label for="inputAddress" class="form-label">Email Address</label>
                            <input type="text" class="form-control borderColor" id="Email" />
                        
                            <label for="inputAddress2" class="form-label">Nic</label>
                            <input type="text" class="form-control borderColor" id="nic" />
                        
                            <label for="inputAddress2" class="form-label">Job Role</label>
                            <div class="input-group mb-3">
                                <input {...register("type")} type="text" id='StaffType' class="form-control  borderColor rounded" aria-label="Text input with dropdown button" />
                                <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false"></button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <button type='button' onClick={() => { document.getElementById('StaffType').value = "Doctor" }} className='btn btn-light w-100'>Doctor</button>
                                    <button type='button' onClick={() => { document.getElementById('StaffType').value = "Pharmacist" }} className='btn btn-light w-100'>Pharmacist</button>
                                    
                                   
                                </ul>
                            </div>
                        </div>
                        

                        <div class="butt col-12 mb-3">

                            <button type="submit" onClick={handleSubmit(submit)} class="btn btn-primary">Add</button>
                        </div>
                    </form>
                </div>
                </div>
                
                <div className="col-lg-2">
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

                    

                </div>
            </div> 
        </div>
    )
          
    
} 