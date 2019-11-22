import React from "react";
import Footer from "../Footer";
import "./style.css";


function Landing() {
    return (
        <>
            <h1>Ryan Ward</h1>
            <div className="center">
                <ul>
                    <li><a href="/about">About</a></li>
                    <li><a href="/portfolio">Portfolio</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <Footer></Footer>
        </>
    )
}

export default Landing;