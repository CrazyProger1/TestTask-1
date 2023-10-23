import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";
import {observer} from 'mobx-react'
import GroupModal from '../modals/GroupModal';
import ErrorModal from '../modals/ErrorModal';
import GroupItem from '../items/GroupItem';
import groupStore from '../../store/GroupStore';


const GroupTable = observer(() => {
    const [createEditModalState, setCreateEditModalState] = useState({
        heading: 'Create',
        action: 'Create',
        show: false,
        group: null
    })
    const [errorModalState, setErrorModalState] = useState({
        heading: 'Error',
        errors: [],
        show: false,
    })

    useEffect(() => {
        groupStore.loadGroups()
            .catch(error => showErrorModal(error.errors));
    }, [])


    // Modals
    const showCreateEditModal = (heading, action, group) =>
        setCreateEditModalState({
            show: true,
            group: group,
            heading: heading,
            action: action,
        })

    const hideCreateEditModal = () =>
        setCreateEditModalState({...createEditModalState, show: false})


    const showErrorModal = (errors) => {
        setErrorModalState({
            ...errorModalState,
            errors: errors,
            show: true,
        })
    }

    const hideErrorModal = () => {
        setErrorModalState({
            ...errorModalState,
            show: false,
        })
    }


    // Handlers
    const handleEditButtonClick = (group) => {
        showCreateEditModal(
            "Edit",
            "Save Changes",
            group,
        )
    }


    const handleDeleteButtonClick = (group) =>
        groupStore.deleteGroup(group)
            .catch(error => showErrorModal(error.errors))


    const handleCreateButtonClick = () => {
        showCreateEditModal(
            "Create",
            "Create",
        )
    }


    const handleCreateEditModalAction = (group) => {
        hideCreateEditModal()

        if (createEditModalState.heading === "Create")
            groupStore.createGroup(group)
                .catch(error => showErrorModal(error.errors))
        else
            groupStore.updateGroup(group)
                .catch(error => showErrorModal(error.errors))
    }


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {groupStore.groups.map((group, index) =>
                    <GroupItem
                        number={index + 1}
                        group={group}
                        onDelete={handleDeleteButtonClick}
                        onEdit={handleEditButtonClick}
                        key={group.id}
                    />
                )}
                </tbody>
            </Table>
            <Button size="lg" onClick={handleCreateButtonClick}>
                Add Group
            </Button>
            <GroupModal
                {...createEditModalState}
                onCancel={hideCreateEditModal}
                onAction={handleCreateEditModalAction}
            />
            <ErrorModal
                {...errorModalState}
                onClose={hideErrorModal}
            />
        </div>
    );
});

export default GroupTable;