import { action } from 'typesafe-actions';
import { CheckSessionAction, appActionTypes, GetRecipeAction } from './types';

export const checkSession = (userName: string): CheckSessionAction => ({
	userName,
	type: appActionTypes.CHECK_SESSION
});

export const loadRecipes = (searchKey: string) => action(appActionTypes.LOAD_RECIPES, searchKey);

export const recipesLoaded = (recipes: any, searchKey: string) =>
	action(appActionTypes.LOAD_RECIPES_SUCCESS, { recipes: recipes, searchKey: searchKey });

export const recipeLoadingError = (error: object) => action(appActionTypes.LOAD_RECIPES_ERROR, error);
