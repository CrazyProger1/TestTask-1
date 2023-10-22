import React, {useEffect, useState} from 'react';
import BaseModal from "./BaseModal";
import Form from "react-bootstrap/Form";


const GroupModal = ({heading, show, action, group, onAction, onCancel, ...props}) => {
    const [currGroupName, setGroupName] = useState("")
    const [currGroupDesc, setGroupDesc] = useState("")

    useEffect(() => {
        setGroupName(group !== null ? group.name : "");
        setGroupDesc(group !== null ? group.description : "")
    }, [group])

    const handleAction = () => {
        onAction(
            {
                ...group,
                name: currGroupName,
                description: currGroupDesc
            })

    }

    return (
        <div>
            <BaseModal
                heading={heading}
                show={show}
                onAction={handleAction}
                onCancel={onCancel}
                action={action}>

                <Form>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Group name</Form.Label>
                        <Form.Control
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
                            type="text"
                            placeholder="Group description"
                            autoFocus
                            value={currGroupDesc}
                            onChange={e => setGroupDesc(e.target.value)}
                        />
                    </Form.Group>
                </Form>

            </BaseModal>
        </div>
    );
};

export default GroupModal;