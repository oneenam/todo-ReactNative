/**
 * Created by Muhammad Enamul Huq Sarkar on 4/2/18
 */

import * as ActionTypes from './ActionTypes';
import TodoService from '../services/TodoService';
import { NavigationActions } from 'react-navigation'

export const serviceTodos = (xAuth) => {
    return dispatch => {
        dispatch(todosServiceAction());
        new TodoService().todos(xAuth, resp => {

            if (resp.todos && resp.todos.length) {
                dispatch(todosServiceSuccess(resp.todos))
                dispatch(NavigationActions.reset(
                    {
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'TodoList' })]
                    }
                ));
            }
            else {
                //go to add new
                dispatch(NavigationActions.reset(
                    {
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'TodoAdd' })]
                    }
                ));

            }
        }, err => {
            //
            dispatch(todosServiceError("Something wrong!"))
        });
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
