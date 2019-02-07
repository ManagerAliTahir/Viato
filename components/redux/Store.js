import {createStore} from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import reducer from './Reducers/LoginReducer'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const persistConfig = {
  key: 'root',
  storage:storage,
  stateReconciler: autoMergeLevel2,
}

const persistedReducer = persistReducer(persistConfig, reducer)
export const store = createStore(persistedReducer);
