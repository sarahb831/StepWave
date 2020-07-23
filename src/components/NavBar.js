import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showManMenu, setShowManMenu] = useState(false);

    const menuToggle = () => {
        setShowMenu(!showMenu);
    }

    const manMenuToggle = () => {
        setShowManMenu(!showManMenu);
    }

    const manMenuClose = () => {
        setShowMenu(false);
        setShowManMenu(false);
    }

    return (
        <header>
            <div className="header-top">
                <div className="search-top">
                    <input />
                    <span>Search</span>
                    <Link to="/sign-in" className="sign-in">
                    Sign In
                </Link>
                </div>
                
            </div>
            
            <nav className="nav-bar">
                <Link to="/">
                    <img className="nav-logo" src="img/StepWaveLogo.png" alt="StepWave" />
                </Link>
                <button className="nav-toggle" onClick={menuToggle} aria-label="toggle navigation">
                    <span className="hamburger-menu">
                        {showMenu 
                            ? <i className="fas fa-times"></i>
                            : <i className="fas fa-bars"></i>
                        }
                    </span>
                </button>
                <ul className={`${showMenu ? "nav__list show" : "nav__list hidden"}`}>
                    <li className="nav__item"><Link to="/products" className="nav__link">Products</Link></li>
                    <li className="nav__item"><Link to="/customers" className="nav__link">Customers</Link></li>
                    <li className="nav__item"><div className="nav__link">
                            {`Manufacturers`}
                            <button className="caret" onClick={manMenuToggle}> 
                            {showManMenu 
                                ? <i className="fas fa-caret-up" />
                                : <i className="fas fa-caret-down" />
                            }
                            </button>                            
                        </div>
                        {showManMenu &&
                            <ul className="narrow nav-submenu__list">
                                <li  className="nav-submenu__item">
                                <Link 
                                    to="/contact-info" 
                                    className="nav-submenu__link"
                                    onClick={manMenuClose}
                                >Contact Info</Link>
                                </li>
                                <li className="nav-submenu__item">
                                    <Link 
                                        to="/company-profile" 
                                        className="nav-submenu__link"
                                        onClick={manMenuClose}
                                    >
                                        Company Profile
                                    </Link>
                                </li>
                                <li className="nav-submenu__item">
                                    <Link 
                                        to="/compliance-credentials" 
                                        className="nav-submenu__link"
                                        onClick={manMenuClose}
                                    >
                                        {`Compliance & Credentials  `}
                                        <i className="fas fa-lock"></i>
                                    </Link>
                                </li>
                                <li className="nav-submenu__item">
                                    <Link 
                                        to="/quality-governance" 
                                        className="nav-submenu__link"
                                        onClick={manMenuClose}
                                    >
                                        {`Quality & Governance  `}
                                        <i className="fas fa-lock"></i>
                                    </Link>
                                </li>
                                <li className="nav-submenu__item">
                                    <Link 
                                        to="/available-capacity" 
                                        className="nav-submenu__link"
                                        onClick={manMenuClose}
                                    >
                                        {`Available Capacity  `}
                                        <i className="fas fa-lock"></i>
                                    </Link>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className="nav__item"><Link to="/resources" className="nav__link">Resources</Link></li>
                    <li className="nav__item"><Link to="/events" className="nav__link">Events</Link></li>
                    <li className="nav__item"><Link to="/about" className="nav__link">About StepWave</Link></li>
                    <li className="nav__item"><Link to="/contact-us" className="nav__link">Contact Us</Link></li>                    
                </ul>

                {showManMenu &&
                    <ul className="wide fade-in nav-submenu__list">
                        <li className="nav-submenu__item">
                            <Link 
                                to="/contact-info" 
                                className="nav-submenu__link" 
                                onClick={manMenuClose}
                            >
                                Contact Info
                            </Link>
                        </li>
                        <li className="nav-submenu__item">
                            <Link 
                                to="/company-profile" 
                                className="nav-submenu__link"
                                onClick={manMenuClose}
                            >
                                Company Profile
                            </Link>
                        </li>
                        <li className="nav-submenu__item">
                            <Link 
                                to="/compliance-credentials" 
                                className="nav-submenu__link"
                                onClick={manMenuClose}
                            >
                                {`Compliance & Credentials  `}
                                <i className="fas fa-lock"></i>
                            </Link>
                        </li>
                        <li className="nav-submenu__item">
                            <Link 
                                to="/quality-governance" 
                                className="nav-submenu__link"
                                onClick={manMenuClose}
                            >
                                {`Quality & Governance  `}
                                <i className="fas fa-lock"></i>
                            </Link>
                        </li>
                        <li className="nav-submenu__item">
                            <Link 
                                to="/available-capacity" 
                                className="nav-submenu__link"
                                onClick={manMenuClose}
                            >
                                {`Available Capacity  `}
                                <i className="fas fa-lock"></i>
                            </Link>
                        </li>
                    </ul>
                }
            </nav>
        </header>
    );

};

export default NavBar;