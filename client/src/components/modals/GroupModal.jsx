import React, {useEffect, useState} from 'react';
import BaseModal from "./BaseModal";
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
        <BaseModal
            heading={heading}
            show={show}
            onAction={handleSubmit}
            onCancel={onCancel}
            action={action}>

            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Group name</Form.Label>
                    <Form.Control
                        required
                        type="name"
                        placeholder="Group name"
                        autoFocus
                        value={currGroupName}
                        onChange={e => setGroupName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Group name</Form.Label>
                    <Form.Control
                        required
                        type="text"
                        placeholder="Group description"
                        autoFocus
                        value={currGroupDesc}
                        onChange={e => setGroupDesc(e.target.value)}
                    />
                </Form.Group>
            </Form>

        </BaseModal>
    );
};

export default GroupModal;