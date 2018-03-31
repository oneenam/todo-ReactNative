/**
 * Created by Muhammad Enamul Huq Sarkar on 3/31/18
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import rootReducer from '../reducers';

//middleware that logs actions
//const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const loggerMiddleware = createLogger();

function configureStore(initialState) {
    const configPersist = {
        key: 'root',
        storage,
        blacklist: [],  // reducer names
        //whitelist: [],
        //debug: true //to get useful logging
        //stateReconciler: hardSet,
    };

    const enhancers = [applyMiddleware(loggerMiddleware)];
    const persistedReducer = persistCombineReducers(configPersist, rootReducer);
    const store = createStore(persistedReducer, initialState, compose(...enhancers));
    const persistor = persistStore(store, { enhancers });
    return { persistor, store };
}

export default configureStore({});
