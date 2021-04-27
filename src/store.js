import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import RootReducer from './reducers/rootReducer';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'REDUX_MOVIE_APP_DI',
	storage,
	whitelist: ['Favorite']
};

const enhancedReducer = persistReducer(persistConfig, RootReducer);
const Store = createStore(enhancedReducer, composeWithDevTools(applyMiddleware(thunk)));
const persistor = persistStore(Store);

// export default Store;

export {
	Store,
	persistor
};