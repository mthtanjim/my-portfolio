import React from "react";
import "./styles/Clients.scss";
import logo1 from "./assets/bim.png"

const Clients = () => {
  return (
    <div className="clients">
      <div className="clients__container">
      <h1>Service Provided</h1>
        <div className="clients__content">
          <div className="logo">
            <img src={logo1} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Clients;
