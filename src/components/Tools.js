import React from "react";
import "./styles/Tools.scss";
import node from "./assets/tools/node.png"
import react from "./assets/tools/react.png"
import bs from "./assets/tools/bs.png"
import css from "./assets/tools/css.png"
import express from "./assets/tools/express.png"
import git from "./assets/tools/git.png"
import js from "./assets/tools/js.png"
import sass from "./assets/tools/sass.png"
import mongoose from "./assets/tools/mongoose.png"
import mongo from "./assets/tools/mongo.png"
import api from "./assets/tools/api.png"
import firebase from "./assets/tools/firebasepng.png"
import heroku from "./assets/tools/herokupng.png"
import es6 from "./assets/tools/es6.png"
import netly from "./assets/tools/netly.png"
import tailwind from "./assets/tools/tailwind.png"
import ui from "./assets/tools/ui.png"
import c from "./assets/tools/c.jpg"


const Skills = () => {
  return (
    <div className="skills">
      <div>
        <div className="toolsHead">
          <h1>___ Tools</h1>
          <h2>Programming and Others...</h2>
        </div>
        <div className="skills__container">
          <div className="skillbox">
          <img src={react} alt="" />
            React js
            </div>
          <div className="skillbox"> <img src={node} alt="" />NodeJs</div>
          <div className="skillbox"><img src={express} alt="" />Express Js</div>  
          <div className="skillbox"><img src={mongo} alt="" />MongooDB</div>
          <div className="skillbox"><img src={mongoose} alt="" />Mongoose</div>
          <div className="skillbox"><img src={api} alt="" />RestAPI</div>
          <div className="skillbox"><img src={es6} alt="" />ES6</div>
          <div className="skillbox"><img src={firebase} alt="" />Firebase</div>
          <div className="skillbox"><img src={heroku} alt="" />Heroku</div>
          <div className="skillbox"><img src={netly} alt="" />Netlify</div>
          <div className="skillbox"><img src={git} alt="" />Git & Github</div>
          <div className="skillbox"><img src={tailwind} alt="" />Tailwindcss</div>
          <div className="skillbox"><img src={bs} alt="" />Bootstrap</div>
          <div className="skillbox"><img src={sass} alt="" />SCSS</div>
          <div className="skillbox"><img src={ui} alt="" />Material UI</div>
          <div className="skillbox"><img src={css} alt="" />CSS</div>
          <div className="skillbox"><img src={c} alt="" />C</div>
          <div className="skillbox"><img src={js} alt="" />JavaScript</div>
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
