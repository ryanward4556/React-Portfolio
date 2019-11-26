import React from "react";
import Footer from "../Footer";
import "./style.css";
import Zoom from 'react-reveal/Zoom';
import DarkModeToggle from "../DarkModeToggle";


function Landing() {
    return (
        <>
            <nav className="navbar navbar-expand-lg justify-content-end my-navbar fixed-top">
                <DarkModeToggle></DarkModeToggle>
            </nav>
            <Zoom><h1>Ryan Ward</h1></Zoom>
            <div className="center">
                <Zoom cascade>
                    <ul>
                        <li><a href="/about">About Me</a></li>
                        <li><a href="/portfolio">Portfolio</a></li>
                    </ul>
                </Zoom>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing;