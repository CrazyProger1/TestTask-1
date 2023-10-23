import {action, makeObservable, observable} from 'mobx';
import {createGroup, deleteGroup, getGroups, updateGroup} from '../services/api/group';
import {validateResponse} from '../utils/validateResponse';

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
                validateResponse(result, [201]);
                this.groups.push(result.data);
            })
    }

    async loadGroups(page = 0, pageSize = 20) {
        await getGroups(page * pageSize, pageSize)
            .then(result => {
                validateResponse(result, [200]);
                this.groups = result.data.results;
            })
    }


    async updateGroup(group) {
        await updateGroup(
            group.id,
            group
        ).then((result) => {
            validateResponse(result, [200])
            let item = this.groups.find(x => x.id === group.id);
            let idx = this.groups.indexOf(item);
            this.groups[idx] = result.data;

        })
    }

    async deleteGroup(group) {
        await deleteGroup(group.id)
            .then((result) => {
                validateResponse(result, [204, 404]);
                this.groups = this.groups.filter((item) => group.id !== item.id);
            })
    }
}


const groupStore = new GroupStore();


export default groupStore;