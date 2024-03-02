import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
import './Prescription.css'
import addImage from '../../img/add.png'
import refreshImage from '../../img/refresh.png'
import printerImage from '../../img/printer.png'
import phamacyImage from '../../img/phamacy.png'
export default function Prescription() {

    
    return (
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
                </div>
                <div className="col-lg-3">
                    <div className="m-2">
                        <PetCard />
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
                        <DoctorCard />
                    </div>
                </div>

            </div>
            <hr className="m-0"></hr>
            <div className="row">
                <div className="col-lg-5  m-2 ">
                    <div className="makeRoundedContainer shadow-lg">
                        <textarea className="form-control  borderColor" id="exampleFormControlTextarea1" rows="3" placeholder="Reason for veterinary help"></textarea>
                    </div>
                </div>
                <div className="col-lg-3"></div>
                <div className="col-lg-3">
                    <div class="input-group mt-2 mb-3 ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" class="form-control borderColor rounded" placeholder="Selcet Pet" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-5 m-2">


                    <div class="input-group mb-3 ">

                        <div className="className  shadow-lg makeRoundedContainer col-11">
                            <input type="text" class="form-control borderColor rounded" placeholder="Medicine Name" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className="col-lg-2 m-2">


                    <div class="input-group mb-3  ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="text" class="form-control borderColor rounded" placeholder="Dosage" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-2 m-2">


                    <div class="input-group mb-3  ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="text" class="form-control borderColor rounded" placeholder="Quantity per Day" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-1 m-2">


                    <div class="input-group mb-3  ">

                        <div className="className shadow-lg makeRoundedContainer col-11">
                            <input type="text" class="form-control borderColor rounded" placeholder="days" aria-label="Amount (to the nearest dollar)" />
                        </div>

                        <div class="btn-group col-1 ">

                            <button type="button" class="btn btn-outline-primary addLeftMargin rounded   dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false">
                                <span class="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>

                                <li><a class="dropdown-item" href="#">Separated link</a></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-1 ">
                    <div className="container d-flex align-items-center m-2">
                        <div className="row">
                            <div className="col-6">
                                <button className="btn btn-light p-0 m-0 g-0">
                                    <img height="40px" src={addImage}></img>
                                </button>
                            </div>
                            <div className="col-6">
                                <button className="btn btn-light p-0 m-0 g-0">
                                    <img height="40px" src={refreshImage}></img>
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <div className="row">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                    <table class="table table-bordered ">
                        <thead className="table-warning">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td colspan="2">Larry the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-4"></div>
                <div className="col-lg-4">

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12"><hr></hr>  </div>
                            <div className="col-lg-8">Total</div>
                            <div className="col-lg-4">Rs 800.00</div>

                            <div className="col-lg-12"><hr></hr>  </div>
                            <div className="col-lg-12">
                                <button className="btn btn-primary rounded-pill btn-lg m-2 w-100">
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