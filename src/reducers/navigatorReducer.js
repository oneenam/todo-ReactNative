/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import { NavigationActions } from 'react-navigation';
import AppNavigator from '../navigator';

const initialState = AppNavigator.router.getStateForAction(NavigationActions.init);

export default (state = initialState, action) => {
    const nextState = AppNavigator.router.getStateForAction(action, state);
    return nextState || state;
};