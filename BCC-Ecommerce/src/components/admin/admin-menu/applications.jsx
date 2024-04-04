import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function applications(){
    const[applicants, setApplicants] = useState([]);

    useEffect(() => {
        fetchApplicants();
    })

    const fetchApplicants = async () => {
        try{
            const response = await axios.get('http://localhost/hurb/SellerApplication/Application.php');
            setApplicants(response.data);
        }catch(error){
            console.error('Error', error);
        }
    };

    const updateApply = () => {
        console.log('clicked');
        const updApply = ('http://localhost/hurb/SellerApplication/updateApplication.php');
        try{
            let verifyData = new FormData();
            const userId = localStorage.getItem('userId');
            verifyData.append('isAccepted', '1');
            verifyData.append('user_id', userId);
            axios.post(updApply, verifyData)
            .then(response => {
                console.log(response.data, 'asd');
                if (response.data === 'Success') {
                    alert('Please check your email for verification');
                } else {
                    alert('Email not registered');
                }
            })
            .catch(error => alert(error));
        }catch(error){
            console.error('Error updating', error);
        }

     
    }

    return(
        <>
            <div className="container">
                    <div className="row">
                        <div className="col">
                            <h1>dasburd</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                              <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col" colSpan="">ID</th>
                                        <th scope="col" colSpan="" >Applicant Name</th>
                                        <th scope="col" colSpan="">Business Name</th>
                                        <th scope="col" colSpan="">Phone Number</th>
                                        <th scope="col" colSpan="">Email</th>
                                        <th scope="col" colSpan="">Country</th>
                                        <th scope="col" colSpan="">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {applicants.map((applicant, index) => (
                                            <tr  key={applicant.check_id}>
                                                <th scope="row">{index + 1}</th>
                                                <td colSpan="">test name</td>
                                                <td colSpan="">{applicant.business_name}</td>
                                                <td colSpan="">test number</td>
                                                <td colSpan="">{applicant.user_email}</td>
                                                <td colSpan="">{applicant.city_municipality}</td>
                                                <td colSpan=""><button type="button" className={`btn btn-${applicant.isvVerified ===  '1' ? 'success' : 'danger'} `} data-bs-toggle="modal" data-bs-target="#exampleModal">Pending</button></td>
                                            </tr>                
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
            </div>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">ACCEPT APPLICANT</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        Accept Applicant?
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick={updateApply}>Save changes</button>
                    </div>
                    </div>
                </div>
                </div>
            
        </>
    )
}