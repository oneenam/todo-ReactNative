/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */

import * as Actions from '../actions/ActionTypes';

const defaultState = {
    isLoading: false,
    error: null,
    todos: []
};

export default todoReducer = (state = defaultState, action) => {
    switch (action.type) {

        case Actions.TODOS:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.TODOS_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.TODOS_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                todos: action.list
            });

        case Actions.TODO_UPDATE:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.TODO_UPDATE_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.TODO_UPDATE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                todo: action.todo
            });

        case Actions.TODO_DELETE:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.TODO_DELETE_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.TODO_DELETE_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                todo: action.todo
            });

        default:
            return state;

    }
}