/**
 * Created by istrauss on 12/21/2016.
 */

import {inject, bindable} from 'aurelia-framework';
import {UPDATE_TODO, REMOVE_TODO, Store} from 'model';

@inject(Store)
export class TodoCustomElement {

    @bindable todo;

    constructor(store) {
        this.store = store;
    }

    bind() {}

    toggleCompleted() {
        this.store.dispatch({
            type: UPDATE_TODO,
            payload: {
                index: this.getIndex(),
                values: {
                    isCompleted: !this.todo.isCompleted
                }
            }
        });
    }

    remove() {
        this.store.dispatch({
            type: REMOVE_TODO,
            payload: {
                index: this.getIndex()
            }
        });
    }

    getIndex() {
        const todos = this.store.getState().todos;
        for(let i = 0; i < todos.length; i++) {
            if (todos[i] === this.todo) {
                return i;
            }
        }
    }
}
