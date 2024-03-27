import './register.css';
import {Link} from 'react-router-dom';

export default function Register(){

    
    return(
        <>
            <div className="container-fluid" id="registerContainer">
                <div className="row row-cols-2 gap-3">
                    <div className="col d-flex gap-5" id="regImages">
                        <img src="" alt="" id="register-img" className='mt-5' />
                        <img src="" alt="" id="register-img"/>
                    </div>
                    <div className="col" id="formContainerReg">
                        <h1 className='d-flex mb-5'>SIGN UP</h1>
                        <div className="container">
                            <div className="row row-cols-2">
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="firstName" placeholder='First Name'/>
                                        <label htmlFor="firstName">First Name</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="lastName" placeholder='Last Name'/>
                                        <label htmlFor="lastName">Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row row-cols-1">
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="userName" placeholder='Username'/>
                                        <label htmlFor="userName">Username</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="password" placeholder='Password'/>
                                        <label htmlFor="password">Password</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="confirmPassword" placeholder='Confirm Password'/>
                                        <label htmlFor="confirmPassword">Confirm Password</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="text" className="form-control" id="phoneNumber" placeholder='Phone Number'/>
                                        <label htmlFor="phoneNumber">Phone Number</label>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="form-floating mb-4">
                                        <input type="email" className="form-control" id="email" placeholder='Email Address'/>
                                        <label htmlFor="email">Email Address</label>
                                    </div>
                                </div>
                                <div className="col mb-4">
                                    <button className='btn btn-dark' type='button'>SIGN UP</button>
                                </div>
                                <div className="col">
                                    <span>Already have an account? <Link to="/login">Log in.</Link></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}