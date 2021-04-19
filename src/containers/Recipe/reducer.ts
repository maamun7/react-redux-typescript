import { ContainerState as RecipeState, ContainerActions as RecipeActions } from './types';
import ActionTypes from './constants';

export const initialState: RecipeState = {
	error: false,
	success: false,
	recipes: []
};

export default function recipeReducer(state: RecipeState = initialState, action: RecipeActions): RecipeState {
	switch (action.type) {
		case ActionTypes.LOAD_RECIPES_SUCCESS:
			console.log('DEBUGG : ', action.payload.recipes);

			return {
				error: false,
				success: true,
				recipes: action.payload.recipes
			};

		case ActionTypes.LOAD_RECIPES_ERROR:
			console.log('LOAD_RECIPES_ERROR : ', action.payload.recipes);
			const { error, ...rest } = state;
			return {
				error: true,
				...rest
			};

		default:
			return state;
	}
}
