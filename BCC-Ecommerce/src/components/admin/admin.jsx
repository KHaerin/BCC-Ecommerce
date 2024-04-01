import { useState, useEffect } from "react";

export default function Admin() {
    
    const backBtn = () => {
        window.location.href = "/";
    };

    return (
        <>  
         <button className="btn btn-dark" type="button" onClick={backBtn}>Go back</button>
            <h1>Admin Page</h1>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1>hurb.</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span>dashboard</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span>Review Application</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span>List of Accounts</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span>List of Sellers</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span>Settings</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <span>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <h1>contents</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
