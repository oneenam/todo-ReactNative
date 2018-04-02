/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import * as Actions from '../actions/ActionTypes';

const defaultState = {
    isLoading: false,
    error: null,
    xauth: null
};

export default authReducer = (state = defaultState, action) => {
    switch (action.type) {

        case Actions.AUTH:
            return Object.assign({}, state, {
                isLoading: true,
            });
        case Actions.AUTH_FAILURE:
            return Object.assign({}, state, {
                isLoading: false,
                error: action.error
            });
        case Actions.AUTH_SUCCESS:
            return Object.assign({}, state, {
                isLoading: false,
                xauth: action.xauth
            });
        case Actions.AUTH_RESET:
            return Object.assign({}, state, {
                isLoading: false,
                error: null
            });

        default:
            return state;

    }
}