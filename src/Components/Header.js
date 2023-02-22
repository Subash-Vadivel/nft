import React from 'react'
import '../Resources/CSS/header.css';
import {Container,Image,NavDropdown} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from 'react-router-dom';
import Logo from '../Resources/Images/logo.png';
import Profile from '../Resources/Images/profile.png';
export const Header = (props) => {
    const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg"  className="head" fixed='top'>
      <Container>
        <Navbar.Brand onClick={()=>{navigate('/')}} className='brand' ><img src={Logo} alt="logo..." className='logo-wrapper'/><span className='logo-title'> Connect</span> </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav>

          <NavDropdown   title={<Image src={Profile} className='profile-wrapper'  fluid roundedCircle/>} id="drop" className='no-arrow'>
              <NavDropdown.Item >Profile</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{localStorage.removeItem('id');props.setUser('');}} >
                Log Out
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
        
               
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
