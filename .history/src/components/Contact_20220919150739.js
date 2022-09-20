import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <div>
            <h1>Contact us</h1>
            
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>   
            </div>
            <Link to='/'>
                <ArrowBack className='arrow'/>aadfghjkl 
            </Link>
            <div className="inputs">
               

                <h1></h1>
            </div>
        </div>
    )
}

export default Contact
