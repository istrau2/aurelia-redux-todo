/**
 * Created by Ishai on 12/20/2016.
 */

import {combineReducers} from 'redux';
import {filters} from './filters';
import {todos} from './todos';

export function root(state, action) {
    return combineReducers({
        filters,
        todos
    });
}