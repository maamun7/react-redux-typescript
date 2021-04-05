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
			return {
				loading: false,
				error: false,
				recipeData: {
					recipes: state.recipeData.recipes
				}
			};

		default:
			return state;
	}
}
