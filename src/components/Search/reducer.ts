import { ContainerState, ContainerActions, ActionTypes } from './types';

export const initialState: ContainerState = {
	loading: false,
	error: false,
	recipeName: '',
	recipeData: {
		recipes: []
	}
};

function searchReducer(state: ContainerState = initialState, action: ContainerActions): ContainerState {
	switch (action.type) {
		case ActionTypes.CHANGE_RECIPE_NAME:
			return {
				loading: false,
				recipeName: action.payload.recipeName
			};

		case ActionTypes.LOAD_RECIPES:
			console.log('Type : ', ActionTypes.LOAD_RECIPES);

			return {
				loading: true,
				error: false,
				recipeName: state.recipeName,
				recipeData: {
					recipes: []
				}
			};

		case ActionTypes.LOAD_RECIPES_SUCCESS:
			return {
				loading: false,
				error: state.error,
				recipeName: action.payload.recipeName,
				recipeData: {
					recipes: action.payload.recipes
				}
			};

		case ActionTypes.LOAD_RECIPES_ERROR:
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

export default searchReducer;
