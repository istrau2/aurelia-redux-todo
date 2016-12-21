/**
 * Created by istrauss on 12/20/2016.
 */

import actionTypes from '../model/model';
import {inject} from 'aurelia-framework';
import {Store} from 'aurelia-redux-plugin';

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
        this.filters = newState.filters;
    }

    onIncludeCompleted(evt) {
        this.store.dispatch({
            type: actionTypes.UPDATE_FILTERS,
            payload: {
                includeCompleted: evt.target.checked
            }
        });
    }

    onSearch(evt) {
        this.store.dispatch({
            type: actionTypes.UPDATE_FILTERS,
            payload: {
                searchBy: evt.target.value
            }
        });
    }
}
