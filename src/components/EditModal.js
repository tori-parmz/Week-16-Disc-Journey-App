import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import EditForm from './EditForm';
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from '../features/editModal/editModalSlice';



export default function EditModal(props) {
  const { modalKey } = props;
  const { isOpen } = useSelector((store) => store.modal);
  const [show, setShow] = useState(isOpen);
  const dispatch = useDispatch;

  const handleClose = () => setShow(dispatch(closeModal));

  return (
    <>
      <Modal key={modalKey} show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <EditForm />
        </Modal.Body>
      </Modal>
    </>
  );
}