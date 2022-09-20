import React from "react";
import "./styles/Clients.scss";
import logo1 from "./assets/clients/logo1.png"
import logo2 from "./assets/clients/logo2.png"
import logo3 from "./assets/clients/logo3.png"
import logo4 from "./assets/clients/logo4.png"
import logo5 from "./assets/clients/logo5.png"

const Clients = () => {
  return (
    <div className="clients">
         <h1>Worked With</h1>
      <div className="clients__container">
          <div className="clientlogo">
            <img src={logo1} />
          </div>
          <div className="clientlogo">
            <img src={logo2} />
          </div>
          <div className="clientlogo">
            <img src={logo3} />
          </div>
          <div className="clientlogo">
            <img src={logo4} />
          </div>
          <div className="clientlogo">
            <img src={logo5} />
          </div>
      </div>
    </div>
  )
}

export default Clients;
