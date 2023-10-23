import React, {useEffect, useRef} from 'react';
import Form from 'react-bootstrap/Form';
import {Dropdown, DropdownButton} from 'react-bootstrap';
import groupStore from '../../store/GroupStore';

const UserForm = ({username, group, onChangeUsername, onChangeGroup, onSetValidity, ...props}) => {
    const formRef = useRef(null)

    useEffect(() => {
        onSetValidity(validate())
    })

    const validateGroup = () =>
        group && Object.keys(group).length !== 0;


    const validate = () =>
        formRef.current.checkValidity() && validateGroup()


    const handleChange = () => {
        if (onSetValidity)
            onSetValidity(validate())
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Form ref={formRef} noValidate validated={true} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='validationCustomUsername'>
                <Form.Label>Username</Form.Label>
                <Form.Control
                    required
                    type='username'
                    placeholder='Username'
                    autoFocus
                    value={username}
                    onChange={e => {
                        onChangeUsername(e.target.value)
                        handleChange()
                    }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='validationCustomGroup'>
                <Form.Label>Group</Form.Label>
                <DropdownButton id='dropdown-basic-button' title={group.name}>
                    {groupStore.groups.map(group =>
                        <Dropdown.Item
                            onClick={event => {
                                onChangeGroup(group)
                                handleChange()
                            }}>
                            {group.name}
                        </Dropdown.Item>
                    )}
                </DropdownButton>
            </Form.Group>
        </Form>

    );
};

export default UserForm;