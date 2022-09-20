import React from "react";
import react from "./assets/react.jpg"
import leonf from "./assets/leonf.png"
import admin from "./assets/admin.png"
import dominno from "./assets/dominno.png";
import pp from "./assets/pp.png";
import pp from "./assets/bim.png";
import "./styles/Works.scss";
import ProjectsCard from "./ProjectsCard";
import projects from "./assets/data";
import {Link} from "react-router-dom"

console.log("data is", projects);
const Projects = () => {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="works">
        <div className="work__section">
          <div className="cards">
            <img src={leonf} alt="" />
            <button>
                <Link to="https://leonbd.com/">See the live site </Link>
            </button>
                        
            <h4>Pharmaciticals Industries</h4>
            <div>
              <span>Reactjs</span>
              <span>Metairal UI</span>
              <span>SCSS</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="cards">
            <img src={react} alt="" />
            <button  >See Works</button>
            <h4>Backend Admin Dashboard</h4>
            <div>
              <span>Nodejs</span>
              <span>Express JS</span>
              <span>Mongoodb</span>
              <span>Rest API</span>
            </div>
          </div>
          <div className="cards">
            <img src={admin} alt="" />
            <button>See Work</button>
            <h4>Admin Dashboard Frontend</h4>
            <div>
              <span>React js</span>
              <span>Material UI</span>
              <span>Firebase</span>
            </div>
          </div>
          <div className="cards">
            <img src={react} alt="" />
            <button>See Work</button>
            <h4>Consumer Products Manufacturer Industries</h4>
            <div>
              <span>React js</span>
              <span>Material UI</span>
              <span>Firebase</span>
            </div>
          </div>

          <div className="cards">
            <img src={pp} alt="" />
            <button>See Work</button>
            <h4>React Portfolio Website</h4>
            <div>
              <span>React js</span>
              <span>SCSS</span>
            </div>
          </div>

          <div className="cards">
            <img src={dominno} alt="" />
            <button>See Work</button>
            <h4>Real Estate Website</h4>
            <div>
              <span>Wordpress</span>
              <span>Custom CSS</span>
              <span>Custom JS</span>
            </div>
          </div>

          <div className="cards">
            <img src={react} alt="" />
            <button>See Work</button>
            <h4>Architectural Company</h4>
            <div>
            <span>Wordpress</span>
              <span>Custom CSS</span>
              <span>Custom JS</span>
            </div>
          </div>

          <div className="cards">
            <img src={react} alt="" />
            <button>See Work</button>
            <h4>Architectural Company</h4>
            <div>
            <span>Wordpress</span>
              <span>Custom CSS</span>
              <span>Custom JS</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Projects;
