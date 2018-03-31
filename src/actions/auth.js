/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//login action
export const loginRequest = (credential) => {
    return {
        type: LOGIN,
        credential
    }
};

export const loginSuccess = (xAuth) => {
    return {
        type: LOGIN_SUCCESS,
        xAuth
    }
};

export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        error
    }
};