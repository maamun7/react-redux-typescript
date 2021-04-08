import { Reducer } from 'redux';
import { appActionTypes, ContainerState as AppState, ContainerActions as AppActions } from './types';

export const initialState: AppState = {
	loading: false,
	error: false,
	success: true,
	recipeData: {
		recipes: []
	}
};

export default function globalReducer(state: AppState = initialState, action: AppActions): AppState {
	switch (action.type) {
		case appActionTypes.LOAD_RECIPES_SUCCESS:
			console.log('LOAD_RECIPES_SUCCESS : ', appActionTypes.LOAD_RECIPES_SUCCESS);
			return {
				loading: false,
				error: false,
				recipeData: {
					recipes: action.payload.recipes
				}
			};

		case appActionTypes.LOAD_RECIPES_ERROR:
			console.log('LOAD_RECIPES_ERROR : ', appActionTypes.LOAD_RECIPES_ERROR);
			const { error, loading, ...rest } = state;
			return {
				error: action.payload,
				loading: false,
				...rest
			};

		default:
			return state;
	}
}
