import {action, makeObservable, observable} from 'mobx';
import {createUser, deleteUser, getUsers, updateUser,} from '../services/api/user'
import {validateResponse} from '../utils/validateResponse';

class UserStore {
    users = []

    constructor() {
        makeObservable(this,
            {
                users: observable,
                loadUsers: action,
                createUser: action,
                updateUser: action,
                deleteUser: action
            }
        )
    }

    async createUser(user) {
        await createUser(user)
            .then(result => {
                validateResponse(result, [201]);
                this.users.push(result.data);
            })
    }

    async loadUsers(page = 0, pageSize = 20) {
        await getUsers(page * pageSize, pageSize)
            .then(result => {
                validateResponse(result, [200]);
                this.users = result.data.results;
            })
    }


    async updateUser(user) {
        await updateUser(
            user.id,
            user
        ).then((result) => {
            validateResponse(result, [200])
            let item = this.users.find(x => x.id === user.id);
            let idx = this.users.indexOf(item);
            this.users[idx] = result.data;

        })
    }

    async deleteUser(user) {
        await deleteUser(user.id)
            .then((result) => {
                validateResponse(result, [204, 404]);
                this.users = this.users.filter((item) => user.id !== item.id);
            })
    }

}


const userStore = new UserStore();


export default userStore;