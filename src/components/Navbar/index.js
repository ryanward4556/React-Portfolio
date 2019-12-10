import React from "react";
import { FaBars } from 'react-icons/fa';
import DarkModeToggle from "../DarkModeToggle";


function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg my-navbar fixed-top">
                <a className="navbar-brand" href="/">RW</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">
                        <FaBars />
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">

                        <li className="nav-item">
                            <a className="nav-link" href="/portfolio">Portfolio</a>
                        </li>
                    </ul>
                </div>
                <DarkModeToggle></DarkModeToggle>
            </nav>
        </>
    )
}

export default NavBar;
