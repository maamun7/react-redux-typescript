import { action } from 'typesafe-actions';
import ActionTypes from './constants';

export const loadedRecipe = (recipes: any) => action(ActionTypes.LOAD_RECIPES_SUCCESS, { recipes });
export const loadingRecipeError = (error: any) => action(ActionTypes.LOAD_RECIPES_ERROR, error);
