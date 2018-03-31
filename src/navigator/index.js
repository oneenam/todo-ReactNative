/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import { StackNavigator } from 'react-navigation';

import AuthScreen from '../containers/auth/Authcontainer';
import TodoAddScreen from '../containers/todo/add/TodoAddContainer';

export default AppNavigator = StackNavigator(
    {
        Auth: { screen: AuthScreen },
        TodoAdd: { screen: TodoAddScreen },
    },
    {
        mode: 'modal',
        headerMode: 'none',
        gesturesEnabled: true
    }
);