import React, {useEffect, useState} from 'react';

import {observer} from "mobx-react"
import {Button, Table} from "react-bootstrap";

import userStore from "../../store/UserStore";
import UserItem from "../items/UserItem";
import UserModal from "../modals/UserModal";
import ErrorModal from "../modals/ErrorModal";


const UserTable = observer(() => {
    useEffect(() => {
        userStore.loadUsers().catch(error => showErrorModal(error.errors));
    }, [])

    const [createEditModalState, setCreateEditModalState] = useState({
        heading: "Create",
        action: "Create",
        show: false,
        user: null
    })
    const [errorModalState, setErrorModalState] = useState({
        heading: "Error",
        errors: [],
        show: false,
    })

    // Modal
    const hideCreateEditModal = () =>
        setCreateEditModalState({...createEditModalState, show: false})

    const showCreateEditModal = (heading, action, user) =>
        setCreateEditModalState({
            show: true,
            user: user,
            heading: heading,
            action: action,
        })


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
    const handleEditButtonClick = (user) => {
        showCreateEditModal(
            "Edit",
            "Save Changes",
            user,
        )
    }


    const handleDeleteButtonClick = (user) =>
        userStore.deleteUser(user)


    const handleCreateButtonClick = () => {
        showCreateEditModal(
            "Create",
            "Create",
        )
    }


    const handleCreateEditModalCancel = () =>
        hideCreateEditModal()


    const handleCreateEditModalAction = (user) => {
        hideCreateEditModal()

        if (createEditModalState.heading === "Create")
            userStore.createUser(user).catch(error => showErrorModal(error.errors))
        else
            userStore.updateUser(user).catch(error => showErrorModal(error.errors))
    }

    const handleCloseErrorModal = () =>
        hideErrorModal()


    return (
        <div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>Created</th>
                    <th>Group</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {userStore.users.map((user, index) =>
                    <UserItem
                        number={index + 1}
                        user={user}
                        onDelete={handleDeleteButtonClick}
                        onEdit={handleEditButtonClick}
                        key={user.id}
                    />
                )}
                </tbody>
            </Table>
            <Button size="lg" onClick={handleCreateButtonClick}>
                Add User
            </Button>
            <UserModal
                {...createEditModalState}
                onCancel={handleCreateEditModalCancel}
                onAction={handleCreateEditModalAction}
            />
            <ErrorModal
                {...errorModalState}
                onClose={handleCloseErrorModal}
            />
        </div>

    );
});

export default UserTable;