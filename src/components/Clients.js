import React from "react";

import logo01 from "./assets/clients/logo01.png"
import logo03 from "./assets/clients/logo03.png"
import latarte from "./assets/clients/latarte.png"
import furniture from "./assets/clients/navana_furniture_logo.png"
import logo3 from "./assets/clients/logo3.png"
import secure from "./assets/clients/secure.png"
import logo1 from "./assets/clients/logo1.png"
import logo2 from "./assets/clients/logo2.png"
import logo4 from "./assets/clients/logo4.png"
import logo5 from "./assets/clients/logo5.png"
import logo6 from "./assets/clients/logo6.png"
import logo7 from "./assets/clients/logo7.png"
import logo8 from "./assets/clients/logo8.png"
import logo9 from "./assets/clients/nrel.png"

import "./styles/Clients.scss";

const Clients = () => {
  return (
    <div className="clients">
      <h1>Worked With</h1>
      <div className="clients__container">
        <div className="clientlogo">
        <img src={logo9} />
        </div>
        <div className="clientlogo">
          <img src={logo01} />
        </div>
        <div className="clientlogo">
          <img src={secure} />
        </div>
        <div className="clientlogo">
          <img src={logo03} />
        </div>
        <div className="clientlogo">
          <img src={latarte} />
        </div>
        <div className="clientlogo">
          <img src={furniture} />
        </div>
        <div className="clientlogo">
          <img src={logo1} />
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
        <div className="clientlogo">
          <img src={logo6} />
        </div>
        <div className="clientlogo">
          <img src={logo2} />
        </div>
        <div className="clientlogo">
          <img src={logo7} />
        </div>
        <div className="clientlogo">
          <img src={logo8} />
        </div>
      </div>
    </div>
  )
}

export default Clients;
