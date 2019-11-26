import React, { Component } from "react";
import "./style.css";
import authorMatch from "./screenshots/author-match-screenshot.png";
import ScrollAnimation from 'react-animate-on-scroll';


class ProjectCard extends Component {

    render() {
        return (
            <>
                {/* add block to bump card down and test scroll */}
                <div style={{ height: "1000px" }}></div>
                <ScrollAnimation animateIn='rotateInUpLeft'
                    animateOut='rotateOutUpLeft'>
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="card mb-3">
                                <img src={authorMatch} className="card-img-top" alt="screenshot"></img>
                            </div>
                        </div>
                    </div>
                </ScrollAnimation>

                <div style={{ height: "1000px" }}></div>
            </>
        )
    }
}

export default ProjectCard;