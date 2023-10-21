import {action, makeObservable, observable} from "mobx";
import {deleteUser, getUsers} from '../services/api/user'

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

    createUser(user) {
        this.users.push(user)
    }

    async loadUsers() {
        this.users = await getUsers();
    }


    async updateUser(user) {

    }

    async deleteUser(user) {
        deleteUser(user).then(() => {
            this.users = this.users.filter((element) => {
                return user.id !== element.id;
            })
        })
    }


}


const userStore = new UserStore();


export default userStore;