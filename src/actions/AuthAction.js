/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import * as ActionTypes from './ActionTypes';
import { serviceTodos } from './TodoAction';
import * as Constants from '../constants';
import { fetchConfig } from '../utility';


export const serviceLogin = (body) => {
    return dispatch => {
        dispatch(authServiceAction());

        fetch(`${Constants.SERVICE_URI}/users/login`, fetchConfig('POST', '', body))
            .then(response => {
                console.log(response);
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => {

                dispatch(authServiceSuccess(response.headers.map.xauth[0]))
                dispatch(serviceTodos(response.headers.map.xauth[0]));
            })
            .catch(() => dispatch(authServiceError("Login failed.")));

    }
};

export const serviceRegistration = (body) => {
    return dispatch => {
        dispatch(authServiceAction());

        fetch(`${Constants.SERVICE_URI}/users/registration`, fetchConfig('POST', '', body))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => {
                dispatch(authServiceSuccess(response.headers.map.xauth[0]))
                dispatch(serviceTodos(response.headers.map.xauth[0]));
            })
            .catch(() => dispatch(authServiceError("Registration failed.")));

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
