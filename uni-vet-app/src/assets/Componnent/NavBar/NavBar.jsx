import './NavBar.css';
import dog from '../../img/dog.png'
import { Link } from "react-router-dom";

export default function NavBar(){
    return(
        <div className="  g-0 m-0">          
            <nav className="navbar navbar-expand-lg bg-body-tertiary" id='nav'>
                {/* <nav class="navbar navbar-dark bg-dark"> */}
                
                <div className="container-fluid">
                    <img src={dog} className="d-block" alt="..." />
                   
                    <Link to="/" className="navbar-brand " id='txt1' href="#">Uni-Vet Care <br />
                        <span className="txt2">Animal Hospital</span></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <Link to="/addPet" className="nav-link">Add Pet</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/addPetDetails" className="nav-link" >Add Pet Details</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/apointment" className="nav-link" href="#">Appoinment</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/prescription" className="nav-link" href="#">Prescription</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <button className="btn btn-outline-secondary" type="submit">Login</button> */}
                            <button type="button" class="btn btn-secondary " id='loginBtn'>Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}