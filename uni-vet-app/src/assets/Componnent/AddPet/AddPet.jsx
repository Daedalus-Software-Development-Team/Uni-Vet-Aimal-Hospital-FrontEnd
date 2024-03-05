import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
import './AddPet.css'

export default function AddPet() {
    const selectedDoctor = {
        doctorId: 1,
        name: "Thushara",
        salary: 33.9,
        description: "Bachelor of Veterinary Science (BVSc) | UOC",
        channelingFee: 2000
    }
    return (
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
                </div>
                <div className="headerb ms-5">
                    <div className="row">
                        <div className="col-lg-8 bg-light g-0  ">
                            <h5>Hi Dr.Dewmi</h5>
                            <h2>LETS'S CHOOSE/ADD NEXT PET</h2>
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
                    <form class="row g-3 ">

                            <h5 class="ms-3 ">Pet Owner Detail</h5>
                      
                        <div class="col-md-6">
                            <label for="inputEmail4" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="inputEmail4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputPassword4" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="inputPassword4" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Email Address</label>
                            <input type="text" class="form-control" id="inputAddress"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Contact Num</label>
                            <input type="text" class="form-control" id="inputAddress2"/>
                        </div>

                            <h5 class="mt-2 ms-3">Pet Detail</h5>

                        <div class="col-md-6">
                            <label for="inputCity" class="form-label">Name</label>
                            <input type="text" class="form-control" id="inputCity" />
                        </div>
                        <div class="col-md-6">
                            <label for="inputState" class="form-label">Pet Type</label>
                            <select id="inputState" class="form-select">
                                <option selected>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress" class="form-label">Family</label>
                            <input type="text" class="form-control" id="inputAddress"/>
                        </div>
                        <div class="col-md-6">
                            <label for="inputAddress2" class="form-label">Age</label>
                            <input type="text" class="form-control" id="inputAddress2"/>
                        </div>
               
                        <div class="butt col-12">
                        
                            <button type="submit" class="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>

    )
}