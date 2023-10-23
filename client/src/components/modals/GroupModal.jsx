import React, {useEffect, useState} from 'react';
import CreateEditModal from "./CreateEditModal";
import Form from "react-bootstrap/Form";


const GroupModal = ({heading, show, action, group, onAction, onCancel, errors, ...props}) => {
    const [currGroupName, setGroupName] = useState("")
    const [currGroupDesc, setGroupDesc] = useState("")

    useEffect(() => {
        if (group) {
            setGroupName(group.name);
            setGroupDesc(group.description)
        }

    }, [group])

    const handleSubmit = (event) => {
        onAction(
            {
                ...group,
                name: currGroupName,
                description: currGroupDesc
            })
    }

    return (
        <CreateEditModal
            heading={heading}
            show={show}
            onAction={handleSubmit}
            onCancel={onCancel}
            action={action}>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        required
                        type="name"
                        placeholder="Name"
                        autoFocus
                        value={currGroupName}
                        onChange={e => setGroupName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        rows={3}
                        as="textarea"
                        placeholder="Description"
                        autoFocus
                        value={currGroupDesc}
                        onChange={e => setGroupDesc(e.target.value)}
                    />
                </Form.Group>
            </Form>

        </CreateEditModal>
    );
};

export default GroupModal;