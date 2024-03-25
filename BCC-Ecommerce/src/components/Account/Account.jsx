import "bootstrap/dist/css/bootstrap.min.css"
import './Account.css';

export default function Account(){
    return(
    <>
       <div className="container-fluid" id="account-container">
            <div className="row gap-5">
                <div className="col-auto" id="dashboard-container">
                    <div className="container dashboard">
                        <div className="image-cont d-flex align-items-center gap-3 mb-4">
                            <img src="" alt="profile" className="d-flex" id="profile-picture" />
                            <span>name</span>
                        </div>
                        <hr className="border border-dark border-1 opacity-40" id="hr"/>
                        <div className="dashboard-menu">
                            <ul className="navbar-nav gap-2">
                                <li className="nav-item">
                                    <a href="" className="nav-link active">Profile</a>
                                </li>
                                    
                                <li className="nav-item">
                                    <a href="" className="nav-link">Change Password</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" className="nav-link">My Purchase</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" className="nav-link">My Vouchers</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container bg-secondary" id="dashboardBox">
                        <div className="row">
                            <div className="col">
                                <div className="titleText d-flex flex-column mt-4 mb-3">
                                    <h1 className="d-flex align-items-center">My Profile</h1>
                                    <hr className="border border-dark border-1 opacity-40" id="hr2"/>
                                </div>

                                <div className="profile-field-container">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                                        <label htmlFor="floatingInput">Name</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                                        <label htmlFor="floatingInput">Username</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                                        <label htmlFor="floatingInput">Phone Number</label>
                                    </div>

                                    <button type="button" className="btn btn-primary">Confirm</button>
                                </div>
                            </div>
                            <div className="col d-flex flex-column justify-content-center mt-5">
                                <div className="container bg-dark d-flex flex-column justify-content-center align-items-center" id="profile-container-img">
                                    <img src="" alt="profile" className="d-flex" id="profile-picture"/>

                                    <div className="mb-3">
                                        <label htmlFor="formFile" className="form-label">Default file input example</label>
                                        <input className="form-control" type="file" id="formFile"/>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                                        <label htmlFor="floatingInput">Phone Number</label>
                                    </div>

                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="floatingInput" placeholder="Username"/>
                                        <label htmlFor="floatingInput">Phone Number</label>
                                    </div>
                                    <button type="button" className="btn btn-primary">Confirm</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    </>
    )
}