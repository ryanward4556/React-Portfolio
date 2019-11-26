import React from "react";
import "./style.css";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <div className="contact-links">
                            <a href="https://github.com/ryanward4556" target="_blank" rel="noopener noreferrer"><FaGithub className="contact-links"></FaGithub></a>
                            <a href="https://www.linkedin.com/in/ryan-ward-b40508118/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="contact-links"></FaLinkedin></a>
                            <a href="mailto:ryanward4556@gmail.com" target="_blank" rel="noopener noreferrer"><FaEnvelope className="contact-links"></FaEnvelope></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}