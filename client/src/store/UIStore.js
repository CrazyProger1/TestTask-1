import {action, makeObservable, observable} from "mobx";

class UIStore {
    currentPage = 'link-1'

    constructor() {
        makeObservable(this,
            {
                currentPage: observable,
                setPage: action

            }
        )
    }

    setPage(page) {
        this.currentPage = page;
    }


}


const uiStore = new UIStore();


export default uiStore;