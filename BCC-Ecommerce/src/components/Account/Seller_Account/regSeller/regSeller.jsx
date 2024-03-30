
import Map from '../../../googleMap/Map';
export default function regSeller(){
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <span>Seller Registration</span>
                                    <hr className="border border-dark border-1 opacity-40" id="hr2"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="shop_name"/>
                                        <label htmlFor="shop_name">Business Name</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="shop_name"/>
                                        <label htmlFor="shop_name">Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="shop_name"/>
                                        <label htmlFor="shop_name">Verify Email</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button className="btn btn-dark mb-3">Verify</button>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col">
                                    <span>Address</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="shop_name"/>
                                        <label htmlFor="shop_name">Province</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="shop_name"/>
                                        <label htmlFor="shop_name">City</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="shop_name"/>
                                        <label htmlFor="shop_name">Postal / Zip Code</label>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <Map></Map>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}