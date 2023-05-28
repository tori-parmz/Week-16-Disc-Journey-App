import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Nav } from "react-bootstrap";
import UpdateProfileForm from "./UpdateProfileForm";

export default function UpdateProfileOffcanvas() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* makes the button to open the modal a Nav link item for the off canvas menu */}
      <Nav.Link className="text-light" onClick={handleShow}>
        Update Profile
      </Nav.Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateProfileForm handleClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
}
