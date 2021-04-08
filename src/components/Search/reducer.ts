import { ContainerState, ContainerActions, ActionTypes } from './types';

export const initialState: ContainerState = {
	loading: false,
	error: false,
	recipeName: ''
};

const searchReducer = (state: ContainerState = initialState, action: ContainerActions): ContainerState => {
	switch (action.type) {
		case ActionTypes.CHANGE_RECIPE_NAME:
			return {
				loading: false,
				recipeName: action.payload.recipeName
			};

		default:
			return state;
	}
};

export default searchReducer;
