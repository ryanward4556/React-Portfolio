import React from "react";
import "./style.css";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Zoom from 'react-reveal/Zoom';



function Portfolio() {
    return (
        <>
            <NavBar></NavBar>
            <Zoom>
                <h1>Projects</h1>
            </Zoom>
            <Footer></Footer>
        </>
    )
}

export default Portfolio;