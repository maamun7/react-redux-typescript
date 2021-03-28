import { Reducer } from 'redux';
import { appActionTypes, AppState, AppActions } from './types';

export const initialState: AppState = {
	loading: false,
	error: false,
	success: true,
	recipes: null
};

const globalReducer: Reducer<AppState, AppActions> = (state = initialState, { type, ...payload }) => {
	switch (type) {
		case appActionTypes.CHECK_SESSION:
			return {
				...state,
				...payload
			};

		case appActionTypes.LOAD_RECIPES:
			console.log('switch type : ', payload);

			return {
				...state,
				...payload
			};

		default:
			return state;
	}
};

export default globalReducer;
