import React, {useEffect, useState} from 'react';

import {observer} from "mobx-react"
import {Button, Table} from "react-bootstrap";

import userStore from "../../store/UserStore";
import UserItem from "../items/UserItem";
import UserModal from "../modals/UserModal";


const UserTable = observer(() => {
    const [modalShow, setModalShow] = useState(false);
    const [modalHeading, setModalHeading] = useState("")
    const [modalAction, setModalAction] = useState("")

    useEffect(() => {
        userStore.loadUsers();
    }, [])


    const handleEditButtonClick = (user) => {
        setModalShow(true);
        setModalHeading("Edit")
        setModalAction("Save Changes")
    }

    const handleCreateButtonClick = () => {
        setModalShow(true);
        setModalHeading("Create")
        setModalAction("Create")
    }

    const handleDeleteButtonClick = (user) => {
        userStore.deleteUser(user)
    }


    const handleModalClose = () => {
        setModalShow(false);
    }


    const handleUserAction = (user) => {
        console.log(user)
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
                        onEdit={event => handleEditButtonClick(user)}
                        key={user.id}
                    />
                )}
                </tbody>
            </Table>
            <Button size="lg" onClick={handleCreateButtonClick}>
                Add User
            </Button>
            <UserModal
                show={modalShow}
                action={modalAction}
                heading={modalHeading}
                onAction={handleUserAction}
                onClose={handleModalClose}
                user={null}
            />
        </div>

    );
});

export default UserTable;