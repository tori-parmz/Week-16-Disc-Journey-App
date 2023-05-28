import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { NavDropdown } from "react-bootstrap";
import UpdateProfileForm from "./UpdateProfileForm";

export default function UpdateProfileNavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* makes the button to open the modal a NaDropdown item for the navbar */}
      <NavDropdown.Item onClick={handleShow}>Update Profile</NavDropdown.Item>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* passes handleClose as a prop to the form */}
          <UpdateProfileForm handleClose={handleClose} /> 
        </Modal.Body>
      </Modal>
    </>
  );
}
