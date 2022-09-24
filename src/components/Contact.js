import { ArrowBack } from "@material-ui/icons";
import React from "react";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import "./styles/Contact.scss";

const Contact = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <>
    <div className="contact">
      <div className="inputs">
        <h1>Contacts</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" className="message" />
        <button>Send</button>
      </div>
      <div className="info">
        <div className="contactinfo">
          <h3>Md Tanjimul Hasan (Tanjim)</h3>
          <span>Web Developer & Digital marketer</span>
          <p>Email: mthtanjim@gmail.com</p>
          <p>Phone: 01780692424</p>
        </div>
        <div className="socials">
          <span>Get in Touch:</span>
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
              href="https://instagram.com/mthtanjim"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram className="icon" />
            </a>
            <a
              href="https://github.com/mthtanjim"
              target="_blank"
              rel="noreferrer"
            >
              <GitHub className="icon" />
            </a>
          </div>
        </div>
        
      </div>

      <div className="container-top">
        <button className="top" onClick={scrollToTop}>
          To the top!
        </button>
      </div>
     
    </div>
    <div>
    <span className="copyright" > Developed by Tanjim, 2022</span>
    </div>
    </>
  );
};

export default Contact;

{
  /* <Link to='/'>
<ArrowBack className='arrow'/>
</Link> */
}
