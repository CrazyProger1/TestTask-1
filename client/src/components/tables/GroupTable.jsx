import React, {useEffect} from 'react';
import {Button, Table} from "react-bootstrap";

import GroupItem from "../items/GroupItem";
import groupStore from "../../store/GroupStore";
import {observer} from "mobx-react"


const GroupTable = observer(() => {
    useEffect(() => {
        groupStore.loadGroups();
    }, [])


    const handleEditButtonClick = (group) => {

    }


    const handleDeleteButtonClick = (group) =>
        groupStore.deleteGroup(group)


    const handleCreateButtonClick = () => {

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
        </div>
    );
});

export default GroupTable;