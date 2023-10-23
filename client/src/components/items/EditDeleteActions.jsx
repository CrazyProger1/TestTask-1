import React from 'react';
import Button from 'react-bootstrap/Button';
import {ButtonGroup} from 'react-bootstrap';

const EditDeleteActions = ({onEdit, onDelete, deleteInactive = false, ...props}) =>
    <ButtonGroup size='sm' className='mb-2'>
        <Button
            variant='outline-primary'
            onClick={onEdit}>
            Edit
        </Button>
        <Button
            active={deleteInactive}
            variant={deleteInactive ? 'secondary' : 'outline-danger'}
            onClick={deleteInactive ? null : onDelete}>
            Delete
        </Button>
    </ButtonGroup>


export default EditDeleteActions;