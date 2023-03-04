import React from "react";
import { HiOutlineMinus } from "react-icons/hi";
import digital from "./assets/digital-marketing.svg";
import man2 from "./assets/mthtanjim.jpg";
import design from "./assets/responsive-design.svg";
import seo from "./assets/seo.svg";
import "./styles/Section.scss";

import code from "./assets/code.svg";
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
          <h1> Skills...</h1>
        </div>
        <div className="ProfessionalSkills">
          <img src={design} alt="" />
          {/* <BsCodeSlash className="ProfessionalIcon" /> */}
          <h2> Frontend Web Developement</h2>
          <p>
            I will developing Professional looking Frontend with React js
            Framework.{" "}
          </p>
        </div>
        <div className="ProfessionalSkills">
          <img src={code} alt="" />
          {/* <BsCodeSlash className="ProfessionalIcon" /> */}
          <h2>Backend Web Development</h2>
          <p>I will develop backend with Node js, ExpressJs and MongooDB</p>
        </div>
        <div className="ProfessionalSkills">
          <img src={digital} alt="" />
          <h2>Digital Marketing</h2>
          <p>I will do Faebook ads, Google ads, media buying, Paid marketing</p>
        </div>
        <div className="ProfessionalSkills">
          <img src={seo} alt="" />
          <h2>SEO</h2>
          <p>
            I will do on page SEO for all kind of website to rank top your
            website
          </p>
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
              <h4>Web Developer & SEO Specialist</h4>
              <h5>Contracted by: DOM-INNO Group</h5>
              <span> Start date: August 2021 to Running </span>
            </div>
            <div className="exp-details">
              <h4>Web Developer & Digital Marketer</h4>
              <h5>
                Contracted by: DEMO Group <br /> Khetkhamar.org & Ezelo.com.bd
              </h5>
              <span>
                {" "}
                Start date: January 2020 and completion date: July 2021{" "}
              </span>
            </div>
            <div className="exp-details">
              <h4>IT - Executive</h4>
              <h5>Contracted by: Unicorn Far East Limited</h5>
              <span>
                Start date: January 2018 and completion date: December 2019.
              </span>
            </div>
          </div>
        </div>

        <div className="focus_content">
          <div className="focus-details">
            <div className="focus-number">
              5+
            </div>
            <p>Working Experience</p>
          </div>
          <div className="focus-details">
            <div className="focus-number">
              <span>15+</span>
            </div>
            <p>Completed Projects</p>
          </div>
          <div className="focus-details">
            <div className="focus-number">
              <span>8+</span>
            </div>
            <p>Worked Company</p>
          </div>
          <div className="focus-details">
            <div className="focus-number">
              <span>5+</span>
            </div>
            <p>Awareds Receved</p>
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
