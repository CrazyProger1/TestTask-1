import React from 'react';
import {Modal, Button} from 'react-bootstrap';


const ErrorModal = ({heading, show, errors, onClose, ...props}) => {
    const getMessage = () => {
        if (errors)
            return (
                <div>
                    {Object.keys(errors).map((field, index) => (
                        <p key={index} className="error-message">{field}: {errors[field]}</p>
                    ))}
                </div>
            );
    };

    return (
        <Modal
            show={show}
            onHide={onClose}
        >
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {getMessage()}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={onClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ErrorModal;