import React from "react";

const Navbar = () => (
    <div className="navbar-fixed" data-component="Navbar">
        <nav className="teal">
            <div className="container">
                <div className="nav-wrapper">
                    <a href="#" >Travelville</a>
                    <a href="#" data-target="mobile-nav" className="sidenav-trigger">
                        <i className="material-icons">menu</i>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#search">Search</a>
                        </li>
                        <li>
                            <a href="#popular">Popular Places</a>
                        </li>
                        <li>
                            <a href="#gallery">Gallery</a>
                        </li>
                        <li>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

);

export default Navbar;