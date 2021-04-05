import { createSelector } from 'reselect';
import { ApplicationRootState } from 'types';
import { initialState } from './reducer';

const selectGlobal = (state: ApplicationRootState) => state.global || initialState;

const makeSelectRecipes = () => createSelector(selectGlobal, globalState => globalState.recipeData.recipes);

export { selectGlobal, makeSelectRecipes };
