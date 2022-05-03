import React from "react";
import "./Navbar.scss";
import { images } from "../../assets";

const Navbar = () => {
    return (
        <nav>
            <div className="app__logo-container">
                <div className="app__logo-circle">
                    <img className="app__logo" src={images.aircraft} alt="" />
                </div>

                <h4>Artic Travels</h4>
            </div>
            <ul className="nav">
                <li className="nav__link">
                    <a className="nav__link-item" href="#">
                        About Us
                    </a>
                </li>
                <li className="nav__link">
                    <a className="nav__link-item" href="#">
                        Support
                    </a>
                </li>
                <li className="nav__link">
                    <a className="nav__link-item" href="#">
                        Language
                    </a>
                </li>
            </ul>
            <div className="auth-btn">
                <button> Sign In</button>
            </div>
        </nav>
    );
};

export default Navbar;
