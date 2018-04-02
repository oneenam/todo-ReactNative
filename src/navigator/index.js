/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import { StackNavigator } from 'react-navigation';

import AuthScreen from '../containers/auth/AuthContainer';
import TodoAddScreen from '../containers/todo/add/TodoAddContainer';
import TodoListScreen from '../containers/todo/list/TodoListContainer';

export default AppNavigator = StackNavigator(
    {
        Auth: { screen: AuthScreen },
        TodoAdd: { screen: TodoAddScreen },
        TodoList: { screen: TodoListScreen }
    },
    {
        mode: 'modal',
        headerMode: 'none',
        gesturesEnabled: true
    }
);