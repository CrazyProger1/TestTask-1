import Form from 'react-bootstrap/Form';
import {useEffect, useRef} from 'react';


const GroupForm = ({name, description, onChangeName, onChangeDesc, onSetValidity}) => {
    const formRef = useRef(null)

    useEffect(() => {
        onSetValidity(validate());
    })


    const validate = () => {
        return formRef.current.checkValidity();
    }

    const handleChange = () => {
        if (onSetValidity !== undefined)
            onSetValidity(validate());
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <Form ref={formRef} noValidate validated={true} onSubmit={handleSubmit}>
            <Form.Group className='mb-3' controlId='validationCustom01'>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    required
                    type='name'
                    placeholder='Name'
                    autoFocus
                    value={name}
                    onChange={e => {
                        handleChange()
                        onChangeName(e.target.value)
                    }}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group className='mb-3' controlId='validationCustom02'>
                <Form.Label>Description</Form.Label>
                <Form.Control
                    required
                    type='text'
                    rows={3}
                    as='textarea'
                    placeholder='Description'
                    autoFocus
                    value={description}
                    onChange={e => {
                        handleChange()
                        onChangeDesc(e.target.value)
                    }}
                    aria-valuemax={1000}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
        </Form>
    );
};

export default GroupForm;