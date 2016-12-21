/**
 * Created by istrauss on 12/20/2016.
 */

import {inject} from 'aurelia-framework';
import {ADD_TODO, Store} from 'model';

@inject(Store)
export class TodosCustomElement {
    constructor(store) {
        this.store = store;
    }

    bind() {
        this.update();
        this.unsubcribe = this.store.subscribe(this.update.bind(this));
    }

    unbind() {
        this.unsubcribe();
    }

    update() {
        const newState = this.store.getState();

        this.todos = newState.todos;
        this.filters = newState.filters;
    }

    addTodo() {
        this.store.dispatch({
            type: ADD_TODO,
            payload: {
                todo: {
                    name: this.newTodoName,
                    isComplete: false
                }
            }
        });
        this.newTodoName = undefined;
    }
}
