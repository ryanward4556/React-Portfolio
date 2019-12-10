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
            <div className="container">
                <div className="row center-title">
                    <div className="col-sm-12">
                        <Zoom><h1>Ryan Ward</h1></Zoom>
                    </div>
                </div>
                <div className="row">
                    <div className="center">
                        <Zoom cascade>
                            <ul>
                                <li><a href="/portfolio">Portfolio</a></li>
                            </ul>
                        </Zoom>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing;