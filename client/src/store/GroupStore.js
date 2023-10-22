import {action, makeObservable, observable} from "mobx";


class GroupStore {
    groups = [
        {
            id: 1,
            name: 'Group 1',
            description: 'Desc of group 1'
        },
        {
            id: 2,
            name: 'Group 2',
            description: 'Desc of group 2'
        },
        {
            id: 3,
            name: 'Group 3',
            description: 'Desc of group 3'
        }
    ]

    constructor() {
        makeObservable(this,
            {
                groups: observable,
                loadGroups: action,
                createGroup: action,
                updateGroup: action,
                deleteGroup: action
            }
        )
    }

    async createGroup(group) {

    }

    async loadGroups() {

    }


    async updateGroup(group) {

    }

    async deleteGroup(group) {

    }


}


const groupStore = new GroupStore();


export default groupStore;