import Tabs from './Tabs'
import Stack from './LoginStack'
import { AppRegistry } from 'react-native'

import {createStackNavigator,createAppContainer} from 'react-navigation'
import { connect, Provider } from 'react-redux'
import React from 'react'
import {store} from './redux/Store'
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

import App from './App'





const persistor = persistStore(store);
const AppContainer = () =>
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App/>
    </PersistGate>
  </Provider>


AppRegistry.registerComponent('viato', () => AppContainer );
