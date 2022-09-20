import { ArrowBack } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Pinterest,
  SettingsPowerRounded,
  Twitter,
  GitHub,
} from "@material-ui/icons";
import "./styles/Contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <div className="inputs">
        <h1>Contact us</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" className="message" />
        <button>Send</button>
      </div>
      <div className="info">
        <div className="contactinfo">
          <h3>Md Tanjimul Hasan (Tanjim)</h3>
          <span>Web Developer % Digital marketer</span>
          <p>Email: mthtanjim@gmail.com</p>
          <p>Phone: 01780692424</p>
        </div>
        <div className="socials">
            <span>Connect with me:</span>
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
        </div>
      </div>
    </div>
  );
};

export default Contact;

{
  /* <Link to='/'>
<ArrowBack className='arrow'/>
</Link> */
}
