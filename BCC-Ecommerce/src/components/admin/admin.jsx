import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleRight, faAngleDoubleLeft, faHome, faUser, faCog, faFileInvoice, faList } from '@fortawesome/free-solid-svg-icons';
import LogoutIcon from '../icons/logout.png';
import './admin.css';
import "bootstrap/dist/js/bootstrap";

import Dashboard from './admin-menu/dashboard';
import Applications from './admin-menu/applications';
import ListAccount from './admin-menu/listAccounts';
import ListSellers from './admin-menu/listSellers';
import Settings from './admin-menu/settings';


const DashboardMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <>
    <div className="container-fluid">
        <div className="row">
            <div className="col-auto" id="menu-dashboard">
                <div className={`dashboard-menu ${isOpen ? 'open' : 'closed'}`}>
                    <div className="logo-container">
                        {isOpen ? (
                            <>
                                <img src="" alt="logo" />
                                <span id="hurb-title">hurb.</span>
                            </>
                        ) : (
                                <img src="" alt="logo" />
                        )}
                    </div>
                    <hr className="border border-light border-1 opacity-100" id="hr-dashboard"/>
                    <div className="toggle-button d-flex justify-content-end align-items-end mb-4" onClick={toggleMenu}>
                        {isOpen ? (
                            <FontAwesomeIcon icon={faAngleDoubleLeft} className="dashboard-icons" id="openDashboard-btn"/>
                        ) : (
                            <FontAwesomeIcon icon={faAngleDoubleRight} className="dashboard-icons" id="openDashboard-btn"/>
                        )}
                    </div>
                    <div className="col">
                        <div className="container">
                        <div className="navbar">
                            <div className="navbar-nav">
                                <ul className="navbar-nav">
                                    <li className='nav-item d-flex'>
                                        {isOpen ? (
                                            <>
                                            
                                            <a href="#dashboard" className={`nav-link d-flex ${activeLink === 'dashboard' ? 'active' : ''}`} id="sellerLinks" onClick={() => handleLinkClick('dashboard')}>
                                                <FontAwesomeIcon icon={faHome} className="dashboard-icons" id="openDashboard-btn"/>
                                                Dashboard
                                                </a>

                                            </>
                                        ) : (
                                            <a href="#dashboard" className={`nav-link ${activeLink === 'dashboard' ? 'active' : ''}`} id="sellerLinks" onClick={() => handleLinkClick('dashboard')}>
                                                <FontAwesomeIcon icon={faHome} className="dashboard-icons" id="openDashboard-btn"/>
                                                </a>
                                        )}
                                        
                                    </li>
                                    <li className='nav-item'>
                                        {isOpen ? (
                                             <a href="#app" className={`nav-link d-flex ${activeLink === 'application' ? 'active' : ''}`} id="sellerLinks" onClick={() => handleLinkClick('application')}>
                                                <FontAwesomeIcon icon={faHome} className="dashboard-icons" id="openDashboard-btn"/>
                                                Application
                                             </a>
                                        ) : (
                                            <a href="#app" className={`nav-link ${activeLink === 'application' ? 'active' : ''}`} id="sellerLinks" onClick={() => handleLinkClick('application')}>
                                                <FontAwesomeIcon icon={faHome} className="dashboard-icons" id="openDashboard-btn"/>
                                             </a>
                                        )}
                                       
                                    </li>
                                </ul>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col">
                    {activeLink === 'dashboard' && (
                        <Dashboard/>
                    )}
                    {activeLink === 'application' && (
                    <Applications />
                )}
            </div>
        </div>
    </div>
    </>
  );
};

export default DashboardMenu;
