/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import * as ActionTypes from './ActionTypes';
import AuthService from '../services/AuthService';
import { serviceTodos } from './TodoAction';

export const serviceLogin = (params) => {
    return dispatch => {
        dispatch(authServiceAction());
        new AuthService().login(params, resp => {
            if (resp.status === 200) {
                dispatch(authServiceSuccess(resp.headers.map.xauth[0]))
                //get todos
                dispatch(serviceTodos(resp.headers.map.xauth[0]));
            } else {
                dispatch(authServiceError("Login failed!"))
            }
        }, err => {
            //
            dispatch(authServiceError("Login failed!"))
        });
    }
};

export const serviceRegistration = (params) => {
    return dispatch => {
        dispatch(authServiceAction());
        new AuthService().registration(params, resp => {
            if (resp.status === 200) {
                dispatch(authServiceSuccess(resp.headers.map.xauth[0]))
                //get todos
                dispatch(serviceTodos(resp.headers.map.xauth[0]));
            } else {
                dispatch(authServiceError("Registration failed!"))
            }
        }, err => {
            //
            dispatch(authServiceError("Registration failed!"))
        });
    }
};

export const resetAuthService = () => {
    return dispatch => {
        dispatch(authServiceReset())
    }
}

export const authServiceAction = () => ({
    type: ActionTypes.AUTH
});

export const authServiceError = (error) => ({
    type: ActionTypes.AUTH_FAILURE,
    error: error
});

export const authServiceSuccess = (data) => ({
    type: ActionTypes.AUTH_SUCCESS,
    xauth: data
});

export const authServiceReset = () => ({
    type: ActionTypes.AUTH_RESET
});
