import { CheckSessionAction, appActionTypes, GetRecipeAction } from './types';

export const checkSession = (userName: string): CheckSessionAction => ({
	userName,
	type: appActionTypes.CHECK_SESSION
});

export const getRecipe = (searchKey: string): GetRecipeAction => ({
	searchKey,
	type: appActionTypes.RECIPE
});
