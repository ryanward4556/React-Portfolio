import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./style.css";


function Landing() {
    return (
        <>
            <h1>Ryan Ward</h1>
            <div className="center">
                <Navbar></Navbar>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing;