import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './Reducers';


const reduxPersistConfig = {
    key : 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['userReducer']
    
}

function configureStore  (initialState) {
  console.log('Store Called')
const persistedReducer = persistReducer(reduxPersistConfig, rootReducer);

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  );

  const persistor = persistStore(store);

  return { store, persistor };
} 


export default configureStore