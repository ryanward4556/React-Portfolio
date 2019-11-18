import React from "react";
import "./style.css";

function Navbar() {
    return (
        <>
            <div className="center">
                <header>Ryan Ward</header>
                <ul className="navbar-landing">
                    <li><a href="/about">About</a></li>
                    <li><a href="/market-news">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>

            </div>
        </>
    )
}

export default Navbar;
