import { ArrowBack } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './styles/Contact.scss'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='inputs' >
                 <h1>Contact us</h1>
                <input type="text" placeholder='Name'/>
                <input type="text" placeholder='Email'/>
                <input type="text" placeholder='Message' className='message'/>
                <button>Send</button>
            </div>
            <div className="info">
                <div className='contactinfo' >
                    <p>Md Tanjimul Hasan (Tanjim)</p>
                </div>
                <div className='socials' >

                </div>
               
               
            </div>
        </div>
    )
}

export default Contact

{/* <Link to='/'>
<ArrowBack className='arrow'/>
</Link> */}