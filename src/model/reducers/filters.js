/**
 * Created by Ishai on 12/20/2016.
 */

import {UPDATE_FILTERS} from '../action-types';

const initialState = {
    includeCompleted: true,
    searchBy: ''
};

export function filters(state, action) {
    switch(action.type) {
        case UPDATE_FILTERS:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state || initialState;
    }
}