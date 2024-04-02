import { useState, useEffect } from "react";
import './admin.css';
export default function Admin() {
    
    const backBtn = () => {
        window.location.href = "/";
    };

    return (
        <>  
            <div className="container-fluid " id="admin-container">
                <div className="row p">
                    <div className="col-auto pt-5" id="dashboard">
                        <div className="container" >
                            <div className="row">
                                <div className="col d-flex gap-3">
                                    <img src="" alt="logo" />
                                    <h1>hurb.</h1>
                                </div>
                            </div>
                            <hr className="border border-dark border-1 opacity-40" id="hr"/>
                            <div className="row mb-4">
                                <div className="col">
                                    <span>DIRI ANG ARROW FOR DASHBOARD</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span id="dashboard-menu">dashboard</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span id="dashboard-menu">Application</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span id="dashboard-menu">List of Accounts</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span id="dashboard-menu">List of Sellers</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span id="dashboard-menu">Settings</span>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span id="dashboard-menu" onClick={backBtn}>Logout</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="container pt-5">
                            <div className="row">
                                <div className="col-auto">
                                    <h1>Dashboard</h1>
                                </div>
                                <div className="col">
                                     <label htmlFor="searchBox">Search</label>
                                     <input type="text" id="searchBox" />
                                </div>
                                <div className="col">
                                    <img src="" alt="notifications" />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-auto">
                                    <div className="container-fluid" id="stats-container">
                                        <span>STATISTICS</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="container-fluid" id="customer-stats-container">
                                        <span>Customer</span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="container-fluid" id="product-stats-container">
                                        <span>Product</span>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="container-fluid" id="stats-overview-container">
                                        <span>Stats Overview</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    );
}
