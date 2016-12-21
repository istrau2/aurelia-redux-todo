/**
 * Created by istrauss on 12/21/2016.
 */

import {inject, bindable} from 'aurelia-framework';
import {UPDATE_TODO, REMOVE_TODO, Store} from 'model';

@inject(Store)
export class TodoCustomElement {

    @bindable todo;
    @bindable index;

    constructor(store) {
        this.store = store;
    }

    bind() {
        console.log(this.index);
    }

    toggleCompleted() {
        this.store.dispatch({
            type: UPDATE_TODO,
            payload: {
                index: this.index,
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
                index: this.index
            }
        });
    }
}
