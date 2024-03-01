import DoctorCard from "../DoctorCard/DoctorCard";
import PetCard from "../PetCard/PetCard";
import NavBar from "../NavBar/NavBar";
import './Prescription.css'
export default function Prescription() {
    return (
        <div className="container-fluid g-0 ">
            <div className="row g-0 m-0">
                <div className="col-lg-12 bg-warning g-0  ">
                    <NavBar />
                </div>
                <div className="col-lg-3">

                    <div className="m-2">
                        <DoctorCard />
                    </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center">
                    <div className="container ">
                        <div className="row ">
                            <div className="">
                                Hi Dr.Thushara
                            </div>
                            <div className="">
                               <h1>GOOD MORNING !</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 ">
                    <div className="m-2">
                        <PetCard />
                    </div>

                </div>
            </div>
            <hr className="m-0"></hr>



        </div>
    )
}