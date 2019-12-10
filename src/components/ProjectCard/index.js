import React from "react";
import "./style.css";
import projectInfo from "./projectInfo";
import ScrollAnimation from 'react-animate-on-scroll';


function ProjectCard() {

    return (
        <div className="container-fluid clearfix">
            {projectInfo.map(({ id, src, title, motivation, description, techonologies, apis, deployedLink, gitHubLink }) =>

                < ScrollAnimation animateIn='rotateInUpLeft'>
                    {(id % 2 === 0) ?
                        <div className="row justify-content-end project-card">
                            <div className="col-sm-8">
                                <h3>{title}</h3>
                                <p><strong>Motivation: </strong>{motivation}</p>
                                <p><strong>Description: </strong>{description}</p>
                                <p><strong>Technologies: </strong>{techonologies}</p>
                                <p><strong>API's: </strong>{apis}</p>
                                <div className="row row-card-links text-align-center">
                                    <a className="card-link" href={deployedLink} target="_blank" rel="noopener noreferrer"><button>View Deployed</button></a>
                                    <a className="card-link" href={gitHubLink} target="_blank" rel="noopener noreferrer"><p><button>View GitHub</button></p></a>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="card mb-3 border-dark">
                                    <img key={id} src={require(`${src}`)} title={title} alt={title} className="card-img-top"></img>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="row">
                            <div className="col-sm-3">
                                <div className="card mb-3 border-dark">
                                    <img key={id} src={require(`${src}`)} title={title} alt={title} className="card-img-top"></img>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <h3>{title}</h3>
                                <p><strong>Motivation: </strong>{motivation}</p>
                                <p><strong>Description: </strong>{description}</p>
                                <p><strong>Technologies: </strong>{techonologies}</p>
                                <p><strong>API's: </strong>{apis}</p>
                                <div className="row row-card-links text-align-center">
                                    <a className="card-link" href={deployedLink} target="_blank" rel="noopener noreferrer"><button>View Deployed</button></a>
                                    <a className="card-link" href={gitHubLink} target="_blank" rel="noopener noreferrer"><p><button>View GitHub</button></p></a>
                                </div>
                            </div>
                        </div>
                    }
                </ScrollAnimation>
            )}
        </div>
    )
}
export default ProjectCard;