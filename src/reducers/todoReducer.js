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
        default:
            return state;

    }
}