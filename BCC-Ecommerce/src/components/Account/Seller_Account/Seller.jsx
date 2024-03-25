export default function Seller(){
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
                                <li className="nav-item mb-4">
                                    <a href="" className="nav-link active">Dashboard</a>
                                </li>
                                    
                                <li className="nav-item">
                                    <a href="" className="nav-link">Products</a>
                                </li>

                                <li className="nav-item mb-5">
                                    <a href="" className="nav-link">Orders</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" className="nav-link">Profile</a>
                                </li>

                                <li className="nav-item">
                                    <a href="" className="nav-link">Settings</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="header bg-secondary d-flex justify-content-center p-2">
                                    <h1>Dashboard</h1>
                                </div>
                            </div>
                            <div className="row mb-5">
                                    <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <h1>table</h1>
                                        </div>
                                        <div className="col d-flex justify-content-end gap-5">
                                            <h1>total sales</h1>
                                            <h1>avg. order value</h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                    <div className="col d-flex justify-content-end gap-5">
                                        <h1>order sessions</h1>
                                            <h1>conversion rate</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <h1>Selling Products</h1>
                                </div>
                                <div className="col">
                                    <h1>
                                        Top Products
                                    </h1>
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