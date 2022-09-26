import React from "react";
import "./styles/Tools.scss";
import node from "./assets/tools/node.png"


const Skills = () => {
  return (
    <div className="skills">
      <div>
        <div className="toolsHead">
          <h1>___ Tools</h1>
          <h2>Programming and Others...</h2>
        </div>
        <div className="skills__container">
          <div className="skillbox">React js</div>
          <div className="skillbox">NodeJs</div>
          <div className="skillbox">Express Js</div>
          <div className="skillbox">MongooDB</div>
          <div className="skillbox">RestAPI</div>
          <div className="skillbox">ES6</div>
          <div className="skillbox">Firebase</div>
          <div className="skillbox">Heroku</div>
          <div className="skillbox">Netlify</div>
          <div className="skillbox">Git & Github</div>
          <div className="skillbox">Tailwindcss</div>
          <div className="skillbox">Bootstrap</div>
          <div className="skillbox">SCSS</div>
          <div className="skillbox">Material UI</div>
          <div className="skillbox">CSS</div>
          
          <div className="skillbox">C++</div>
        </div>
      </div>
      <div className="edu_course_container">
        <div className="course__content">
          <h1>Course & Certifications</h1>
          <div className="edu-details">
            <h4>Digital Marketing </h4>
           
            <span>Google Digital Unlock</span>
            <h5>Certificate Id: [MQW N8V 6A7]</h5>
          </div>
          <div className="edu-details">
            <h4>Web development (HTML, CSS, JS)</h4>
           
            <span>EDUCBA</span>
            <h5>[Id: Q9YZC8YA7]</h5>
          </div>
          <div className="edu-details">
            <h4>Search Engine Optimization (SEO)</h4>
            <span>SEMRUSH ACADEMY</span>
            <h5>[Id: 5f76cb827b82c30cdbf54283]</h5>
          </div>
          <div className="edu-details">
            <h4>Graphics Design (Photoshop)</h4>
            <span>Eduonix Learning Solutions</span>
            <h5>[Id: ea4ed4037e]</h5>
          </div>
          <div className="edu-details">
            <h4>Microsoft Excel</h4>
            <span>Master of Project Academy</span>
            <h5>[Id: cert_mwz9y0pk]</h5>
          </div>
          </div>
        <div className="course__content">
          <div>
            <h1>Educations</h1>
            <div className="edu-details">
              <h4>B.Sc. in Computer Science & Engineering (CSE) </h4>
              <span>South East University</span>
              <h5>(2019 - 2022)</h5>
            </div>
            <div className="edu-details">
              <h4>Diploma in Engineering in Computer Technology (4 years) </h4>
              <span>Bhola Govt. Polytechnic institute</span>
              <h5>(2013 - 2017)</h5>
            </div>
            <div className="edu-details">
              <h4>S.S.C, Science Group;</h4>
              <span>Kishorpur N U A High School</span>
              <h5>Passing Yers: 2013</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
