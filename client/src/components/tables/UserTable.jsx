import React, {useEffect, useState} from 'react';

import {observer} from "mobx-react"
import {Button, Table} from "react-bootstrap";

import userStore from "../../store/UserStore";
import UserItem from "../items/UserItem";
import UserModal from "../modals/UserModal";


const UserTable = observer(() => {
    useEffect(() => {
        userStore.loadUsers();
    }, [])

    const [modalState, setModalState] = useState({
        heading: "Create",
        action: "Create",
        show: false,
        user: null
    })

    const hideModal = () =>
        setModalState({...modalState, show: false})

    const showModal = (heading, action, user) =>
        setModalState({
            show: true,
            user: user,
            heading: heading,
            action: action,
        })


    const showErrors = (errors) =>
        setModalState({
            ...modalState,
            show: true,
            errors: errors
        })


    const handleEditButtonClick = (user) => {
        showModal(
            "Edit",
            "Save Changes",
            user,
        )
    }


    const handleDeleteButtonClick = (user) =>
        userStore.deleteUser(user)


    const handleCreateButtonClick = () => {
        showModal(
            "Create",
            "Create",
        )
    }


    const handleModalCancel = () =>
        hideModal()


    const handleModalAction = (user) => {
        hideModal()


        if (modalState.heading === "Create")
            userStore.createUser(user).catch(errors => showErrors(errors))
        else
            userStore.updateUser(user).catch(errors => showErrors(errors))


    }


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
                {...modalState}
                onCancel={handleModalCancel}
                onAction={handleModalAction}
            />
        </div>

    );
});

export default UserTable;