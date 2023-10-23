import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const CreateEditModal = ({heading, show, action, onAction, onCancel, children, ...props}) =>
    <Modal show={show} onHide={onCancel}>
        <Modal.Header closeButton>
            <Modal.Title>{heading}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {children}
        </Modal.Body>
        <Modal.Footer>
            <Button variant='secondary' onClick={onCancel}>
                Cancel
            </Button>
            <Button variant='primary' onClick={onAction}>
                {action}
            </Button>
        </Modal.Footer>
    </Modal>


export default CreateEditModal;