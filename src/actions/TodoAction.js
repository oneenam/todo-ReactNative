/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */

import * as ActionTypes from './ActionTypes';
import { NavigationActions } from 'react-navigation'
import * as Constants from '../constants';
import { fetchConfig } from '../utility';

export const serviceTodos = (xAuth) => {
    return dispatch => {
        dispatch(todosServiceAction());

        fetch(`${Constants.SERVICE_URI}/todos`, fetchConfig('GET', xAuth))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(todosServiceSuccess(response.todos));
                if (response.todos.length) {
                    dispatch(NavigationActions.reset(
                        {
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'TodoList' })]
                        }
                    ));
                } else {
                    dispatch(NavigationActions.reset(
                        {
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'TodoAdd' })]
                        }
                    ));
                }
            })
            .catch(() => dispatch(todosServiceError("Something wrong!")));
    }
};

export const todosServiceAction = () => ({
    type: ActionTypes.TODOS
});

export const todosServiceError = (error) => ({
    type: ActionTypes.TODOS_FAILURE,
    error: error
});

export const todosServiceSuccess = (data) => ({
    type: ActionTypes.TODOS_SUCCESS,
    list: data
});


//update
export const serviceUpdateTodo = (id, xAuth, body) => {

    return dispatch => {
        dispatch(todoUpdateServiceAction());

        fetch(`${Constants.SERVICE_URI}/todos/${id}`, fetchConfig('PATCH', xAuth, body))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(todoUpdateServiceSuccess(response.todo));
                dispatch(serviceTodos(xAuth));
            })
            .catch(() => dispatch(todoUpdateServiceError("Todo updated failed.")));

    }
};

export const todoUpdateServiceAction = () => ({
    type: ActionTypes.TODO_UPDATE
});

export const todoUpdateServiceError = (error) => ({
    type: ActionTypes.TODO_UPDATE_FAILURE,
    error: error
});

//todo: not needed
export const todoUpdateServiceSuccess = (data) => ({
    type: ActionTypes.TODO_UPDATE_SUCCESS,
    todo: data
});


//delete

export const serviceDeleteTodo = (id, xAuth) => {

    return dispatch => {
        dispatch(todoDeleteServiceAction());

        fetch(`${Constants.SERVICE_URI}/todos/${id}`, fetchConfig('DELETE', xAuth))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(todoDeleteServiceSuccess(response.todo));
                dispatch(serviceTodos(xAuth));
            })
            .catch(() => dispatch(todoDeleteServiceError("Todo cancel failed.")));

    }
};

export const todoDeleteServiceAction = () => ({
    type: ActionTypes.TODO_DELETE
});

export const todoDeleteServiceError = (error) => ({
    type: ActionTypes.TODO_DELETE_FAILURE,
    error: error
});

export const todoDeleteServiceSuccess = (data) => ({
    type: ActionTypes.TODO_DELETE_SUCCESS,
    todo: data
});

//create
export const serviceCreateTodo = (xAuth, body) => {

    return dispatch => {
        dispatch(todoCreateServiceAction());

        fetch(`${Constants.SERVICE_URI}/todos`, fetchConfig('POST', xAuth, body))
            .then(response => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((response) => {
                dispatch(todoCreateServiceSuccess(response));
                //dispatch(serviceTodos(xAuth));
            })
            .catch(() => dispatch(todoCreateServiceError("Todo create failed.")));

    }
};

export const todoCreateServiceAction = () => ({
    type: ActionTypes.TODO_CREATE
});

export const todoCreateServiceError = (error) => ({
    type: ActionTypes.TODO_CREATE_FAILURE,
    error: error
});

export const todoCreateServiceSuccess = (data) => ({
    type: ActionTypes.TODO_CREATE_SUCCESS,
    newTodo: data
});

export const todoCreateReset = () => ({
    type: ActionTypes.TODO_CREATE_RESET
});