import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Zoom } from 'react-reveal';
import ProjectCard from "../ProjectCard";


function Portfolio() {
    return (
        <>
        <NavBar></NavBar>
        <div className="content">
            <div>
                <Zoom>
                    <h1>Projects</h1>
                </Zoom>
            </div>
            <ProjectCard></ProjectCard>
            <Footer></Footer>
        </div>
    </>
    )
}

export default Portfolio;