import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="inputs" >
            <h1>Contact us</h1>

                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>   
            </div>
            <Link to='/'>
                <ArrowBack className='arrow'/>
            </Link>
            <div className="arrow">
           
            <a href="https://www.youtube.com/c/jamesqquick"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/learnbuildteach/"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href="https://www.twitter.com/jamesqquick" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
      <a href="https://www.instagram.com/learnbuildteach"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
                <h1>another sections</h1>
            </div>
        </div>
    )
}

export default Contact
