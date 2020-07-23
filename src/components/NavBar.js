import React, { useState } from 'react';

const NavBar = (props) => {
    const [showMenu, setShowMenu] = useState(false);
    const [showManMenu, setShowManMenu] = useState(false);

    const menuToggle = () => {
        setShowMenu(!showMenu);
    }

    const manMenuToggle = () => {
        setShowManMenu(!showManMenu);
    }

    return (
        <header>
            <div className="header-top">
                <div className="search-top">
                    <input />
                    <span>Search</span>
                    <a href="#sign-in" className="sign-in">
                    Sign In
                </a>
                </div>
                
            </div>
            
            <nav className="nav-bar">
            <img className="nav-logo" src="img/StepWaveLogo.png" alt="StepWave" />
                <button className="nav-toggle" onClick={menuToggle} aria-label="toggle navigation">
                    <span className="hamburger-menu">
                        {showMenu 
                            ? <i class="fas fa-times"></i>
                            : <i class="fas fa-bars"></i>
                        }
                    </span>
                </button>
                <ul className={`${showMenu ? "nav__list show" : "nav__list hidden"}`}>
                    <li className="nav__item"><a href="#products" className="nav__link">Products</a></li>
                    <li className="nav__item"><a href="#customers" className="nav__link">Customers</a></li>
                    <li className="nav__item"><a href="#manufacturers" className="nav__link">
                            {`Manufacturers`}
                            <button class="caret" onClick={manMenuToggle}> 
                            {showManMenu ? <i  class="fas fa-caret-up" />
                                : <i class="fas fa-caret-down" />
                            }
                            </button>                            
                        </a>
                        {showManMenu &&
                            <ul className="narrow nav-submenu__list">
                                <li className="nav-submenu__item">
                                    <a href="#contact-info" className="nav-submenu__link">Contact Info</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="#company-profile" className="nav-submenu__link">Company Profile</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="#compliance-credentials" className="nav-submenu__link">
                                        {`Compliance & Credentials  `}
                                        <i class="fas fa-lock"></i>
                                    </a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="#quality-governance" className="nav-submenu__link">
                                        {`Quality & Governance  `}
                                        <i class="fas fa-lock"></i>
                                    </a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="#available-capacity" className="nav-submenu__link">
                                        {`Available Capacity  `}
                                        <i class="fas fa-lock"></i>
                                    </a>
                                </li>
                            </ul>
                        }
                    </li>
                    <li className="nav__item"><a href="#resources" className="nav__link">Resources</a></li>
                    <li className="nav__item"><a href="#events" className="nav__link">Events</a></li>
                    <li className="nav__item"><a href="#about" className="nav__link">About StepWave</a></li>
                    <li className="nav__item"><a href="#contact" className="nav__link">Contact Us</a></li>                    
                </ul>

                {showManMenu &&
                    <ul className="wide fade-in nav-submenu__list">
                        <li className="nav-submenu__item">
                            <a href="#contact-info" className="nav-submenu__link">Contact Info</a>
                        </li>
                        <li className="nav-submenu__item">
                            <a href="#company-profile" className="nav-submenu__link">Company Profile</a>
                        </li>
                        <li className="nav-submenu__item">
                            <a href="#compliance-credentials" className="nav-submenu__link">
                                {`Compliance & Credentials  `}
                                <i class="fas fa-lock"></i>
                            </a>
                        </li>
                        <li className="nav-submenu__item">
                            <a href="#quality-governance" className="nav-submenu__link">
                                {`Quality & Governance  `}
                                <i class="fas fa-lock"></i>
                            </a>
                        </li>
                        <li className="nav-submenu__item">
                            <a href="#available-capacity" className="nav-submenu__link">
                                {`Available Capacity  `}
                                <i class="fas fa-lock"></i>
                            </a>
                        </li>
                    </ul>
                        }
            </nav>
        </header>
    )

}

export default NavBar;