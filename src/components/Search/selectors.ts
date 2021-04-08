import { createSelector } from 'reselect';
import { ApplicationRootState } from '../../types';
import { initialState } from './reducer';

const selectSearch = (state: ApplicationRootState) => state.search || initialState;

const getSelectedRecipeName = () => createSelector(selectSearch, subState => subState.recipeName);
//const getSelectedRecipes = () => createSelector(selectSearch, subState => subState.recipeData);

export { selectSearch, getSelectedRecipeName };
