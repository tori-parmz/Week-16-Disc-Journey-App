import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Outlet } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { LinkContainer } from "react-router-bootstrap";
import ProfilePhotoSm from "../ProfilePhotoSm";
import UpdateProfileNavBar from "../UpdateProfileNavBar";
import UpdateProfileOffcanvas from "../UpdateProfileOffcanvas";
import { useSelector } from "react-redux";

//layout renders navbar, footer, & off canvas menu

const Layout = () => {
  //state for modal to update profile
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //gets user data from store & destrectures it
  const { user } = useSelector((store) => store.userdata);
  const { firstName, lastName, joinDate } = user;

  const collectionSize = useSelector(
    (store) => store.collection.collectionSize
  );

  return (
    <>
      {/* Navbar */}
      <Navbar className="sticky-top" expand="lg" id="navbar">
        <Container>
          <Button className="m-2" variant="light" onClick={handleShow}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </Button>
          <LinkContainer to="/" relative="path">
            <Navbar.Brand>disc journey</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link>My Collection</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/myjourney">
                <Nav.Link>My Journey</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/about">
                <Nav.Link>About</Nav.Link>
              </LinkContainer>
              <NavDropdown title="Account" id="basic-nav-dropdown">
                <NavDropdown.Item as={UpdateProfileNavBar}>
                  Update Profile
                </NavDropdown.Item>
                <LinkContainer to="/newentry">
                  <NavDropdown.Item>New Entry</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <LinkContainer to="/login">
                  <NavDropdown.Item>Login</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Off Canvas */}
      <Offcanvas id="off-canvas-menu" show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton></Offcanvas.Header>
        <Offcanvas.Body>
          <ProfilePhotoSm id="off-canvas-profile" />
          <p className="lead mt-1">
            {firstName} {lastName}
          </p>
          <p className="fw-light lh-sm">Joined: {joinDate}</p>
          <p className="fw-light lh-sm">Collection Size: {collectionSize}</p>
          <Nav
            defaultActiveKey="/home"
            className="flex-column mt-3"
            id="off-canvas-nav"
          >
            <Nav.Link as={UpdateProfileOffcanvas} className="text-light">
              Update Profile
            </Nav.Link>
            <LinkContainer to="/newentry">
              <Nav.Link className="text-light">New Entry</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/" relative="path">
              <Nav.Link className="text-light">My Collection</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myjourney">
              <Nav.Link className="text-light">My Journey</Nav.Link>
            </LinkContainer>
            <Nav.Link className="disabled" disabled>
              Logout
            </Nav.Link>
          </Nav>
          <img src="./Assets/disc-journey-logo.png" id="offcanvas-logo"></img>
        </Offcanvas.Body>
      </Offcanvas>
      <div className="App-header">
        {/* Outlet renders each page in the App-header div */}
        <Outlet />
      </div>

      {/* Footer */}
      <div className="container-fluid" id="footer">
        <footer className="py-5">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <LinkContainer to="/" relative="path">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-dark">
                  Home
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/" relative="path">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-dark">
                  My Collection
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/myjourney">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-dark">
                  My Journey
                </a>
              </li>
            </LinkContainer>
            <LinkContainer to="/about">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-dark">
                  About this App
                </a>
              </li>
            </LinkContainer>
          </ul>
          <p className="text-center text-dark">© disc journey</p>
        </footer>
      </div>
    </>
  );
};

export default Layout;
