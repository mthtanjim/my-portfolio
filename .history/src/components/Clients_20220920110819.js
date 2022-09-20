import React from "react";
import "./styles/Clients.scss";

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients__container">
        <div className="clients__content">
          <h1>Professional Skills</h1>
          <div className="clients-details">
        
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
  )
}

export default Clients;
