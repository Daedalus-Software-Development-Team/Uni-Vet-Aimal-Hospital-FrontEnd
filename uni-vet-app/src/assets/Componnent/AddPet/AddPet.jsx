import React, { useState, useEffect } from 'react';
import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
import './AddPet.css'
import { useForm } from 'react-hook-form'

export default function AddPet() {

    const { handleSubmit,register,reset, formState: { errors } } = useForm();
    const [updateMode, setUpdateMode] = useState(false);

    // const petDetail= {
    //     fName: null,
    //     lName: null,
    //     email: null,
    //     cont: null,
    //     pName: null,
    //     type: null,
    //     family: null,
    //     age: null
    // }

    const selectedDoctor = {
        doctorId: 1,
        name: "Dewmi",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000
    }

    const submit = (data) => {
        data.fName = document.getElementById('fName').value;
        data.lName = document.getElementById('lName').value;
        data.email = document.getElementById('email').value;
        data.cont = document.getElementById('cont').value;
        data.pName = document.getElementById('pName').value;
        data.type = document.getElementById('type').value;
        data.family = document.getElementById('family').value;
        data.age = document.getElementById('age').value;

        console.log(data);

        addPetDetail(data);
        resetForm();

    }
    function addPetDetail(petDetail) {

        let newDetail = true;

        if (newDetail) {
            const updatedpetDetailArray = [...petDetailArray, petDetail];
            setpetDetailArray(updatedpetDetailArray);
            console.log("hello");
            console.log(petDetailArray);
            // console.log(updatedpetDetailArray);
            calculateTotal(updatedpetDetailArray);

        } else {
            setReloadTable(!reladTable);
            setUpdateMode(false);
            // calculateTotal(petDetailArray);
        }

    }

    const resetForm = () => {
        reset(); // Reset react-hook-form fields
        document.getElementById('fName').value = null;
        document.getElementById('lName').value = null;
        document.getElementById('email').value = null;
        document.getElementById('cont').value = null;
        document.getElementById('pName').value = null;
        document.getElementById('type').value = null;
        document.getElementById('family').value = null;
        document.getElementById('age').value = null;

        setUpdateMode(false);
    }

    return (
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
                </div>
                <div className="headerb ms-5">
                    <div className="row">
                        <div className="col-lg-8 bg-light g-0 mt-2  ">
                            <h5>Hi Dr.Dewmi</h5>
                            <h2 style={{ fontWeight: 'bolder' }}>LETS'S CHOOSE/ADD NEXT PET</h2>
                        </div>
                        <div className="col-lg-4 bg-light g-0  ">
                            <div className="m-2">
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

                        <h5 class="ms-3 deco">Pet Owner Detail</h5>

                        <div class=" col-md-6">
                            <label for="inputEmail4" class="form-label">First Name</label>
                            <input type="text" class="form-control borderColor" id="fName" />
                        </div>
                        <div class="nameL col-md-6">
                            <label for="inputPassword4" class="form-label">Last Name</label>
                            <input type="text" class="form-control borderColor" id="lName" />
                        </div>
                        <div class="email col-md-6">
                            <label for="inputAddress" class="form-label">Email Address</label>
                            <input type="text" class="form-control borderColor" id="email" />
                        </div>
                        <div class="cont col-md-6">
                            <label for="inputAddress2" class="form-label">Contact Num</label>
                            <input type="text" class="form-control borderColor" id="cont" />
                        </div>

                        <h5 class="mt-2 ms-3 deco">Pet Detail</h5>

                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Name</label>
                            <input type="text" class="form-control borderColor" id="pName" />
                        </div>
                        <div class="col-md-4 ">
                            <label for="inputState" class="form-label">Pet Type</label>
                    
                                <input type="text" id="type" {...register("type")} class="form-control borderColor rounded" placeholder="Dog" aria-label="Amount (to the nearest dollar)" />
                            
                        </div>
                        <div className="col-md-2 mt-5">
                            <div class="btn-group col-1 ">

                                <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                    <span class="visually-hidden">Toggle Dropdown</span>
                                </button>
                                <ul class="dropdown-menu">

                                    <button onClick={() => { document.getElementById('type').value = "dog" }} className='btn btn-light w-100'>Dog</button>
                                    <button onClick={() => { document.getElementById('type').value = "cat" }} className='btn btn-light w-100'>cat</button>
                                    <button onClick={() => { document.getElementById('type').value = "cow" }} className='btn btn-light w-100'>cow</button>
                                    <button onClick={() => { document.getElementById('type').value = "bird" }} className='btn btn-light w-100'>bird</button>
                                    <button onClick={() => { document.getElementById('type').value = "rabbits" }} className='btn btn-light w-100'>rabbits</button>
                                    <button onClick={() => { document.getElementById('type').value = "fish" }} className='btn btn-light w-100'>fish</button>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Family</label>
                            <input type="text" class="form-control borderColor" id="family" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Age</label>
                            <input type="text" class="form-control borderColor" id="age" />
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