import './Login.css';
import {Link} from 'react-router-dom';

export default function Login(){
    return(
        <>
        <div className="container" id="loginContainer">
            <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center mb-5">
                            <span className="text-center">WELCOME!</span>
                        </div>
                    </div>
                </div>

                <div className="container" id="formContainer">
                    <div className="container" id="cont">
                        <div className="row d-flex">
                            <div className="col d-flex flex-column justify-content-center align-items-center">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="loginUser" placeholder="Username"/>
                                    <label htmlFor="loginUser">Username / Email</label>
                                </div>

                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="loginPassword" placeholder="Password"/>
                                    <label htmlFor="loginPassword">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-auto" id="noAcc">    
                                <span>No Account? <Link to="/register">Register Here!</Link></span>
                            </div> 
                        </div>
                    </div>
                    <div className="col mb-4 d-flex justify-content-center">
                            <button type="button" className="btn btn-dark" id="loginBtn">Login</button>
                        </div>
                    <div className="col d-flex gap-5 d-flex justify-content-center mb-5">
                        <button type="button" className="btn btn-secondary" id="loginGoogle">Continue with Gogel</button>
                        <button type="button" className="btn btn-secondary" id="loginFB">Peysbook?</button>
                    </div>
                </div>               
        </div>
           
        </>
    )
}

