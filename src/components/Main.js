import { Facebook, GitHub, LinkedIn } from "@material-ui/icons";
import React, { useEffect, useRef, useState } from "react";
// import { HashLink as Link } from "react-scroll";
import { HashLink as Link } from 'react-router-hash-link';

import cv from "./assets/cv.pdf";
import tanjim from "./assets/Md-Tanjimul-Hasan-Tanjim.jpg";

import "./styles/Main.scss";

const Main = () => {

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const ref = useRef(null)
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' })
  }

  // Define animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 45 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.2, duration: 0.5 } },
  };



  return (
    <div className="main">
      <div className="main__container">
        <div className="main__content">
          <div className="text">
            <p>Hey There!, I'm </p>
            <h1 >Tanjimul Hasan Tanjim</h1>
            <p
            >Full Stack Software Engineer</p>
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
                <GitHub className="icon" />
              </a>
            </div>
            <div className="buttons">
              {/* <a
                href={cv}
                target="_blank"
                rel="noopener noreferrer"
                download="Resume_of_Tanjim_Web_Developer_4_yr_exp"

                className="btn-block  p-a15 m-tb10"
              >
                <button>Downlaod CV</button>
              </a> */}

              <Link to="#Section" spy={true} smooth={true} > <button onClick={handleClick} >About me</button></Link>

            </div>
          </div>
        </div>


<div className="main__img__wrapper">
  <div className="main__img">
    <img src={tanjim} alt="Tanjimul Hasan Tanjim" />
  </div>
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
