import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import UserIcon from '../icons/header-icon/user.png';

export default function accDropDown(){

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const history = useNavigate();

    useEffect(() => {
        const storedLoginStatus = localStorage.getItem('isLoggedIn');
        fetchAccountImg();
        if (storedLoginStatus === 'true') {
            setIsLoggedIn(true);
        }
        
    }, []);

    const handleLogout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('userId');
        history("/shop");
        window.location.reload();
    }

    const[profile_picture, setProfilePic] = useState(null);

    const fetchAccountImg = async () => {
        try{
            const userId = localStorage.getItem('userId');
            const getAcc = await axios.get(`http://localhost/hurb/login/login.php?users_id=${userId}`);
            const userDBFetch = getAcc.data[0];
            const profile_picture = userDBFetch.profile_picture;
            setProfilePic(profile_picture);
            

        }catch(error){
            console.error('Error fetch: ', error);
        }
    }

    const userId = localStorage.getItem('userId');
    return(
        <>
             <li className="nav-item dropdown">
                                <Link to="/account" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropwdown" aria-expanded="false">
                                {profile_picture ?
                                            <img src={`http://localhost/hurb/${profile_picture}`} alt="" id="accIcon-logged" />
                                            :
                                            <img src={UserIcon} alt="" id="accIcon-logged" />

                                 }
                                    </Link>
                                 <ul className='dropdown-menu dropdown-menu-hover'>
                                 <li><Link to="/account" className='dropdown-item'>Account</Link></li>
                                 {isSeller &&
                                     <li><Link to="/seller" className='dropdown-item'>Seller's Profile</Link></li>
                                }
                            
                         <li><a onClick={handleLogout} className='dropdown-item'>Logout</a></li>
                     </ul>
                 </li>         
        </>
    )
}