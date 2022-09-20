import React from "react";
import "./styles/Section.scss";
import man2 from "./assets/mthtanjim.jpg";

const Section = () => {
  return (
    <div className="section">
      <div className="section__container">
        <div className="section__content">
          <div className="section__img">
            <img src={man2} alt="" />
          </div>
        </div>
        <div className="section__content">
          <h1>Employment History</h1>
          <div className="exp-details">
            <h4>Web Developer & SEO Specialist</h4>
            <h5>Contracted by: DOM-INNO Group</h5>
            <span> Start date: August 2021 to Running{" "}</span>
          </div>
          <div className="exp-details">
            <h4>Wordpress Developer & Digital Marketer</h4>
            <h5>Contracted by: Demo Group <br/> Khetkhamar.org & Ezelo.com.bd</h5>
            <span> Start date: January 2020 and completion date: July 2021{" "}</span>
          </div>
          <div className="exp-details">
            <h4>IT - Executive</h4>
            <h5>Contracted by: Unicorn Far East Limited</h5>
            <span>Start date: January 2018 and completion date: December 2019.</span>
          </div>
        </div>

        <div className="section__content">
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
        </div>
      </div>
    </div>
  );
};

export default Section;
