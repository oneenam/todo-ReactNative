/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware("root", state => state.navigation);
const addListener = createReduxBoundAddListener("root");

export { middleware, addListener };