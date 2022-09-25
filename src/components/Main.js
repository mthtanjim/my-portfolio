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
import React, { useRef, useState } from "react";
import "./styles/Main.scss";
import tanjim from "./assets/Md-Tanjimul-Hasan-Tanjim.jpg";
import cv from "./assets/cv.pdf"
// import { Link } from "react-scroll";
import { HashLink as Link } from 'react-router-hash-link'
import { HashLink } from 'react-router-hash-link';

const Main = () => {
    const ref = useRef(null)
    const handleClick = () => {
        ref.current?.scrollIntoView({behavior: 'smooth'})
    }

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
              {/* <a
                href="https://instagram.com/mthtanjim"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram className="icon" />
              </a> */}
              <a
                href="https://github.com/mthtanjim"
                target="_blank"
                rel="noreferrer"
              >
                <GitHub className="icon" />
              </a>
            </div>
            <div className="buttons">
            <a
                    href={cv}
                    target="_blank" 
                    rel="noopener noreferrer"
                    download="Resume_of_Tanjim_Web_Developer_4_yr_exp"
                    
                    className="btn-block  p-a15 m-tb10"
                  >
                      <button>Downlaod CV</button>
            </a>

            <Link to="#Section" spy={true} smooth={true} > <button onClick={handleClick} >About me</button></Link>
             
            </div>
          </div>
        </div>

        <div className="main__img">
          <img src={tanjim} alt="" />
        </div>
      </div>
            {/* scroll down */}
                <Link onClick={handleClick} to="#Section" spy={true} smooth={true} >
                <div className="arrows"></div>
                </Link>
              
              {/* scroll down */}

    </div>
  );
};

export default Main;
