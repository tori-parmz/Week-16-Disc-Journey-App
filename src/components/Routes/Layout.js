import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { LinkContainer } from 'react-router-bootstrap';
import "../../Assets/disc-journey-logo.png";

const Layout = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
    <Navbar className="sticky-top" expand="lg" id='navbar'>
      <Container>
      <Button className='m-2' variant="light" onClick={handleShow}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
    </svg>
      </Button>
      <LinkContainer to='/' relative='path'> 
        <Navbar.Brand>
        disc journey
        </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <LinkContainer to='/'>
            <Nav.Link>My Collection</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/myjourney'>
            <Nav.Link>My Journey</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Account" id="basic-nav-dropdown">
            <LinkContainer to='/updateprofile'>
              <NavDropdown.Item>Update Profile
              </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/newentry'>
              <NavDropdown.Item>
                New Entry
              </NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Divider />
              <LinkContainer to='/login'>
              <NavDropdown.Item>
                Login
              </NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <Offcanvas id="off-canvas-menu" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
      <div className='App-header'>
      <Outlet />
      </div>
      
  

      
      <div className="container-fluid" id='footer'>
  <footer className="py-5">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
    <LinkContainer to='/' relative='path'>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Home</a></li>
     </LinkContainer>
     <LinkContainer to='/myjourney'>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">My Journey</a></li>
      </LinkContainer>
      <LinkContainer to='/updateprofile'>
      <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">Update Profile</a></li>
      </LinkContainer>

      <li className="nav-item"><a href="#" className="nav-link px-2 text-dark">About this App</a></li>
    </ul>
    <p className="text-center text-dark">© disc journey</p>
  </footer>
  
</div>

      
  

    </>
  )
};

export default Layout;