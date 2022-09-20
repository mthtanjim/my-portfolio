import React from "react";
import "./styles/Clients.scss";

const Clients = () => {
  return (
    <div className="clients">
      <div className="skill__container">
        <div className="skill__content">
          <h1>Professional Skills</h1>
          <div className="skill-details">
            <h4>Web Development</h4>
          </div>
          <div className="skill-details">
            <h4>Digital Marketing</h4>
          </div>
          <div className="skill-details">
            <h4>E-commerce</h4>
          </div>
          <div className="skill-details">
            <h4>SEO</h4>
          </div>
          <div className="skill-details">
            <h4>Photography</h4>
          </div>
        </div>
      </div>
      <div className="skill__container">
        <div className="skill__content">
          <h1>Programming</h1>
          <div className="skill-details">
            <h4>C/C++</h4>
          </div>
          <div className="skill-details">
            <h4>Java Script</h4>
          </div>
          <div className="skill-details">
            <h4>ES6</h4>
          </div>
        </div>
      </div>
      <div className="skill__container">
        <div className="skill__content">
          <div>
          <h1>Framework & Tools</h1>
            <div className="skill-details">
           
          <div className="tools">
            
              <p>Git & Git Hub</p>
              <p>Firebase</p>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients;
