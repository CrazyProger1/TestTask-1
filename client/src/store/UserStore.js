import {makeAutoObservable} from "mobx";

class UserStore {
    users = [
        {
            id: 1,
            username: 'crazyproger1',
            created: '18.10.2023',
            group: 'Users',
        },
        {
            id: 2,
            username: 'testuser',
            created: '30.10.2040',
            group: 'Users',
        },
        {
            id: 3,
            username: 'admin',
            created: '12.11.2023',
            group: 'Admins',
        },
    ]

    constructor() {
        makeAutoObservable(this)
    }

    getUsers() {
        return this.users
    }


    addUser(user) {
        this.users.push(user)
    }

    deleteUser(user) {

    }

    updateUser(user) {

    }


}


const userStore = new UserStore();


export default userStore;