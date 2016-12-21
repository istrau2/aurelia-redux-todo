/**
 * Created by istrauss on 12/20/2016.
 */

import {inject} from 'aurelia-framework';
import {UPDATE_FILTERS, Store} from 'model';

@inject(Store)
export class FiltersCustomElement {
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
        Object.assign(this, newState.filters);
    }

    toggleIncludeCompleted(evt) {
        this.updateFilters({
            includeCompleted: evt.target.checked
        });
    }

    onSearch(evt) {
        this.updateFilters({
            searchBy: evt.target.value
        });
    }

    updateFilters(newFilters) {
        this.store.dispatch({
            type: UPDATE_FILTERS,
            payload: {
                values: newFilters
            }
        });
    }
}
