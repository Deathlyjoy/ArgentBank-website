import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';

const reduxDevtools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const persistConfig = {
   key: 'root', // Clé de persistance
   storage,

 };
 
const persistedReducer = persistReducer(persistConfig, rootReducer); // Appliquez la configuration de persistance au rootReducer
const store = createStore(persistedReducer, reduxDevtools); // Creation du store Redux
const persistor = persistStore(store);

export { store, persistor };