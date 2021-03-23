// Combine all reducers in this file and export the combined reducers.
import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';
import { appReducer } from '../pages/App/reducer';
import history from '../utils/history';
import languageWrapperReducer from '../pages/LanguageWrapper/reducer';

// Merges the main reducer with the router state and dynamically injected reducers

export default function createReducer(injectedReducers = {}): any {
	const rootReducer = combineReducers({
		app: appReducer,
		language: languageWrapperReducer,
		router: connectRouter(history),
		...injectedReducers
	});

	return rootReducer;
}
