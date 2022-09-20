import React from "react";
import "./styles/Clients.scss";
import logo1 from "./assets/bim.png"

const Clients = () => {
  return (
    <div className="clients">
         <h1>Service Provided</h1>
      <div className="clients__container">
   
          <div className="logo">
            <img src={logo1} />
          </div>
          <div className="logo">
            <img src={logo1} />
          </div>
          <div className="logo">
            <img src={logo1} />
          </div>
          <div className="logo">
            <img src={logo1} />
          </div>
          <div className="logo">
            <img src={logo1} />
          </div>
      </div>
    </div>
  )
}

export default Clients;
