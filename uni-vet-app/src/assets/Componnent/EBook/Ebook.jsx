import NavBar from "../NavBar/NavBar";
import './EBook.css';
import ebook from '../../img/ebook.png'




export default function Ebook() {
    return (
        <div className="container-fluid">
            <NavBar></NavBar>
            <div className="row g-0 m-0">
                <div class="spinner-border" id="spinner" role="status">
                    <span class="">Loading...</span>
                </div>
                <div className="col-lg-12 bg-warning g-0  ">

                </div>

                <div className='container' >
                    <div className='row mb-4'>
                        <div className='col-lg-4'>
                            <div>
                                <h1 className='theme'>LET'S SEE E-Book HERE</h1>
                                <img src={ebook} className="d-block ebook" alt="..." />
                            </div>
                        </div>
                        <div className='col-lg-8'>
                            <div >
                                <div className='container' id='search1' >
                                    <div className='row mb-3 '>
                                        <div className='col-lg-12'>
                                            <div class="input-group">
                                                <div class="form-outline" data-mdb-input-init>
                                                    <input id="search-input" type="search" class="form-control" placeholder='search'/>
                                                </div>
                                                <button id="search-button" type="button" class="btn btn-success">
                                                    <i class="bi bi-search"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="row" >
                                    <div className="col-lg-12">
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

                                            {/* <tbody>
                                    {pets && customerDetailArray && pets.length == customerDetailArray.length && pets.map((data, index) => (
                                        <tr>
                                            <td >{data.petId}</td>
                                            <td>{data.petName}</td>
                                            <td>{data.type}</td>
                                            <td>{data.genre}</td>
                                            <td>{data.birthYear}</td>
                                            <td>{data.customerId}</td>
                                            <td>{customerDetailArray[index].firstName}</td>
                                            <td>{customerDetailArray[index].contact}</td>
                                            <td>{customerDetailArray[index].email}</td>
                                            <td><button type="button" onClick={() => { setUpdatePet(data) }} data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                                class="btn btn-success ms-3"><i class="bi bi-pencil-square"></i></button>
                                                <button type="button" onClick={() => { setDeletePet(data) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                    class="btn btn-danger ms-3"><i class="bi bi-trash3"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody> */}
                                        </table>
                                    </div>

                                </div>

                            </div>
                        </div>





                        {/* <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Deleted</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            Are You Sure To Delete This?
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" onClick={() => { setDeletePet(null) }} class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="button" onClick={deletePet} class="btn btn-danger" data-bs-dismiss="modal">Deleted</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                        {/* <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Update Pet Detail Here</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <label for="recipient-name" class="col-form-label">Pet Id:</label>
                                            <input type="text" value={updatePet && updatePet.petId} disabled class="form-control" id="updatePetId" />
                                            <label for="recipient-name" class="col-form-label">Pet Name:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.petName} id="updatePetName"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Type:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.type} id="updatePetType"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Genre:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.genre} id="updateGenre"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Birth Year:</label>
                                            <input type="text" onFocus={() => { setUpdatePet(null) }} value={updatePet && updatePet.birthYear} id="updateBirthDay"
                                                class="form-control" />
                                            <label for="recipient-name" class="col-form-label">Customer Id:</label>
                                            <input type="text" value={updatePet && updatePet.customerId} disabled class="form-control" id="updateCustomerId" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Discard</button>
                                            <button type="button" onClick={updatePetData}  data-bs-dismiss="modal" class="btn btn-success">Updated</button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                    </div>
                    <div className="row" >
                    <div className="col-lg-4"></div>
                                    <div className="col-lg-8">
                                        <table class="table table-bordered ">
                                            <thead className="table-warning text-center">
                                                <tr >
                                                    <th scope="col">Vaccine Id</th>
                                                    <th scope="col">Vaccine Name</th>
                                                    <th scope="col">Given</th>
                                                    <th scope="col">Date</th>
                                                    <th scope="col">Option</th>
                                                    
                                                </tr>
                                            </thead>

                                            {/* <tbody>
                                    {pets && customerDetailArray && pets.length == customerDetailArray.length && pets.map((data, index) => (
                                        <tr>
                                            <td >{data.petId}</td>
                                            <td>{data.petName}</td>
                                            <td>{data.type}</td>
                                            <td>{data.genre}</td>
                                            <td>{data.birthYear}</td>
                                            <td>{data.customerId}</td>
                                            <td>{customerDetailArray[index].firstName}</td>
                                            <td>{customerDetailArray[index].contact}</td>
                                            <td>{customerDetailArray[index].email}</td>
                                            <td><button type="button" onClick={() => { setUpdatePet(data) }} data-bs-toggle="modal" data-bs-target="#exampleModal2"
                                                class="btn btn-success ms-3"><i class="bi bi-pencil-square"></i></button>
                                                <button type="button" onClick={() => { setDeletePet(data) }} data-bs-toggle="modal" data-bs-target="#staticBackdrop"
                                                    class="btn btn-danger ms-3"><i class="bi bi-trash3"></i></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody> */}
                                        </table>
                                    </div>

                                </div>
  
                </div>
            </div>
        </div>

    )
}