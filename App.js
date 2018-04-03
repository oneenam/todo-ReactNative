import React, { Component } from 'react';
import { Provider } from 'react-redux';
//import { PersistGate } from 'redux-persist/es/integration/react';
import { PersistGate } from "redux-persist/lib/integration/react"
import configureStore from './src/store/configureStore';
import NavigatorContainer from './src/containers/NavigatorContainer';

export default class App extends Component {
  render() {
    const { persistor, store } = configureStore;
    //clean persistor
    //persistor.purge();
    return (
      <Provider store={store}>
        <PersistGate
          //loading={<SplashScreen />}
          onBeforeLift={() => {
            console.log("onBeforeLift");
          }}
          persistor={persistor}>
          <NavigatorContainer />
        </PersistGate>
      </Provider>
    );
  }
}