import React from "react";
// import "./style.css";
// import NavBar from "../NavBar";
import DarkModeToggle from "../DarkModeToggle";
import Footer from "../Footer";
import { Zoom } from 'react-reveal';
import ProjectCard from "../ProjectCard";


function Portfolio() {
    return (
        <>
            {/* <NavBar></NavBar> */}
            <nav className="navbar navbar-expand-lg justify-content-end my-navbar fixed-top">
                <DarkModeToggle></DarkModeToggle>
            </nav>
            <div className="content">
                <div>
                    <Zoom>
                        <h1>Projects</h1>
                    </Zoom>
                </div>
                <ProjectCard style={{marginBottom: "2rem"}}></ProjectCard>
                <div style={{height: "100px"}}></div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Portfolio;