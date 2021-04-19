import { createSelector } from 'reselect';
import { ApplicationRootState } from '@types';
import { initialState } from './reducer';

const selectRecipe = (state: ApplicationRootState) => state.recipe || initialState;

const getRecipes = () => createSelector(selectRecipe, recipeState => recipeState.recipes);
const getRecipeSuccess = () => createSelector(selectRecipe, recipeState => recipeState.success);
const getRecipeError = () => createSelector(selectRecipe, recipeState => recipeState.error);

export { selectRecipe, getRecipes, getRecipeSuccess, getRecipeError };
