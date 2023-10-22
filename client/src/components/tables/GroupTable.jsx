import React, {useEffect, useState} from 'react';
import {Button, Table} from "react-bootstrap";

import GroupItem from "../items/GroupItem";
import groupStore from "../../store/GroupStore";
import {observer} from "mobx-react"
import GroupModal from "../modals/GroupModal";


const GroupTable = observer(() => {
    useEffect(() => {
        groupStore.loadGroups();
    }, [])

    const [modalState, setModalState] = useState({
        heading: "Create",
        action: "Create",
        show: false,
        group: null
    })


    const handleEditButtonClick = (group) => {
        setModalState({
            show: true,
            group: group,
            heading: "Edit",
            action: "Save Changes",
        })
    }


    const handleDeleteButtonClick = (group) =>
        groupStore.deleteGroup(group)


    const handleCreateButtonClick = () => {
        setModalState({
            show: true,
            heading: "Create",
            action: "Create",
            group: null
        })
    }

    const hideModal = () => {
        setModalState({...modalState, show: false})
    }

    const handleModalCancel = () =>
        hideModal()


    const handleModalAction = (group) => {
        hideModal()

        if (modalState.heading === "Create")
            groupStore.createGroup(group)
        else
            groupStore.updateGroup(group)
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
                {...modalState}
                onCancel={handleModalCancel}
                onAction={handleModalAction}
            />
        </div>
    );
});

export default GroupTable;