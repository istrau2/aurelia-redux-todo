import {inject} from 'aurelia-framework';
import {Store, root} from 'model';

@inject(Store)
export class App {
    constructor(store) {
        this.store = store;
    }

    activate() {
        const storeMiddleware = window.env === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() : undefined;
        this.store.init(root, undefined, storeMiddleware);
        this.update();
        this.unsubcribe = this.store.subscribe(this.update.bind(this));
    }

    deactivate() {
        this.unsubcribe();
    }

    update() {
        const newState = this.store.getState();

        this.todos = newState.todos;
    }
}
