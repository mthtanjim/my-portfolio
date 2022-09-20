import {
  Facebook,
  Instagram,
  LinkedIn,
  MenuBook,
  Pinterest,
  SettingsPowerRounded,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./styles/Main.scss";
import tanjim from "./assets/tanjim.jpg";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There !</p>
            <h1>I am Tanjim</h1>
            <p>Web Developer & Digital Marketer</p>

            <div className="icons">
              <a
                href="https://www.linkedin.com/in/mthtanjim/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn className="icon" />
              </a>
              <a
                href="https://www.facebook.com/mthtanjim"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="icon" />
              </a>
              <a
                href="https://github.com/mthtanjim"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook className="icon" />
              </a>
             
             
            </div>
            <div className="buttons">
              <button>Downlaod CV</button>
              <button>About me</button>
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={tanjim} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Main;

// <Link
//                 to={{ pathname: "https://www.facebook.com/mthtanjim" }}
//                 target="_blank"
//               >
//                 {" "}
//                 <Facebook className="icon" />
//               </Link> 