/**
 * Created by istrauss on 12/20/2016.
 */

import {inject} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';
import {UPDATE_TODO} from '../model/model';

@inject(Store)
export class TodosListCustomElement {
    constructor(store) {
        this.store = store;
    }

    activate() {
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

    toggleCompleted(index) {
        this.store.dispatch({
            type: UPDATE_TODO,
            payload: {
                index,
                values: {
                    isCompleted: !this.todos[index].isCompleted
                }
            }
        });
    }
}
