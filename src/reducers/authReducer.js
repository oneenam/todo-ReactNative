/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import {
    LOGIN,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from '../actions/auth';

const defaultState = {
    isLoading: false,
    error: null,
    xAuth: null
};

export default authReducer = (state = defaultState, action) => {
    switch (action.type) {
        
        case LOGIN:
            return {
                ...state,
                action,
                isLoading: true,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoading: false,
                xAuth: action.xAuth,
            };
        case LOGIN_FAILURE:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };

        default:
            return state;

    }
}