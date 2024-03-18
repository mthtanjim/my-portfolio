import React from "react";
import "./styles/Works.scss";
import projectsData from "./assets/data";
import { Link } from "react-router-dom";
import react from "./assets/projectdemo.jpg";

const Projects = () => {
  console.log("projects::", projectsData);
  console.log("react::", react);

  return (
    <div className="projects">
      <h1>Recent Projects</h1>
      <div className="works">
        <div className="work__section">
          {projectsData.map(project => (
            <div className="cards" key={project.id}>
              <div className="imgBox">
                <img src={project.imgSrc} alt="" />
              </div>
              {project.liveLink && <a href={project.liveLink} target="_blank" rel="noreferrer">
                See Live Projects
              </a>
              }
              <h4>{project.title}</h4>
              <div>
                {project.techStack.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
