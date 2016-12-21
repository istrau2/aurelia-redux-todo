/**
 * Created by Ishai on 12/21/2016.
 */

import {UPDATE_TODO} from '../action-types';
import ReducerHelpers from '../reducer-helpers';

const initialState = [
    {
        name: 'Wake up.',
        isCompleted: true
    },
    {
        name: 'Relax',
        isCompleted: true
    },
    {
        name: 'Wash the car.',
        isCompleted: false
    },
    {
        name: 'Go to work.',
        isCompleted: false
    }
];

export function todos(state, action) {
    switch(action.type) {
        case UPDATE_TODO:
            return ReducerHelpers.updateArray(state.todos, [action]);
        default:
            return initialState;
    }
}