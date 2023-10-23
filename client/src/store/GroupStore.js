import {action, makeObservable, observable} from "mobx";
import {createGroup, deleteGroup, getGroups, updateGroup} from "../services/api/group";


class GroupStore {
    groups = []

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
        await createGroup(group)
            .then(result => {
                if (result.status === 201) {
                    this.groups.push(result.data)
                } else
                    throw {errors: result.data};
            })
    }

    async loadGroups(page = 0, pageSize = 20) {
        await getGroups(page * pageSize, pageSize)
            .then(result => {
                if (result.status === 200)
                    this.groups = result.data.results;
                else
                    this.groups = []
            })
    }


    async updateGroup(group) {
        await updateGroup(
            group.id,
            group
        ).then((result) => {
            if (result.status === 200) {
                let item = this.groups.find(x => x.id === group.id);
                let idx = this.groups.indexOf(item)
                this.groups[idx] = result.data;
            } else
                throw {errors: result.data};
        })
    }

    async deleteGroup(group) {
        await deleteGroup(group.id)
            .then((result) => {
                if (result.status === 204 || result.status === 404)
                    this.groups = this.groups.filter((item) => {
                        return group.id !== item.id;
                    })
            })
    }
}


const groupStore = new GroupStore();


export default groupStore;