/**
 * Created by Ishai on 12/21/2016.
 */

import {createStore} from 'redux';

export class Store {
    init(rootReducer, initialState, middleware){
        return createStore(rootReducer, initialState, middleware);
    }
}