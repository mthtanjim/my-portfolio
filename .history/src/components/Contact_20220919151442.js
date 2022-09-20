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
            <MDBBtn className='m-1' style={{ backgroundColor: '#3b5998' }} href='#'>
        <MDBIcon fab icon='facebook-f' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#55acee' }} href='#'>
        <MDBIcon fab icon='twitter' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#dd4b39' }} href='#'>
        <MDBIcon fab icon='google' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ac2bac' }} href='#'>
        <MDBIcon fab icon='instagram' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#0082ca' }} href='#'>
        <MDBIcon fab icon='linkedin-in' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#c61118' }} href='#'>
        <MDBIcon fab icon='pinterest' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#4c75a3' }} href='#'>
        <MDBIcon fab icon='vk' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ffac44' }} href='#'>
        <MDBIcon fab icon='stack-overflow' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ed302f' }} href='#'>
        <MDBIcon fab icon='youtube' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#481449' }} href='#'>
        <MDBIcon fab icon='slack-hash' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#333333' }} href='#'>
        <MDBIcon fab icon='github' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ec4a89' }} href='#'>
        <MDBIcon fab icon='dribbble' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#ff4500' }} href='#'>
        <MDBIcon fab icon='reddit-alien' />
      </MDBBtn>

      <MDBBtn className='m-1' style={{ backgroundColor: '#25d366' }} href='#'>
        <MDBIcon fab icon='whatsapp' />
      </MDBBtn>

                <h1></h1>
            </div>
        </div>
    )
}

export default Contact
