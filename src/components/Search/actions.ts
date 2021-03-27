import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const changeRecipeName = (recipeName: string) => action(ActionTypes.CHANGE_RECIPE_NAME, { recipeName: recipeName });

export const loadRecipe = () => action(ActionTypes.LOAD_RECIPES);

export const loadedRecipe = (recipes: any, recipeName: string) =>
	action(ActionTypes.LOAD_RECIPES_SUCCESS, { recipes: recipes, recipeName: recipeName });

export const loadingRecipeError = (error: object) => action(ActionTypes.LOAD_RECIPES_ERROR, error);
