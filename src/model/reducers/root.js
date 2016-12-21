/**
 * Created by Ishai on 12/20/2016.
 */

import {UPDATE_TODO, REMOVE_TODO, ADD_TODO, UPDATE_FILTERS} from '../action-types';
import ReducerHelpers from '../reducer-helpers';

const initialState = {
    filters: {
        includeCompleted: true,
        searchBy: ''
    },
    todos: [
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
    ]
};

export default function root(state, action) {
    let newState;

    switch(action.type) {
        case UPDATE_FILTERS:
            const newFilters = {
                ...state.filters,
                ...action.payload.values
            };

            newState = {
                filters: newFilters,
                todos: getVisibleTodos(state.todos, newFilters)
            };

            break;

        case UPDATE_TODO:
            const updatedTodos = ReducerHelpers.updateArray(state.todos, [action.payload]);

            //Can modify directly because updateArray() above already created a new array/new object.
            updatedTodos[action.payload.index].isVisible = isTodoVisible(updatedTodos[action.payload.index], state.filters);

            newState = {
                todos: updatedTodos
            };

            break;

        case REMOVE_TODO:
            newState = {
                todos: state.todos.slice(0, action.payload.index).concat(state.todos.slice(action.payload.index + 1))
            };

            break;

        case ADD_TODO:
            newState = {
                todos: state.todos.slice(0).concat([{
                    ...action.payload.todo,
                    isVisible: isTodoVisible(action.payload.todo, state.filters)
                }])
            };

            break;

        default:
            newState = state || {
                    ...initialState,
                    ...{
                        todos: getVisibleTodos(initialState.todos, initialState.filters)
                    }
                };
    }

    return {
        ...state,
        ...newState
    }
}

function getVisibleTodos(todos, filters) {
    return todos.map(todo => {
        return {
            ...todo,
            isVisible: isTodoVisible(todo, filters)
        };
    })
}

function isTodoVisible(todo, filters) {
    const satisfiesSearchBy = !filters.searchBy || todo.name.toLowerCase().indexOf(filters.searchBy.toLowerCase()) > -1;
    const satisfiesIncludeCompleted = filters.includeCompleted || !todo.isCompleted;
    return satisfiesSearchBy && satisfiesIncludeCompleted;
}


