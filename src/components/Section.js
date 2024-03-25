import React from "react";
import { HiOutlineMinus } from "react-icons/hi";

import code from "./assets/code.svg";
import digital from "./assets/digital-marketing.svg";
import man2 from "./assets/mthtanjim.jpg";
import design from "./assets/responsive-design.svg";
import seo from "./assets/seo.svg";

import "./styles/Section.scss";

const Section = () => {
  return (
    <div className="section" id="Section">
      <div className="section_skills__container">
        <div className="ProfSkillsHead">
          <h4>
            {" "}
            <HiOutlineMinus className="icon" />
            Professional
          </h4>
          <h1>Skills...</h1>
        </div>
        <div className="ProfessionalSkills">
          <img src={code} alt="" />
          <h2>API Development for Software</h2>
          <p>Build robust and scalable RESTful API for seamless communication between software systems and platforms.</p>
        </div>
        <div className="ProfessionalSkills">
          <img src={code} alt="" />
          {/* <BsCodeSlash className="ProfessionalIcon" /> */}
          <h2>Custom Application Development</h2>
          <p>Create bespoke web applications for diverse client needs, including content management and CRM systems.</p>
        </div>
        <div className="ProfessionalSkills">
          <img src={code} alt="" />
          {/* <BsCodeSlash className="ProfessionalIcon" /> */}
          <h2>Backend Development</h2>
          <p>I excel in backend development using Node.js, Express js and NestJs</p>
        </div>

        <div className="ProfessionalSkills">
          <img src={design} alt="" />
          {/* <BsCodeSlash className="ProfessionalIcon" /> */}
          <h2>Frontend Developement</h2>
          <p>
          I specialize in developing frontend using React.js and Next.js framework.
          </p>
        </div>
   
        <div className="ProfessionalSkills">
          <img src={digital} alt="" />
          <h2>E-commerce Application</h2>
          <p>I specialize in developing E-commerce applications tailored to your business needs.</p>
        </div>
    
        <div className="ProfessionalSkills">
          <img src={digital} alt="" />
          <h2>Business Website</h2>
          <p>I create SEO-friendly business websites designed to enhance your online presence.</p>
        </div>

        <div className="ProfessionalSkills">
          <img src={seo} alt="" />
          <h2>Search Engine Optimization (SEO)</h2>
          <p>Get expert on-page SEO services tailored to all types of websites.</p>
        </div>
      </div>

      {/* after professional skills */}
      {/* after professional skills */}

      <div className="section__container">
        <div className="img_section_content">
          <div className="section__img">
            <img src={man2} alt="" />
          </div>
        </div>
        <div className="job_section_content">
          <h1>Employment History</h1>
          <div className="exp-box">
            <div className="exp-details">
              <h4>Full Stack Developer</h4>
              <h5>Contracted by: <span className="bold">NAVANA Group</span></h5>
              <span> Start date: April 2023 to Running </span>
            </div>
            <div className="exp-details">
              <h4>Full Stack Developer</h4>
              <h5>Contracted by: <span className="bold">DOM-INNO Group</span></h5>
              <span> Start date: August 2021 and completion date: April 2023 </span>
            </div>
            <div className="exp-details">
              <h4>Web Developer</h4>
              <h5>
                Contracted by: <span className="bold">DEMO Group</span>  <br /> 
              </h5>
              <span>
                {" "}
                Start date: January 2020 and completion date: July 2021{" "}
              </span>
            </div>
            <div className="exp-details">
              <h4>IT Support Engineer</h4>
              <h5>Contracted by: Unicorn Far East Limited</h5>
              <span>
                Start date: January 2018 and completion date: December 2019.
              </span>
            </div>
          </div>
        </div>
        {/* <div className="section__content">
          <div>
            <h1>Educations</h1>
            <div className="exp-details">
              <h4>B.Sc. in Computer Science & Engineering (CSE) </h4>
              <h5>South East University</h5>
              <span>(2019 - 2022)</span>
            </div>
            <div className="exp-details">
              <h4>Diploma in Engineering in Computer Technology (4 years) </h4>
              <h5>Bhola Govt. Polytechnic institute</h5>
              <span>(2013 - 2017)</span>
            </div>
            <div className="exp-details">
              <h4>S.S.C, Science Group;</h4>
              <h5>Kishorpur N U A High School (2013)</h5>
              <span>Passing Yers: 2013</span>
            </div>
          </div>
        </div> */}

      </div>
    </div>
  );
};

export default Section;
