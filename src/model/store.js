/**
 * Created by Ishai on 12/21/2016.
 */

import {Container, inject} from 'aurelia-framework';
import {createStore} from 'redux';

@inject(Container)
export class Store {
    static init(rootReducer, initialState, middleware){
        const store = createStore(rootReducer, initialState, middleware);
        const rootContainer = Container.instance;
        rootContainer.registerInstance(Store, store);
    }
}
