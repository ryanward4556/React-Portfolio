import React from "react";
import "./style.css";
import screenshots from "./screenshots";
import ScrollAnimation from 'react-animate-on-scroll';


function ProjectCard() {

    return (
        <div class="container-fluid">
            {screenshots.map(({ id, src, title, motivation, description, techonologies, apis, deployedLink, gitHubLink }) =>

                < ScrollAnimation animateIn='rotateInUpLeft'>
                    {(id % 2 === 0) ?
                        <div className="row justify-content-end project-card">
                            <div className="col-sm-8">
                                <h3>{title}</h3>
                            </div>
                            <div className="col-sm-3">
                                <div className="card mb-3 border-0">
                                    <img key={id} src={require(`${src}`)} title={title} alt={title} className="card-img-top"></img>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="card mb-3 border-0">
                                    <img key={id} src={require(`${src}`)} title={title} alt={title} className="card-img-top"></img>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <h3>{title}</h3>
                                <p><strong>Motivation: </strong>{motivation}</p>
                                <p><strong>Description: </strong>{description}</p>
                                <p><strong>Technologies: </strong>{techonologies}</p>
                                <p><strong>API's: </strong>{apis}</p>
                                <a className="card-link" href={deployedLink} target="_blank" rel="noopener noreferrer"><p><strong>View Deployed</strong></p></a><a className="card-link" href={gitHubLink} target="_blank" rel="noopener noreferrer"><p><strong>View GitHub</strong></p></a>

                            </div>
                        </div>
                    }
                </ScrollAnimation>
            )}
        </div>
    )
}
export default ProjectCard;