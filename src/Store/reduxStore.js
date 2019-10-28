import { applyMiddleware, compose, createStore } from 'redux';
import combineReducers from 'redux/src/combineReducers';
import AuthReducer from '../reducer/AuthReducer';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import PhotoPageReducer from '../reducer/AppReducer';

let reducers = combineReducers({

	AuthPage: AuthReducer,
	MainPage: PhotoPageReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware, logger)));

// let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

window.store = store;

export default store;
