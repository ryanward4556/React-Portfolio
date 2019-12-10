import React from "react";
import Footer from "../Footer";
import "./style.css";
import Zoom from 'react-reveal/Zoom';
import DarkModeToggle from "../DarkModeToggle";


function Landing() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg justify-content-end my-navbar fixed-top">
                <DarkModeToggle></DarkModeToggle>
            </nav>
            <div className="container" style={{position: "relative", minHeight: "100vh"}}>
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
            <Footer style={{position: "absolute", bottom: "0"}}></Footer>
        </div>
    )
}

export default Landing;