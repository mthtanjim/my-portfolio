import React from "react";

import api from "./assets/tools/api.png";
import bs from "./assets/tools/bs.png";
import c from "./assets/tools/c.jpg";
import css from "./assets/tools/css.png";
import es6 from "./assets/tools/es6.png";
import express from "./assets/tools/express.png";
import firebase from "./assets/tools/firebasepng.png";
import git from "./assets/tools/git.png";
import heroku from "./assets/tools/herokupng.png";
import js from "./assets/tools/js.png";
import mongo from "./assets/tools/mongo.png";
import mongoose from "./assets/tools/mongoose.png";
import netly from "./assets/tools/netly.png";
import nextjs from "./assets/tools/nextjs.png";
import node from "./assets/tools/node.png";
import react from "./assets/tools/react.png";
import sass from "./assets/tools/sass.png";
import tailwind from "./assets/tools/tailwind.png";
import ToolsData from "./assets/Tools";
import ui from "./assets/tools/ui.png";

import "./styles/Tools.scss";

const Skills = () => {
  console.log("tools data", ToolsData);
  console.log("uiii", ui);
  return (
    <div className="skills">
      <div>
        <div className="toolsHead">
          <h1>___ Technical Skills</h1>
          <h2>Programming and Others...</h2>
        </div>
        <div className="skills__container">
          {ToolsData.map((d) => (
            <div key={d.id} className="skillbox">
              <img
                className="imghover"
                src={d.img}
                alt={d.name}
              />{" "}
              {d.name}
            </div>
          ))}
        </div>
      </div>
      <div className="edu_course_container">
        <div className="course__content">
          <h1>Course & Certifications</h1>
          <div className="edu-details">
            <h4>Learning Redux Toolkit</h4>
            <span>LinkedIn Learning</span>
            <br/>
            <h5>
            <a href="https://www.linkedin.com/learning/certificates/9b11d54150daa8a047a8b6135468ea1033110303c9a1b26da7ab38917411f041">Show Credential</a>
            </h5>
          </div>
          <div className="edu-details">
            <h4>React: Design Patterns</h4>
            <span>LinkedIn Learning</span>
            <br/>
            <h5>
            <a href="https://www.linkedin.com/learning/certificates/1d9622cb9f75e13375a7d3f08177a118600e6dfafbd187dd5a6f3046f232448c?trk=share_certificate">Show Credential</a>
            </h5>
          </div>

          <div className="edu-details">
            <h4>MERN Stack E-Commerce with 100 how-to solutions</h4>
            <span>UDEMY</span>
          </div>
          <div className="edu-details">
            <h4>MySQL Advanced Topics</h4>
            <span>LinkedIn Learning</span>
            <br/>
            <h5>
            <a href="https://www.linkedin.com/learning/certificates/0da31048543a49c761614954f3a3578ac2514a943d400420e4827e25f04fd5e2">Show Credential</a>
            </h5>
          </div>
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

        </div>
        <div className="course__content2">
          <div>
            <h1>Educations</h1>
            <div className="edu-details">
              <h4>B.Sc. in Computer Science & Engineering (CSE) </h4>
              <span>South East University</span>
              <h5>(2019 - 2023)</h5>
            </div>
            <div className="edu-details">
              <h4>Diploma in Engineering in Computer Technology (4 years) </h4>
              <span>Bhola Govt. Polytechnic institute</span>
              <h5>(2013 - 2017)</h5>
            </div>
            <div className="edu-details">
              <h4>S.S.C, Science Group;</h4>
              <span>Kishorpur N U A High School</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
