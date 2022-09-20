import React from "react";
import man2 from "./assets/tanjim.jpg";
import "./styles/Skills.scss";



const Skills = () => {

  return (
    <div className="skillssection">
      <div className="skills_section__container">
        <div className="skills_section__content">
          <h1>Professional Skills</h1>
          <div className="exp-details">
            <h4>Web Development</h4>
          </div>
          <div className="exp-details">
            <h4>Digital Marketing</h4>
          </div>
          <div className="exp-details">
            <h4>E-commerce</h4>
          </div>
          <div className="exp-details">
            <h4>SEO</h4>
          </div>
          <div className="exp-details">
            <h4>Photography</h4>
          </div>
          
        </div>
        
      </div>
      <div className="section__container">
        <div className="section__content">
          <h1>Programming</h1>
          <div className="exp-details">
            <h4>C/C++</h4>
          </div>
          <div className="exp-details">
            <h4>Java Script</h4>
          </div>
          <div className="exp-details">
            <h4>ES6</h4>
          </div>
          
        </div>
      </div>
      <div className="section__container">
        <div className="section__content">
          <div>
          <h1>Framework & Tools</h1>
            <div className="exp-details">           
          <div className="tools">
            <div>
              <p>React Js</p>
              <p>NodeJs</p>
              <p>Express Js</p>
              <p>MongooDB</p>
              <p>Rest API</p>
            </div>
            <div>
              <p>CSS3</p>
              <p>Bootstrap </p>
              <p>Tailwindcss</p>
              <p>Material UI</p>
              <p>Git & Git Hub</p>
              <p>Firebase</p>
            </div>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
