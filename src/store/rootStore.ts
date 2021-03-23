import { routerMiddleware } from 'connected-react-router';
import { History } from 'history';
import { applyMiddleware, compose, createStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createInjectorsEnhancer, forceReducerReload } from 'redux-injectors';
import createSagaMiddleware from 'redux-saga';
import { InjectedStoreParams, RootState } from '../types/';
import createReducer from './reducer';

export function configStore(history: History, initialState?: RootState): Store<RootState> {
	const reduxSagaMonitorOptions = {};

	const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

	const runSaga = sagaMiddleware.run;

	const middleware = [sagaMiddleware, routerMiddleware(history)];

	const enhancers = [applyMiddleware(...middleware), createInjectorsEnhancer({ createReducer, runSaga })];

	let enhancer: any;

	if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
		enhancer = composeWithDevTools(...enhancers);
	} else {
		enhancer = compose(...enhancers);
	}

	const store = createStore(createReducer(), initialState, enhancer) as InjectedStoreParams;

	// Extensions
	store.runSaga = sagaMiddleware.run;
	store.injectedReducers = {}; // Reducer registry
	store.injectedSagas = {}; // Saga registry

	// Enable Webpack hot module replacement for reducers
	// Don't know the use of this portion
	if (module.hot) {
		module.hot.accept('./reducer', () => {
			forceReducerReload(store);
		});
		module.hot.accept();
	}

	return store;
}
